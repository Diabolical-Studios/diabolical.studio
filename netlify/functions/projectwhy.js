const { Octokit } = require("@octokit/rest");

exports.handler = async function (event, context) {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const repo = 'ProjectWhy';  // Your repository name
    const owner = 'Diabolical-Studios';  // Your GitHub username or organization

    try {
        const release = await octokit.repos.getLatestRelease({ owner, repo });
        const asset = release.data.assets.find(asset => asset.name === `Build-StandaloneWindows64.zip`);

        if (asset) {
            // Get a temporary URL to download the asset
            const downloadUrl = await octokit.repos.getReleaseAsset({
                owner,
                repo,
                asset_id: asset.id,
                headers: {
                    accept: 'application/octet-stream'
                }
            });

            return {
                statusCode: 302,  // HTTP status code for redirection
                headers: {
                    'Location': downloadUrl.data.url
                },
                body: JSON.stringify({ url: downloadUrl.data.url })
            };
        } else {
            return { statusCode: 404, body: 'No release found for this game' };
        }
    } catch (error) {
        console.error('Failed to fetch or download release:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
