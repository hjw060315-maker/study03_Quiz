// ===== 설정 =====

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

// ===== 화면 =====

// ===== 시작 =====
