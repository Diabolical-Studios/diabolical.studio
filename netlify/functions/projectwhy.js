const { Octokit } = require("@octokit/rest");
const axios = require("axios");

exports.handler = async function (event, context) {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const repo = 'ProjectWhy';
    const owner = 'Diabolical-Studios';

    try {
        const release = await octokit.repos.getLatestRelease({ owner, repo });
        const asset = release.data.assets.find(asset => asset.name === 'Build-StandaloneWindows64.zip');

        if (asset) {
            // Fetch the asset using a stream
            const response = await axios({
                url: asset.url,
                method: 'GET',
                responseType: 'stream',
                headers: {
                    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
                    'Accept': 'application/octet-stream'
                }
            });

            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': `attachment; filename="${asset.name}"`
                },
                body: response.data,  // Stream the data to the client
                isBase64Encoded: true
            };
        } else {
            return { statusCode: 404, body: 'No release found for this game' };
        }
    } catch (error) {
        console.error('Failed to fetch or download release:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
