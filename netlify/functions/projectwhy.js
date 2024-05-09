const { Octokit } = require("@octokit/rest");

exports.handler = async function (event, context) {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const repo = 'ProjectWhy';
    const owner = 'Diabolical-Studios';

    try {
        const release = await octokit.repos.getLatestRelease({ owner, repo });
        const asset = release.data.assets.find(asset => asset.name === 'Build-StandaloneWindows64.zip');

        if (asset) {
            // Log the URL to verify it's correct
            console.log("Asset URL for download:", asset.browser_download_url);

            // Redirect to the asset's browser download URL
            return {
                statusCode: 302,  // Use HTTP status code for redirection
                headers: {
                    'Location': asset.browser_download_url
                },
                body: ''  // No need to return a body for redirection
            };
        } else {
            return { statusCode: 404, body: 'No release found for this game' };
        }
    } catch (error) {
        console.error('Failed to fetch or download release:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
