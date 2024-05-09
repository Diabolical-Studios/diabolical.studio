const { Octokit } = require("@octokit/rest");
const axios = require("axios");

exports.handler = async function (event, context) {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const gameId = event.queryStringParameters.gameId;
    const repo = 'ProjectWhy';  // Your repository name
    const owner = 'Diabolical-Studios';  // Your GitHub username or organization

    try {
        const release = await octokit.repos.getLatestRelease({ owner, repo });
        const asset = release.data.assets.find(asset => asset.name === `Build-StandaloneWindows64.zip`);

        if (asset) {
            const fileResponse = await axios({
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
                    'Content-Type': 'application/zip',
                    'Content-Disposition': `attachment; filename="${gameId}.zip"`
                },
                body: fileResponse.data.read().toString('base64'),
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
