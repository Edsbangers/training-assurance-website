import { NextResponse } from 'next/server';

const HOST = 'www.trainingassuranceconsultancy.com';
const KEY = '6bb44dad3363ea66a8fe0697e49caa14';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const STATIC_URLS = [
  '/',
  '/about',
  '/blog',
  '/case-studies',
  '/links',
  '/picms',
  '/picms/demo',
  '/privacy-policy',
  '/resources',
  '/security',
  '/security/certifications',
  '/software-solutions',
  '/terms-of-service',
].map((path) => `https://${HOST}${path}`);

export async function GET() {
  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: STATIC_URLS,
      }),
    });

    if (res.ok || res.status === 202) {
      return NextResponse.json({ ok: true, submitted: STATIC_URLS.length, status: res.status });
    }

    const text = await res.text();
    return NextResponse.json({ ok: false, status: res.status, body: text }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
