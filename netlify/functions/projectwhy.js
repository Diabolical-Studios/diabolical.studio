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
            const response = await axios({
                url: asset.url,
                method: 'GET',
                responseType: 'arraybuffer',  // Fetch as ArrayBuffer for easier conversion to base64
                headers: {
                    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
                    'Accept': 'application/octet-stream'
                }
            });

            const base64 = Buffer.from(response.data).toString('base64');

            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': `attachment; filename="${asset.name}"`,
                },
                body: base64,
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
