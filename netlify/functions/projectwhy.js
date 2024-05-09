const { Octokit } = require("@octokit/rest");

exports.handler = async function (event, context) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    const gameId = event.queryStringParameters.gameId;
    const repo = 'ProjectWhy'; // Replace with your repository name
    const owner = 'Diabolical-Studios'; // Replace with your GitHub username or organization

    try {
        const release = await octokit.repos.getLatestRelease({ owner, repo });
        const asset = release.data.assets.find(asset => asset.name === `Build-StandaloneWindows64.zip`);

        if (asset) {
            return {
                statusCode: 200,
                body: JSON.stringify({ url: asset.browser_download_url })
            };
        } else {
            return { statusCode: 404, body: 'No release found for this game' };
        }
    } catch (error) {
        console.error('Failed to fetch latest release:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
