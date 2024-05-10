const https = require('https');

exports.handler = function (event, context, callback) {
  const { gameId, version = 'latest' } = event.queryStringParameters;
  const baseUrl = process.env.ORACLE_CLOUD_STORAGE_URL; // Your stored base URL
  const gamePath = `${baseUrl}${gameId}/Versions/Build-StandaloneWindows64-${version}.zip`;

  const req = https.get(gamePath, (res) => {
    // Set response headers
    let headers = {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename=Build-${gameId}-${version}.zip`
    };
    callback(null, {
      statusCode: 200,
      headers: headers,
      body: res.pipe(process.stdout) // Pipe the response to the output
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve game' })
    });
  });
};
