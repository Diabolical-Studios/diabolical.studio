// File: /netlify/functions/retrieveGame.js
const axios = require('axios');

exports.handler = async (event, context) => {
  const { gameId, version = 'latest' } = event.queryStringParameters;
  const baseUrl = process.env.ORACLE_CLOUD_STORAGE_URL; // Set this in your Netlify environment variables
  const gamePath = `${baseUrl}${gameId}/Versions/Build-StandaloneWindows64-${version}.zip`;

  try {
    const response = await axios({
      method: 'get',
      url: gamePath,
      responseType: 'stream'
    });

    return {
      statusCode: 200,
      body: response.data,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename=Build-${gameId}-${version}.zip`
      }
    };
  } catch (error) {
    console.error('Error retrieving game:', error);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: 'Failed to retrieve game'
      })
    };
  }
};
