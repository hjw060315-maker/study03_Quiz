// ===== 설정 =====
const CATEGORIES = ["한국사", "세계지리", "과학", "예술과 문화"];
const QUESTIONS_PER_ROUND = 10;

const MODES = {
  practice: { label: "연습", timeLimit: 0, hint: false, ranked: false, retry: true },
  speed: { label: "스피드", timeLimit: 15, hint: false, ranked: true, retry: false },
  hint: { label: "힌트", timeLimit: 0, hint: true, ranked: true, retry: false }
};

// ===== 순수 함수 =====
function shuffle(array, rand = Math.random) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function formatScore(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function prepareQuestion(q, rand = Math.random) {
  const order = shuffle([0, 1, 2, 3], rand);
  return { ...q, choices: order.map(i => q.choices[i]), answer: order.indexOf(q.answer) };
}

function buildRound(questions, category, rand = Math.random) {
  const picked = questions.filter(q => q.category === category);
  return shuffle(picked, rand).map(q => prepareQuestion(q, rand));
}

function validateQuestions(questions) {
  const errors = [];
  const seen = new Set();
  for (const q of questions) {
    const add = reason => errors.push({ id: q.id, category: q.category, reason });
    if (seen.has(q.id)) add("id 중복");
    seen.add(q.id);
    if (!CATEGORIES.includes(q.category)) add("알 수 없는 카테고리");
    if (!q.question) add("문제 문장 없음");
    if (!Array.isArray(q.choices) || q.choices.length !== 4) add("보기가 4개가 아님");
    else if (new Set(q.choices).size !== 4) add("보기 중복");
    if (![0, 1, 2, 3].includes(q.answer)) add("정답 인덱스가 0~3이 아님");
    if (!q.explanation) add("해설 없음");
    if (!q.source) add("출처 없음");
    if (!/^https?:\/\//.test(q.sourceUrl || "")) add("출처 주소가 http로 시작하지 않음");
  }
  for (const c of CATEGORIES) {
    const n = questions.filter(q => q.category === c).length;
    if (n !== QUESTIONS_PER_ROUND) errors.push({ id: "-", category: c, reason: `문항 수 ${n}개(10개여야 함)` });
  }
  return errors;
}

function reportQuestions() {
  const errors = validateQuestions(QUESTIONS);
  for (const e of errors) console.log(`[${e.category}] ${e.id}: ${e.reason}`);
  console.log(`문항 ${QUESTIONS.length}개, 오류 ${errors.length}건`);
  return errors.length;
}

function scoreFor(correct, hintUsed) {
  if (!correct) return 0;
  return hintUsed ? 0.5 : 1;
}

// ===== 순위표 =====

// ===== 자체 점검 =====
const TESTS = [];
function test(name, fn) {
  TESTS.push({ name, fn });
}
function assertEqual(actual, expected, label = "") {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) throw new Error(`${label} 기대 ${e}, 실제 ${a}`);
}
function runSelfTests() {
  let failed = 0;
  for (const t of TESTS) {
    try {
      t.fn();
      console.log("통과 " + t.name);
    } catch (err) {
      failed++;
      console.log("실패 " + t.name + ": " + err.message);
    }
  }
  console.log(`${TESTS.length - failed} / ${TESTS.length} 통과`);
  return failed;
}
const zero = () => 0;

test("shuffle: rand가 0이면 정해진 순서", () => assertEqual(shuffle([1, 2, 3, 4], zero), [2, 3, 4, 1]));
test("shuffle: 원본 배열을 바꾸지 않음", () => {
  const a = [1, 2, 3];
  shuffle(a);
  assertEqual(a, [1, 2, 3]);
});
test("formatScore: 정수와 0.5", () => {
  assertEqual(formatScore(8), "8");
  assertEqual(formatScore(7.5), "7.5");
  assertEqual(formatScore(0), "0");
});
function sampleQuestions() {
  return CATEGORIES.flatMap((c, ci) => Array.from({ length: 10 }, (_, i) => ({
    id: `t${ci}-${i}`, category: c, question: "문제", choices: ["가", "나", "다", "라"],
    answer: 0, explanation: "해설", source: "출처", sourceUrl: "https://example.com"
  })));
}
test("prepareQuestion: 섞은 뒤에도 정답 보기가 같음", () => {
  const q = { id: "x", choices: ["A", "B", "C", "D"], answer: 0 };
  const p = prepareQuestion(q, zero);
  assertEqual(p.choices, ["B", "C", "D", "A"]);
  assertEqual(p.answer, 3);
  assertEqual(q.choices, ["A", "B", "C", "D"], "원본 유지");
});
test("buildRound: 해당 카테고리 10개, 정답 유지", () => {
  const all = sampleQuestions();
  all[10].choices = ["정답", "오답1", "오답2", "오답3"];
  const round = buildRound(all, "세계지리");
  assertEqual(round.length, 10);
  assertEqual(round.every(q => q.category === "세계지리"), true);
  const moved = round.find(q => q.id === "t1-0");
  assertEqual(moved.choices[moved.answer], "정답");
});
test("validateQuestions: 올바른 40개는 오류 0건", () => assertEqual(validateQuestions(sampleQuestions()), []));
test("validateQuestions: 보기 3개", () => {
  const all = sampleQuestions();
  all[0].choices = ["가", "나", "다"];
  assertEqual(validateQuestions(all).map(e => e.reason), ["보기가 4개가 아님"]);
});
test("validateQuestions: 보기 중복", () => {
  const all = sampleQuestions();
  all[0].choices = ["가", "가", "다", "라"];
  assertEqual(validateQuestions(all).map(e => e.reason), ["보기 중복"]);
});
test("validateQuestions: id 중복", () => {
  const all = sampleQuestions();
  all[1].id = all[0].id;
  assertEqual(validateQuestions(all).map(e => e.reason), ["id 중복"]);
});
test("validateQuestions: 정답 인덱스 범위", () => {
  const all = sampleQuestions();
  all[0].answer = 4;
  assertEqual(validateQuestions(all).map(e => e.reason), ["정답 인덱스가 0~3이 아님"]);
});
test("validateQuestions: 해설·출처 누락", () => {
  const all = sampleQuestions();
  all[0].explanation = "";
  all[0].source = "";
  all[0].sourceUrl = "example.com";
  assertEqual(validateQuestions(all).map(e => e.reason), ["해설 없음", "출처 없음", "출처 주소가 http로 시작하지 않음"]);
});
test("validateQuestions: 카테고리 문항 수", () => {
  const all = sampleQuestions().slice(1);
  assertEqual(validateQuestions(all), [{ id: "-", category: "한국사", reason: "문항 수 9개(10개여야 함)" }]);
});
test("문항 데이터: 오류 0건", () => assertEqual(validateQuestions(QUESTIONS), []));
test("scoreFor: 정답 1점, 힌트 정답 0.5점, 오답 0점", () => {
  assertEqual(scoreFor(true, false), 1);
  assertEqual(scoreFor(true, true), 0.5);
  assertEqual(scoreFor(false, false), 0);
  assertEqual(scoreFor(false, true), 0);
});
test("MODES: 모드별 규칙", () => {
  assertEqual([MODES.practice.timeLimit, MODES.practice.hint, MODES.practice.ranked, MODES.practice.retry], [0, false, false, true]);
  assertEqual([MODES.speed.timeLimit, MODES.speed.hint, MODES.speed.ranked, MODES.speed.retry], [15, false, true, false]);
  assertEqual([MODES.hint.timeLimit, MODES.hint.hint, MODES.hint.ranked, MODES.hint.retry], [0, true, true, false]);
});

// ===== 화면 =====
const state = {
  mode: "practice",
  category: null,
  questions: [],
  index: 0,
  score: 0,
  firstScore: 0,
  wrong: [],
  isRetry: false,
  hintUsed: false,
  timerId: null,
  timeLeft: 0
};
let brokenCategories = new Set();

function $(id) {
  return document.getElementById(id);
}

function showScreen(name) {
  for (const section of document.querySelectorAll(".screen")) {
    section.hidden = section.id !== "screen-" + name;
  }
}

function renderOptionButtons(containerId, options, selected, onPick) {
  const box = $(containerId);
  box.innerHTML = "";
  for (const [value, label] of options) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = label;
    btn.classList.toggle("selected", value === selected);
    btn.addEventListener("click", () => onPick(value));
    box.appendChild(btn);
  }
}

