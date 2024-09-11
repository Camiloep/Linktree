import axios from 'axios';

const ACCESS_TOKEN = process.env.FACEBOOK_API_ACCESS_TOKEN;
const PIXEL_ID = process.env.PIXEL_ID;

export async function sendEventToFacebook(event: any) {
  const url = `https://graph.facebook.com/v15.0/${PIXEL_ID}/events`;

  const payload = {
    data: [
      {
        event_name: event.name,
        event_time: Math.floor(new Date().getTime() / 1000),
        action_source: 'website',
        user_data: {
          client_ip_address: event.clientIp,
          client_user_agent: event.userAgent,
          // Otros datos relevantes
        },
        custom_data: event.customData,
      },
    ],
    access_token: ACCESS_TOKEN,
  };

  try {
    const response = await axios.post(url, payload);
    console.log('Evento enviado a Facebook:', response.data);
  } catch (error) {
    console.error('Error al enviar evento a Facebook:', error);
  }
}