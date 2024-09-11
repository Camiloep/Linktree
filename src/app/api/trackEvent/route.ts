import { sendEventToFacebook } from '@/utils/facebookConversion'

export async function POST(req: any) {
    const event = await req.json();
  
    await sendEventToFacebook(event);
    return new Response(JSON.stringify({ message: 'Evento enviado' }), { status: 200 });
  }