function renderStart() {
  renderOptionButtons("mode-buttons", Object.entries(MODES).map(([k, m]) => [k, m.label]), state.mode, mode => {
    state.mode = mode;
    renderStart();
  });
  $("start-notice").hidden = MODES[state.mode].ranked;
  const box = $("category-buttons");
  box.innerHTML = "";
  for (const c of CATEGORIES) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = c;
    btn.disabled = brokenCategories.has(c);
    btn.addEventListener("click", () => startGame(state.mode, c));
    box.appendChild(btn);
  }
  showScreen("start");
}

function startGame(mode, category) {
  state.mode = mode;
  state.category = category;
  state.questions = buildRound(QUESTIONS, category);
  state.index = 0;
  state.score = 0;
  state.wrong = [];
  state.isRetry = false;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.index];
  const mode = MODES[state.mode];
  state.hintUsed = false;
  $("quiz-label").textContent = `${state.category} · ${mode.label}${state.isRetry ? " · 다시 풀기" : ""}`;
  $("quiz-progress").textContent = `${state.index + 1} / ${state.questions.length}`;
  $("quiz-score").textContent = `점수 ${formatScore(state.score)}`;
  $("quiz-question").textContent = q.question;
  const box = $("quiz-choices");
  box.innerHTML = "";
  q.choices.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.textContent = `${i + 1}. ${text}`;
    btn.addEventListener("click", () => selectAnswer(i));
    box.appendChild(btn);
  });
  $("quiz-feedback").hidden = true;
  $("timer").hidden = mode.timeLimit === 0;
  if (mode.timeLimit > 0) startTimer();
}

