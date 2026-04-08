export const runtime = 'nodejs';

type SubscriptionEntry = {
  email: string;
  createdAt: string;
  userAgent: string | null;
  referer: string | null;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function forwardToResend(entry: SubscriptionEntry) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    return;
  }

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? 'No Show Hair <onboarding@resend.dev>',
      to,
      subject: '새 이메일 구독이 등록되었습니다',
      text: [
        `Email: ${entry.email}`,
        `Created At: ${entry.createdAt}`,
        `User Agent: ${entry.userAgent ?? 'unknown'}`,
        `Referer: ${entry.referer ?? 'unknown'}`,
      ].join('\n'),
    }),
  });
}

export async function POST(request: Request) {
  let email: string | undefined;

  try {
    const body = (await request.json()) as { email?: string };
    email = body.email?.trim().toLowerCase();
  } catch {
    return Response.json(
      { error: '요청 본문을 읽을 수 없습니다.' },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return Response.json(
      { error: '유효한 이메일 주소를 입력해주세요.' },
      { status: 400 }
    );
  }

  const entry: SubscriptionEntry = {
    email,
    createdAt: new Date().toISOString(),
    userAgent: request.headers.get('user-agent'),
    referer: request.headers.get('referer'),
  };

  try {
    await forwardToResend(entry);
  } catch (error) {
    console.error('Failed to send subscription email:', error);
    return Response.json(
      { error: '이메일 전송에 실패했습니다.' },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
