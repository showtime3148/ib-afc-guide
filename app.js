(function () {
  const KEY = "afc-guide-progress-v1";
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { done = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} };

  // ---------- tabs ----------
  document.querySelectorAll(".tabs button").forEach((b) =>
    b.addEventListener("click", () => showTab(b.dataset.tab))
  );
  function showTab(name) {
    document.querySelectorAll(".tabs button").forEach((x) => x.setAttribute("aria-selected", x.dataset.tab === name));
    document.querySelectorAll(".panel").forEach((p) => (p.hidden = p.id !== "tab-" + name));
    window.scrollTo({ top: 0 });
  }

  // ---------- checklist ----------
  function renderSteps() {
    const el = $("#tab-steps");
    el.innerHTML = `<h2>단계별 체크리스트</h2>
      <p class="lead">신청 전 준비부터 제출 이후까지 순서대로 체크하세요. 각 항목 아래에 먼저 해 본 학교의 팁이 있습니다.</p>
      <h3 style="margin:0 0 8px">필수 서류 5종 한눈에 보기</h3>
      <table class="docs"><thead><tr><th>서류 (IB 표기)</th><th>내용</th><th>준비 기간</th><th>담당</th></tr></thead><tbody>
      ${DOCS.map((d) => `<tr><td>${esc(d.name)}</td><td>${esc(d.ko)}</td><td>${esc(d.lead)}</td><td>${esc(d.who)}</td></tr>`).join("")}
      </tbody></table>` +
      STAGES.map((s) => `
      <div class="stage" data-stage="${s.id}">
        <div class="stage-head"><h3>${esc(s.title)}</h3><span class="when">${esc(s.when)}</span></div>
        <div class="bar"><i></i></div>
        <ul>${s.items.map((it) => `
          <li class="${done[it.id] ? "done" : ""}">
            <input type="checkbox" id="c-${it.id}" data-id="${it.id}" ${done[it.id] ? "checked" : ""}>
            <div><label for="c-${it.id}">${esc(it.text)}</label><p class="tip">${esc(it.tip)}</p></div>
          </li>`).join("")}</ul>
      </div>`).join("") +
      `<div class="toolbar"><button class="btn ghost" id="reset">체크 모두 지우기</button></div>`;
    el.querySelectorAll("input[type=checkbox]").forEach((c) =>
      c.addEventListener("change", () => {
        done[c.dataset.id] = c.checked; if (!c.checked) delete done[c.dataset.id];
        c.closest("li").classList.toggle("done", c.checked); save(); updateProgress();
      })
    );
    $("#reset").addEventListener("click", () => {
      if (!confirmReset()) return;
      done = {}; save(); renderSteps(); updateProgress();
    });
    updateProgress();
  }
  function confirmReset() { return window.confirm ? window.confirm("체크한 내용을 모두 지울까요?") : true; }
  function updateProgress() {
    const all = STAGES.flatMap((s) => s.items.map((i) => i.id));
    const n = all.filter((id) => done[id]).length;
    const pct = Math.round((n / all.length) * 100);
    $("#pct").textContent = pct + "%";
    $(".ring").style.setProperty("--p", pct + "%");
    $("#pct-text").textContent = `${n} / ${all.length} 완료`;
    STAGES.forEach((s) => {
      const k = s.items.filter((i) => done[i.id]).length;
      const bar = document.querySelector(`[data-stage="${s.id}"] .bar i`);
      if (bar) bar.style.width = Math.round((k / s.items.length) * 100) + "%";
    });
  }

  // ---------- guide ----------
  let guideFilter = "all", guideQuery = "";
  function groupOf(sec) {
    if (sec.id.startsWith("p")) return "profile";
    if ((sec.standard || "").startsWith("Standard A")) return "A";
    if ((sec.standard || "").startsWith("Standard B1")) return "B1";
    return "B2";
  }
  function renderGuide() {
    const el = $("#tab-guide");
    const groups = [["all", "전체"], ["profile", "학교 소개·프로그램 정보"], ["A", "기준 A 철학"], ["B1", "기준 B1 리더십"], ["B2", "기준 B2 자원"]];
    el.innerHTML = `<h2>항목별 작성 가이드</h2>
      <p class="lead">AFC 문항을 영어·한국어로 함께 보고, 무엇을 써야 하는지와 예시 답변을 확인하세요. 예시를 그대로 쓰지 말고 우리 학교 상황으로 바꿔 쓰세요.</p>
      <div class="toolbar"><input class="search" id="gq" placeholder="문항 검색 (예: mission, 언어 정책, 예산)" value="${esc(guideQuery)}"></div>
      <div class="chip-row">${groups.map(([k, v]) => `<button class="chip ${guideFilter === k ? "on" : ""}" data-g="${k}">${v}</button>`).join("")}</div>
      <div id="glist"></div>`;
    el.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => { guideFilter = c.dataset.g; renderGuide(); }));
    $("#gq").addEventListener("input", (e) => { guideQuery = e.target.value; drawGuideList(); });
    drawGuideList();
  }
  function drawGuideList() {
    const q = guideQuery.trim().toLowerCase();
    const list = $("#glist");
    const secs = GUIDE.filter((s) => guideFilter === "all" || groupOf(s) === guideFilter)
      .map((s) => ({ s, items: s.items.filter((it) => !q || [it.qEn, it.qKo, it.note, s.title, s.titleKo].join(" ").toLowerCase().includes(q)) }))
      .filter((x) => x.items.length);
    if (!secs.length) { list.innerHTML = `<p class="lead">검색 결과가 없습니다.</p>`; return; }
    list.innerHTML = secs.map(({ s, items }) => `
      <details class="sec" ${q ? "open" : ""}>
        <summary><span class="sec-title">${esc(s.title)}${s.titleKo ? `<span class="sec-ko">${esc(s.titleKo)}</span>` : ""}</span><span class="count">${items.length}문항</span></summary>
        ${items.map((it) => {
          const i = GUIDE.indexOf(s) + ":" + s.items.indexOf(it);
          return `<div class="q">
            <p class="q-en">${esc(it.qEn)}${it.limit ? `<span class="limit">${it.limit}단어 이내</span>` : ""}</p>
            <p class="q-ko">${esc(it.qKo)}</p>
            ${it.note ? `<div class="note">${esc(it.note)}</div>` : ""}
            ${(it.exKo || it.exEn) ? `<details class="ex"><summary>예당고 예시 답변 보기</summary>
              <div class="ex-body">
                <div><button class="copy" data-copy="en">복사</button><h4>English</h4><span>${esc(it.exEn)}</span></div>
                <div><button class="copy" data-copy="ko">복사</button><h4>한국어</h4><span>${esc(it.exKo)}</span></div>
              </div></details>` : ""}
            <button class="btn ghost use-ai" data-ref="${i}">이 문항 AI 도우미로 쓰기</button>
          </div>`;
        }).join("")}
      </details>`).join("");
    list.querySelectorAll(".copy").forEach((b) => b.addEventListener("click", () => copyText(b.nextElementSibling.nextElementSibling.textContent, b)));
    list.querySelectorAll(".use-ai").forEach((b) => b.addEventListener("click", () => {
      const [a, c] = b.dataset.ref.split(":").map(Number);
      aiState.ref = `${a}:${c}`; renderAI(); showTab("ai");
    }));
  }
  function copyText(t, btn) {
    const done = () => { const o = btn.textContent; btn.textContent = "복사됨"; setTimeout(() => (btn.textContent = o), 1200); };
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, () => fallbackCopy(t, done)); else fallbackCopy(t, done);
  }
  function fallbackCopy(t, cb) {
    const ta = document.createElement("textarea"); ta.value = t; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {} ta.remove(); cb();
  }

  // ---------- troubleshooting ----------
  let tq = "";
  function renderTrouble() {
    const el = $("#tab-trouble");
    el.innerHTML = `<h2>자주 막히는 문제 해결</h2>
      <p class="lead">화면에 뜬 오류 문구나 궁금한 단어를 검색해 보세요. 실제 신청 과정에서 막혔던 지점들입니다.</p>
      <div class="toolbar"><input class="search" id="tq" placeholder="예: not completed, 노란색, 교사 수, Agreement" value="${esc(tq)}"></div>
      <div id="tlist"></div>`;
    $("#tq").addEventListener("input", (e) => { tq = e.target.value; drawTrouble(); });
    drawTrouble();
  }
  function drawTrouble() {
    const q = tq.trim().toLowerCase();
    const items = TROUBLES.filter((t) => !q || [t.q, t.a, t.tags.join(" "), t.steps.join(" ")].join(" ").toLowerCase().includes(q));
    $("#tlist").innerHTML = items.length ? items.map((t) => `
      <div class="trouble"><div class="tags">${t.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>
      <h3>${esc(t.q)}</h3><p style="margin:0">${esc(t.a)}</p>
      <ol>${t.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol></div>`).join("")
      : `<p class="lead">찾는 내용이 없습니다. 오류 창의 영어 문구 일부로 검색해 보세요.</p>`;
  }

  // ---------- AI helper ----------
  const aiState = { ref: "", notes: "", tone: "plain", out: null, loading: false, msg: "" };
  function currentItem() {
    if (!aiState.ref) return null;
    const [a, c] = aiState.ref.split(":").map(Number);
    const s = GUIDE[a]; return s ? { s, it: s.items[c] } : null;
  }
  function renderAI() {
    const el = $("#tab-ai");
    const opts = GUIDE.map((s, a) => `<optgroup label="${esc(s.title.slice(0, 80))}">${s.items.map((it, c) =>
      `<option value="${a}:${c}" ${aiState.ref === `${a}:${c}` ? "selected" : ""}>${esc(it.qKo.slice(0, 70))}</option>`).join("")}</optgroup>`).join("");
    const cur = currentItem();
    el.innerHTML = `<h2>AI 영문 답안 도우미</h2>
      <p class="lead">우리 학교 상황을 한국어로 적으면, AFC 문항에 맞는 영어 답변 초안과 한국어 대역을 만들어 줍니다. 결과는 초안이니 사실 관계를 꼭 확인하세요.</p>
      <div class="form">
        <label for="aq">문항 선택</label>
        <select id="aq"><option value="">문항을 고르세요</option>${opts}</select>
        ${cur ? `<p class="msg"><b>${esc(cur.it.qEn)}</b>${cur.it.limit ? ` <span class="limit">${cur.it.limit}단어 이내</span>` : ""}</p>` : ""}
        <label for="an">우리 학교 상황 (한국어로 자유롭게)</label>
        <textarea id="an" placeholder="예: 학년당 60명 공립 일반고, 2년 전부터 독서 토론 수업을 해 옴, 교육청 IB 관심학교, 교사 대부분 IB 경험 없음 …">${esc(aiState.notes)}</textarea>
        <div class="row">
          <div><label for="at">문체</label>
            <select id="at">
              <option value="plain" ${aiState.tone === "plain" ? "selected" : ""}>쉽고 솔직하게 (권장)</option>
              <option value="formal" ${aiState.tone === "formal" ? "selected" : ""}>격식 있게</option>
            </select></div>
        </div>
        <div class="toolbar" style="margin-top:16px">
          <button class="btn" id="go" ${aiState.loading ? "disabled" : ""}>${aiState.loading ? "작성 중…" : "영문 초안 만들기"}</button>
          <button class="btn ghost" id="cp">Claude에 붙여넣을 프롬프트 복사</button>
        </div>
        <p class="msg" id="amsg">${esc(aiState.msg)}</p>
        ${aiState.out ? `<div class="out">
          <div><button class="copy" id="c1">복사</button><h4>English draft</h4><span id="o-en">${esc(aiState.out.en)}</span></div>
          <div><button class="copy" id="c2">복사</button><h4>한국어 대역</h4><span id="o-ko">${esc(aiState.out.ko)}</span></div>
        </div>${aiState.out.words ? `<p class="msg">영문 약 ${aiState.out.words}단어</p>` : ""}` : ""}
      </div>`;
    $("#aq").addEventListener("change", (e) => { aiState.ref = e.target.value; aiState.out = null; renderAI(); });
    $("#an").addEventListener("input", (e) => (aiState.notes = e.target.value));
    $("#at").addEventListener("change", (e) => (aiState.tone = e.target.value));
    $("#go").addEventListener("click", generate);
    $("#cp").addEventListener("click", (e) => {
      const p = buildPrompt(); if (!p) return;
      copyText(p, e.target); aiState.msg = "프롬프트를 복사했습니다. Claude 대화창에 붙여넣으세요."; $("#amsg").textContent = aiState.msg;
    });
    if (aiState.out) {
      $("#c1").addEventListener("click", (e) => copyText(aiState.out.en, e.target));
      $("#c2").addEventListener("click", (e) => copyText(aiState.out.ko, e.target));
    }
  }
  function buildPrompt() {
    const cur = currentItem();
    if (!cur) { aiState.msg = "먼저 문항을 고르세요."; $("#amsg").textContent = aiState.msg; return null; }
    if (!aiState.notes.trim()) { aiState.msg = "우리 학교 상황을 한두 줄이라도 적어 주세요."; $("#amsg").textContent = aiState.msg; return null; }
    return `You are helping a Korean school coordinator answer the IB Application for Candidacy (Diploma Programme).
Question: ${cur.it.qEn}
Section: ${cur.s.title}
${cur.it.limit ? `Word limit: ${cur.it.limit} words.` : ""}
School facts (Korean notes from the coordinator):
${aiState.notes}
Write the answer in clear, ${aiState.tone === "formal" ? "formal" : "plain, honest"} English in the school's voice ("we", "our school"). Use only the facts given; where a needed fact is missing, write [To confirm: ...] instead of inventing it. Then give a faithful Korean translation.`;
  }
  async function generate() {
    const cur = currentItem();
    if (!buildPrompt()) return;
    aiState.loading = true; aiState.msg = ""; renderAI();
    try {
      const r = await fetch("/api/draft", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: cur.it.qEn, questionKo: cur.it.qKo, section: cur.s.title, limit: cur.it.limit, notes: aiState.notes, tone: aiState.tone, guide: cur.it.note })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || "요청에 실패했습니다.");
      aiState.out = data;
    } catch (e) {
      aiState.msg = e.message + " 'Claude에 붙여넣을 프롬프트 복사'로 대신 사용할 수 있습니다.";
    }
    aiState.loading = false; renderAI();
  }

  renderSteps(); renderGuide(); renderTrouble(); renderAI();
})();
