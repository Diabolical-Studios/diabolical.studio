const { Octokit } = require("@octokit/rest");

exports.handler = async function (event, context) {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const repo = 'ProjectWhy';
    const owner = 'Diabolical-Studios';

    try {
        const release = await octokit.repos.getLatestRelease({ owner, repo });
        console.log("Release Data:", release.data);  // Log release data

        const asset = release.data.assets.find(asset => asset.name === 'Build-StandaloneWindows64.zip');
        console.log("Asset Found:", asset);  // Log found asset

        if (asset) {
            const { data: downloadData } = await octokit.request('GET /repos/{owner}/{repo}/releases/assets/{asset_id}', {
                owner,
                repo,
                asset_id: asset.id,
                headers: {
                    accept: 'application/octet-stream',
                    Authorization: `token ${process.env.GITHUB_TOKEN}`
                }
            });

            console.log("Download URL:", downloadData.url);  // Log URL

            return {
                statusCode: 200,
                body: JSON.stringify({ url: downloadData.url })
            };
        } else {
            return { statusCode: 404, body: 'No release found for this game' };
        }
    } catch (error) {
        console.error('Failed to fetch or download release:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
