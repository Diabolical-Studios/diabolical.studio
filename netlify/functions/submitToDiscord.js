exports.handler = async (event) => {
    const {name, email, message} = JSON.parse(event.body);
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK;
  
    const discordMessage = {
      content: `New form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n@blazitt`
    };
  
    const response = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordMessage),
    });
  
    if (!response.ok) {
      return { statusCode: 500, body: "Failed to submit to Discord" };
    }
  
    return { statusCode: 200, body: "Success" };
  };
  