function selectAnswer(i) {
  stopTimer();
  const q = state.questions[state.index];
  const correct = i === q.answer;
  state.score += scoreFor(correct, state.hintUsed);
  if (!correct) state.wrong.push(q);
  for (const [j, btn] of document.querySelectorAll("#quiz-choices .choice").entries()) {
    btn.disabled = true;
    if (j === q.answer) btn.classList.add("correct");
    else if (j === i) btn.classList.add("wrong");
  }
  $("quiz-score").textContent = `점수 ${formatScore(state.score)}`;
  const result = $("feedback-result");
  result.textContent = correct ? "정답!" : (i === -1 ? "시간 초과 · 오답" : "오답");
  result.className = "feedback-result " + (correct ? "is-correct" : "is-wrong");
  $("feedback-explanation").textContent = `정답: ${q.choices[q.answer]} — ${q.explanation}`;
  $("feedback-source").textContent = q.source;
  $("feedback-source").href = q.sourceUrl;
  $("next-button").textContent = state.index === state.questions.length - 1 ? "결과 보기" : "다음";
  $("quiz-feedback").hidden = false;
}

function nextQuestion() {
  if (state.index < state.questions.length - 1) {
    state.index++;
    renderQuestion();
  } else {
    renderResult();
  }
}

function startTimer() {
  stopTimer();
  state.timeLeft = MODES[state.mode].timeLimit;
  updateTimer();
  state.timerId = setInterval(() => {
    state.timeLeft--;
    updateTimer();
    if (state.timeLeft <= 0) onTimeout();
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerId);
  state.timerId = null;
}

function updateTimer() {
  $("timer-text").textContent = `${state.timeLeft}초`;
  $("timer-fill").style.width = `${(state.timeLeft / MODES[state.mode].timeLimit) * 100}%`;
}

function onTimeout() {
  selectAnswer(-1);
}

function renderResult() {
  const mode = MODES[state.mode];
  state.firstScore = state.score;
  $("result-label").textContent = `${state.category} · ${mode.label}`;
  $("result-score").textContent = `${formatScore(state.firstScore)} / ${QUESTIONS_PER_ROUND}`;
  $("result-notice").hidden = mode.ranked;
  showScreen("result");
}

// ===== 시작 =====
function init() {
  const errors = validateQuestions(QUESTIONS);
  for (const e of errors) console.error(`문항 오류 [${e.category}] ${e.id}: ${e.reason}`);
  brokenCategories = new Set(errors.map(e => e.category));
  $("next-button").addEventListener("click", nextQuestion);
  $("again-button").addEventListener("click", () => startGame(state.mode, state.category));
  $("home-button").addEventListener("click", renderStart);
  renderStart();
}

if (typeof document !== "undefined") init();
