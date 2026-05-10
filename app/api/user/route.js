import { neon } from '@neondatabase/serverless';

function getSQL() {
  return neon(process.env.DATABASE_URL);
}

export async function GET(request) {
  const sql = getSQL();
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get('uid');
  if (!uid) return Response.json({ error: 'uid required' }, { status: 400 });

  const rows = await sql`SELECT * FROM users WHERE uid = ${uid}`;
  if (rows.length === 0) return Response.json(null);

  const r = rows[0];
  return Response.json({
    profile: { name: r.name, emoji: r.emoji },
    kirbyCount: r.kirby_count,
    wordStats: r.word_stats,
    progress: r.progress,
    todayWords: r.today_words,
    customVocab: r.custom_vocab,
  });
}

export async function POST(request) {
  const sql = getSQL();
  const body = await request.json();
  const { uid, ...data } = body;
  if (!uid) return Response.json({ error: 'uid required' }, { status: 400 });

  await sql`
    INSERT INTO users (uid, name, emoji, kirby_count, word_stats, progress, today_words, custom_vocab, updated_at)
    VALUES (
      ${uid},
      ${data.profile?.name ?? ''},
      ${data.profile?.emoji ?? '👧'},
      ${data.kirbyCount ?? 7},
      ${JSON.stringify(data.wordStats ?? {})}::jsonb,
      ${JSON.stringify(data.progress ?? {})}::jsonb,
      ${JSON.stringify(data.todayWords ?? {})}::jsonb,
      ${JSON.stringify(data.customVocab ?? {})}::jsonb,
      NOW()
    )
    ON CONFLICT (uid) DO UPDATE SET
      name         = COALESCE(EXCLUDED.name, users.name),
      emoji        = COALESCE(EXCLUDED.emoji, users.emoji),
      kirby_count  = COALESCE(EXCLUDED.kirby_count, users.kirby_count),
      word_stats   = CASE WHEN EXCLUDED.word_stats::text <> '{}'
                          THEN EXCLUDED.word_stats ELSE users.word_stats END,
      progress     = CASE WHEN EXCLUDED.progress::text <> '{}'
                          THEN EXCLUDED.progress ELSE users.progress END,
      today_words  = CASE WHEN EXCLUDED.today_words::text <> '{}'
                          THEN EXCLUDED.today_words ELSE users.today_words END,
      custom_vocab = CASE WHEN EXCLUDED.custom_vocab::text <> '{}'
                          THEN EXCLUDED.custom_vocab ELSE users.custom_vocab END,
      updated_at   = NOW()
  `;

  return Response.json({ ok: true });
}
