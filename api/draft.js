// Vercel 서버리스 함수: AFC 문항 영문 답안 초안 생성
// 환경 변수 ANTHROPIC_API_KEY 가 있어야 동작합니다. (선택) ANTHROPIC_MODEL 로 모델을 바꿀 수 있습니다.

const MAX_NOTES = 4000;

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "POST 요청만 받습니다." });
    return;
  }
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    res.status(503).json({ error: "AI 기능이 아직 설정되지 않았습니다(관리자: ANTHROPIC_API_KEY 필요)." });
    return;
  }
  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  const { question = "", questionKo = "", section = "", limit = null, notes = "", tone = "plain", guide = "" } = body || {};
  if (!question || !notes.trim()) {
    res.status(400).json({ error: "문항과 학교 상황을 입력해 주세요." });
    return;
  }
  if (notes.length > MAX_NOTES) {
    res.status(400).json({ error: `학교 상황은 ${MAX_NOTES}자 이내로 줄여 주세요.` });
    return;
  }

  const system = `You help coordinators of Korean schools write answers for the IB Diploma Programme Application for Candidacy (AFC).
Rules:
- Write in the school's voice ("we", "our school"), in ${tone === "formal" ? "formal but clear" : "plain, honest, concrete"} English. Avoid buzzwords and exaggeration.
- Use only facts the coordinator gives. If a needed fact is missing, insert [To confirm: ...] rather than inventing names, numbers or dates.
- Answer exactly what the question asks.${limit ? ` Stay under ${limit} words.` : " Keep it concise."}
- Then provide a faithful Korean translation of the same answer.
Return ONLY a JSON object: {"en": "...", "ko": "..."}`;

  const user = `Section: ${section}
Question: ${question}
Korean question: ${questionKo}
Guidance for this item: ${guide || "(none)"}
School facts from the coordinator (Korean):
${notes}`;

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5",
        max_tokens: 3000,
        system,
        messages: [{ role: "user", content: user }]
      })
    });
    const data = await r.json();
    if (!r.ok) {
      res.status(502).json({ error: "AI 응답 오류: " + ((data && data.error && data.error.message) || r.status) });
      return;
    }
    const text = (data.content || []).filter((c) => c.type === "text").map((c) => c.text).join("");
    const m = text.match(/\{[\s\S]*\}/);
    let out;
    try { out = JSON.parse(m ? m[0] : text); } catch (e) { out = { en: text, ko: "" }; }
    const words = (out.en || "").trim().split(/\s+/).filter(Boolean).length;
    res.status(200).json({ en: out.en || "", ko: out.ko || "", words });
  } catch (e) {
    res.status(500).json({ error: "AI 서버에 연결하지 못했습니다." });
  }
};
