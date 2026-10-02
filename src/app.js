(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var e = {
    pages: [
      `__ASSET:source-page1.webp__`,
      `__ASSET:source-page2.webp__`,
      `__ASSET:source-page3.webp__`,
      `__ASSET:source-page4.webp__`,
      `__ASSET:source-page5.webp__`,
      `__ASSET:source-page6.webp__`,
      `__ASSET:source-page7.webp__`,
    ],
    objects: `__ASSET:fig-objects.webp__`,
    tool: `__ASSET:fig-tool-menu.webp__`,
    profiles: `__ASSET:fig-profiles.webp__`,
    cup: `__ASSET:fig-cup.webp__`,
  },
  t = `m3-1-algeomath-solids`,
  n = `1.0.0`,
  r = (e, t, n = `관찰하거나 생각한 내용을 적어 보세요.`) => ({ id: e, label: t, placeholder: n }),
  i = [
    {
      id: 1,
      stage: 1,
      page: 1,
      title: `우리 주변에서 찾아볼까요?`,
      original: `오늘 해결할 문제를 살펴보시오.`,
      lead: `우리 주변의 도자기·컵·팽이는 어떻게 이런 매끈한 모양으로 만들어졌을까요?`,
      figure: `objects`,
      alt: `원고에 제시된 음료수병, 컵, 원뿔 모양 포장과 도자기`,
      fields: [
        r(
          `q1`,
          `한 직선을 축으로 돌려서 만든 것처럼 보이는 물건과 그렇게 생각한 이유`,
          `물건의 이름과 이유를 함께 적고, 친구와 이야기해 보세요.`,
        ),
      ],
      inquiry: `평면도형을 한 직선을 축으로 회전시키면 어떤 입체도형이 만들어지며, 그 회전체의 단면에는 어떤 성질이 나타날까?`,
    },
    {
      id: 2,
      stage: 1,
      page: 2,
      title: `오늘의 탐구 목표`,
      original: `학습 목표를 알아보시오.`,
      lead: `알지오매스의 회전 도구로 회전체를 만들고, 회전축과 단면의 성질을 탐구·일반화하며, 나만의 회전체를 설계·표현할 수 있다.`,
      checks: [{ id: `q2-check`, label: `오늘의 학습 목표를 읽고 확인했어요.` }],
    },
    {
      id: 3,
      stage: 1,
      page: 2,
      title: `회전 도구와 만나기`,
      original: `알지오3D를 실행하고 회전 도구를 확인하시오.`,
      lead: `도구 영역에서 「알지오3D」를 열어 회전 도구를 찾아보세요. 큰 화면이 필요하면 새 창으로 열 수 있어요.`,
      figure: `tool`,
      alt: `알지오3D 좌표 평면과 회전 도구 메뉴를 보여 주는 원고 화면`,
      toolAction: !0,
      checks: [{ id: `q3-check`, label: `알지오3D를 실행하고 회전 도구를 확인했어요.` }],
    },
    {
      id: 4,
      stage: 1,
      page: 2,
      title: `만들고 싶은 모양 그리기`,
      original: `오늘 수업을 통해 만들어 보고 싶은 회전체를 손으로 그리시오.`,
      drawing: `q4-drawing`,
      drawingLabel: `만들고 싶은 회전체 스케치`,
      fields: [r(`q4-plan`, `그림 설명 · 글로 대신 표현해도 좋아요`, `어떤 모양을 만들고 싶은가요?`)],
      either: !0,
    },
    {
      id: 5,
      stage: 2,
      page: 3,
      title: `평면도형을 360° 돌리면?`,
      original: `다음 평면도형을 회전축을 중심으로 360° 회전시키면 어떤 회전체가 되는지 관찰하시오.`,
      lead: `오른쪽 알지오3D에서 원기둥·원뿔·구 예시를 바꾸며 회전 도구로 직접 관찰하세요.`,
      figure: `profiles`,
      alt: `직사각형, 직각삼각형, 반원과 각각의 회전축`,
      fields: [
        r(`q5-1`, `(1) 직사각형을 한 변을 축으로 회전하면?`),
        r(`q5-2`, `(2) 직각삼각형을 한 변을 축으로 회전하면?`),
        r(`q5-3`, `(3) 반원을 지름을 축으로 회전하면?`),
        r(`q5-4`, `(4) 각 회전체를 회전축에 수직으로 자른 단면은?`),
        r(`q5-5`, `(5) 각 회전체를 회전축을 포함하여 자른 단면은?`),
      ],
      note: `관찰 조건: 직각삼각형은 직각을 이루는 한 변을 회전축으로 삼습니다. 실험실의 단면은 속이 찬 기본 모형의 내부를 지나는 평면으로 자릅니다.`,
    },
    {
      id: 6,
      stage: 2,
      page: 4,
      title: `관찰로 문장 확인하기`,
      original: `아래 문장이 맞는지 관찰로 확인하고, 관찰한 내용을 정리하시오.`,
      statements: [
        `직사각형을 한 변을 축으로 회전하면 원기둥이 된다.`,
        `직각삼각형을 한 변을 축으로 회전하면 원뿔이 된다.`,
        `반원을 지름을 축으로 회전하면 구가 된다.`,
        `회전축에 수직인 단면은 모두 원이다.`,
        `회전축을 포함하는 단면은 회전축을 대칭축으로 하는 선대칭 도형이다.`,
      ],
      note: `문장은 원고 그대로입니다. 회전축의 선택, 자르는 위치, 속이 빈 물체인지에 따라 조건이 더 필요한지도 확인해 보세요.`,
    },
    {
      id: 7,
      stage: 2,
      page: 5,
      title: `컵을 만든 평면도형은?`,
      original: `다양한 실생활 속 회전체를 보고, 그것을 만드는 평면도형을 추측하여 xy-평면에 그리시오.`,
      figure: `cup`,
      alt: `원고에 제시된 위쪽이 넓고 아래쪽이 좁은 종이컵`,
      drawing: `q7-drawing`,
      drawingLabel: `컵을 만드는 평면도형 추측`,
      grid: !0,
      fields: [r(`q7-plan`, `그림 설명 · 글로 대신 표현해도 좋아요`, `y축과 도형의 위치 관계도 설명해 보세요.`)],
      either: !0,
      note: `실험실의 「사다리꼴」은 컵의 바깥 윤곽을 비교하기 위한 속이 찬 모형입니다. 실제 종이컵의 두께와 빈 공간도 생각해 보세요.`,
    },
    {
      id: 8,
      stage: 2,
      page: 5,
      title: `회전시켜 비교하기`,
      original: `추측한 평면도형을 y축으로 회전시켜 주어진 회전체와 비교하시오.`,
      fields: [
        r(
          `q8-1`,
          `(1) 추측한 평면도형을 회전시킨 결과가 주어진 회전체와 같은지 확인하고, 다르면 어디를 고쳐야 할지 말하시오.`,
        ),
        r(`q8-2`, `(2) 회전축을 포함하는 평면으로 자른 단면과 회전시킨 평면도형은 어떤 관계가 있는지 설명하시오.`),
        r(`q8-3`, `(3) 이 관계를 이용하여 처음의 평면도형 추측을 더 정확히 하는 방법을 설명하시오.`),
      ],
      recall: `q7`,
    },
    {
      id: 9,
      stage: 2,
      page: 6,
      title: `내 말로 개념 정리하기`,
      original: `다음 용어를 사용하여 지금까지의 활동을 정리하시오. (회전체, 회전축, 모선, 밑면, 단면)`,
      terms: [`회전체`, `회전축`, `모선`, `밑면`, `단면`],
      fields: [
        r(`q9`, `다섯 용어를 연결하여 설명해 보세요.`, `예를 들어 어떤 모양을 관찰했는지와 함께 정리해 보세요.`),
      ],
    },
    {
      id: 10,
      stage: 2,
      page: 6,
      title: `단면의 규칙 일반화하기`,
      original: `회전체의 단면에 대한 규칙을 일반화하시오. (수직으로 자르면 항상 무엇인지, 그 원의 크기는 무엇으로 정해지는지)`,
      lead: `탐구 질문으로 돌아가서, 여러 모양에서 공통으로 관찰한 규칙을 말해 보세요.`,
      fields: [
        r(
          `q10`,
          `단면의 모양과 크기에 대한 나의 규칙`,
          `어떤 회전체를 어디에서 자르는지, 규칙이 성립하는 조건도 함께 적어 보세요.`,
        ),
      ],
      note: `속이 찬 기본 모형의 내부 단면에서 관찰한 규칙과, 컵처럼 속이 빈 물체의 경우를 구분하여 설명해 보세요.`,
    },
    {
      id: 11,
      stage: 3,
      page: 7,
      title: `나만의 회전체 만들기`,
      original: `나만의 회전체를 설계하고 표현하시오.`,
      lead: `(1) 만들 회전체를 정하고, 어떤 평면도형을 어느 직선을 축으로 회전할지 그리시오.`,
      drawing: `q11-drawing`,
      drawingLabel: `나만의 회전체 설계도`,
      grid: !0,
      fields: [
        r(`q11-plan`, `설계 설명 · 그림 대신 글로 표현할 수 있어요`, `만들 물체, 평면도형, 회전축을 설명해 보세요.`),
        r(`q11-description`, `(3) 내가 만든 회전체는 어떤 평면도형을 어떻게 회전한 것인지 설명하시오.`),
      ],
      checks: [
        {
          id: `q11-check`,
          label: `(2) 알지오3D로 회전체를 만들고 STL로 내보낸 뒤, 그림판3D 웹앱에서 색칠·장식했어요.`,
        },
      ],
      upload: !0,
    },
    {
      id: 12,
      stage: 3,
      page: 7,
      title: `나의 탐구 돌아보기`,
      original: `회전체를 만들고 색칠하면서 공학 도구 활용의 편리함과 유용성에 대한 생각을 적으시오.`,
      fields: [
        r(
          `q12`,
          `공학 도구를 사용하며 느낀 점`,
          `어떤 점이 편리했나요? 새롭게 알게 된 점이나 어려웠던 점도 적어 보세요.`,
        ),
      ],
    },
  ],
  a = {
    make: `https://www.algeomath.kr/algeo/algeomath/poly/make`,
    cylinder: `https://www.algeomath.kr/algeo/algeomath/poly/view?id=c27e9217c05511efa490f220ef6fd4fc`,
    cone: `https://www.algeomath.kr/algeo/algeomath/poly/view?id=c5df22abc05511efa490f220ef6fd4fc`,
    sphere: `https://www.algeomath.kr/algeo/algeomath/poly/view?id=20342fd2c05211efa490f220ef6fd4fc`,
    paint: `https://j333333766-hub.github.io/3d/%EA%B7%B8%EB%A6%BC%ED%8C%903D/`,
  },
  o = i
    .flatMap((e) => e.fields?.map((e) => e.id) || [])
    .concat(...Array.from({ length: 5 }, (e, t) => [`q6-${t}-judgment`, `q6-${t}-reason`])),
  s = i.flatMap((e) => e.checks?.map((e) => e.id) || []),
  c = i.flatMap((e) => (e.drawing ? [e.drawing] : [])),
  l = [
    {
      id: `B`,
      stage: 1,
      name: `회전 도구로 회전체 맛보기`,
      color: `#0D996E`,
      question: `우리 주변의 매끈한 물건들은 어떻게 만들어진 것일까?`,
    },
    {
      id: `R`,
      stage: 2,
      name: `평면도형을 회전시켜 관찰하기`,
      color: `#1073C6`,
      question: `평면도형을 회전축을 중심으로 돌리면 어떤 입체도형이 만들어질까?`,
    },
    {
      id: `I`,
      stage: 2,
      name: `실생활 회전체로 평면도형 추측하기`,
      color: `#E5910A`,
      question: `주어진 회전체를 만든 평면도형은 그 단면과 어떤 관계가 있을까?`,
    },
    {
      id: `D`,
      stage: 2,
      name: `회전체 개념 정리하기`,
      color: `#774DC1`,
      question: `회전체의 구성 요소와 단면의 성질을 어떻게 설명할 수 있을까?`,
    },
    {
      id: `G`,
      stage: 2,
      name: `단면의 성질 일반화하기`,
      color: `#308F32`,
      question: `회전체의 단면에서 관찰한 규칙을 어떻게 일반화할 수 있을까?`,
    },
    {
      id: `E`,
      stage: 3,
      name: `나만의 회전체 만들기`,
      color: `#E56A90`,
      question: `회전체의 성질을 이용하여 나만의 회전체를 설계해 볼까?`,
    },
  ],
  u = (e) => [
    { id: `${e}-cover`, type: `divider`, chapter: e },
    { id: `${e}-inquiry`, type: `inquiry`, chapter: e },
  ],
  d = [
    { id: `cover`, type: `cover`, title: `알지오매스를 활용한 회전체 만들기` },
    {
      id: `situation`,
      type: `situation`,
      chapter: `B`,
      q: 1,
      fields: [`q1`],
      complete: 1,
      title: `우리 주변의 물건을 살펴보세요.`,
    },
    {
      id: `big-question`,
      type: `inquiry`,
      title: `이번 탐구를 이끄는 질문`,
      text: `평면도형을 한 직선을 축으로 회전시키면 어떤 입체도형이 만들어지며, 그 회전체의 단면에는 어떤 성질이 나타날까?`,
    },
    { id: `bridge`, type: `toc`, title: `오늘의 탐구 흐름` },
    ...u(`B`),
    { id: `goal`, type: `goal`, chapter: `B`, q: 2, checks: !0, complete: 2, title: `오늘의 학습 목표를 알아보세요.` },
    {
      id: `tool-intro`,
      type: `activity`,
      chapter: `B`,
      q: 3,
      tools: [`make`],
      space: `B`,
      checks: !0,
      complete: 3,
      title: `알지오3D를 실행하고 회전 도구를 확인하세요.`,
      tipFigure: `tool`,
      tip: `크게보기 → 왼쪽의 빨간 십자 모양 아이콘 → 회전하기(R)를 선택하세요. 아래 원고의 메뉴 그림도 참고할 수 있어요. 평면도형과 회전축을 정한 뒤 회전시키는 과정을 확인합니다.`,
    },
    {
      id: `first-sketch`,
      type: `drawing`,
      chapter: `B`,
      q: 4,
      fields: [`q4-plan`],
      complete: 4,
      title: `오늘 만들어 보고 싶은 회전체를 그려 보세요.`,
    },
    ...u(`R`),
    {
      id: `rectangle`,
      type: `activity`,
      chapter: `R`,
      q: 5,
      tools: [`cylinder`],
      space: `R`,
      fields: [`q5-1`],
      title: `직사각형을 한 변을 축으로 360° 회전시켜 보세요.`,
      tip: `원고의 예시는 회전 전 평면도형입니다. 알지오3D의 회전 도구로 평면도형과 축을 선택해 관찰하세요.`,
    },
    {
      id: `triangle`,
      type: `activity`,
      chapter: `R`,
      q: 5,
      tools: [`cone`],
      space: `R`,
      fields: [`q5-2`],
      title: `직각삼각형을 한 변을 축으로 360° 회전시켜 보세요.`,
      tip: `직각을 이루는 한 변을 회전축으로 삼아 관찰하세요.`,
    },
    {
      id: `semicircle`,
      type: `activity`,
      chapter: `R`,
      q: 5,
      tools: [`sphere`],
      space: `R`,
      fields: [`q5-3`],
      title: `반원을 지름을 축으로 360° 회전시켜 보세요.`,
    },
    {
      id: `horizontal-section`,
      type: `activity`,
      chapter: `R`,
      q: 5,
      tools: [`cylinder`, `cone`, `sphere`],
      space: `R`,
      fields: [`q5-4`],
      title: `각 회전체를 회전축에 수직으로 자른 단면을 관찰하세요.`,
      tip: `자르는 위치를 바꾸며 단면의 모양과 크기를 비교하세요. 속이 찬 기본 모형의 내부를 관찰합니다.`,
    },
    {
      id: `vertical-section`,
      type: `activity`,
      chapter: `R`,
      q: 5,
      tools: [`cylinder`, `cone`, `sphere`],
      space: `R`,
      fields: [`q5-5`],
      complete: 5,
      title: `회전축을 포함하는 평면으로 자른 단면을 관찰하세요.`,
    },
    ...Array.from({ length: 5 }, (e, t) => ({
      id: `verify-${t + 1}`,
      type: `judgment`,
      chapter: `R`,
      q: 6,
      statement: t,
      tools: t < 3 ? [[`cylinder`, `cone`, `sphere`][t]] : [`cylinder`, `cone`, `sphere`],
      space: `R`,
      complete: t === 4 ? 6 : void 0,
      title: `관찰로 문장 확인하기 · ${t + 1} / 5`,
      tip: `회전축의 선택, 자르는 위치, 속이 빈 물체인지에 따라 조건이 더 필요한지도 살펴보세요.`,
    })),
    ...u(`I`),
    {
      id: `cup-sketch`,
      type: `drawing`,
      chapter: `I`,
      q: 7,
      fields: [`q7-plan`],
      complete: 7,
      title: `컵을 만드는 평면도형을 추측하여 xy-평면에 그리세요.`,
      figure: `cup`,
    },
    {
      id: `cup-compare`,
      type: `activity`,
      chapter: `I`,
      q: 8,
      tools: [`make`],
      space: `I`,
      fields: [`q8-1`],
      title: `추측한 평면도형을 y축으로 회전시켜 컵과 비교하세요.`,
      figure: `cup`,
    },
    {
      id: `cup-section`,
      type: `activity`,
      chapter: `I`,
      q: 8,
      tools: [`make`],
      space: `I`,
      fields: [`q8-2`],
      title: `회전축을 포함하는 단면과 처음 평면도형을 비교하세요.`,
    },
    {
      id: `cup-refine`,
      type: `writing`,
      chapter: `I`,
      q: 8,
      fields: [`q8-3`],
      complete: 8,
      title: `처음의 평면도형을 더 정확히 추측하려면 어떻게 해야 할까요?`,
    },
    ...u(`D`),
    {
      id: `concept`,
      type: `writing`,
      chapter: `D`,
      q: 9,
      fields: [`q9`],
      complete: 9,
      title: `다섯 용어를 사용하여 지금까지의 활동을 정리하세요.`,
      terms: !0,
    },
    ...u(`G`),
    {
      id: `generalization`,
      type: `writing`,
      chapter: `G`,
      q: 10,
      fields: [`q10`],
      complete: 10,
      title: `회전체의 단면에 대한 규칙을 일반화하세요.`,
      note: `수직으로 자른 단면의 모양은 무엇인지, 그 크기는 무엇으로 정해지는지 조건과 함께 설명해 보세요.`,
    },
    ...u(`E`),
    {
      id: `my-design`,
      type: `drawing`,
      chapter: `E`,
      q: 11,
      fields: [`q11-plan`],
      title: `어떤 평면도형을 어느 직선을 축으로 회전할지 그려 보세요.`,
    },
    {
      id: `my-model`,
      type: `activity`,
      chapter: `E`,
      q: 11,
      tools: [`make`],
      space: `E`,
      title: `알지오3D로 나만의 회전체를 만들고 STL로 내보내세요.`,
      tip: `계속 편집할 모델은 .algeo3d로 따로 저장하세요. STL은 다음 화면의 그림판3D로 옮겨 색칠·장식할 때 사용합니다.`,
    },
    {
      id: `my-paint`,
      type: `activity`,
      chapter: `E`,
      q: 11,
      tools: [`paint`],
      space: `E`,
      checks: !0,
      title: `STL 파일을 불러와 색칠하고 장식하세요.`,
    },
    {
      id: `my-explanation`,
      type: `writing`,
      chapter: `E`,
      q: 11,
      fields: [`q11-description`],
      upload: !0,
      complete: 11,
      title: `내가 만든 회전체는 어떻게 만들어졌나요?`,
    },
    {
      id: `reflection`,
      type: `writing`,
      chapter: `E`,
      q: 12,
      fields: [`q12`],
      complete: 12,
      title: `공학 도구를 사용하며 느낀 점을 적어 보세요.`,
    },
    { id: `finish`, type: `finish`, title: `나의 탐구 기록을 보관하세요.` },
  ],
  f = d.map((e) => e.id),
  p = (e) => d.find((t) => t.q === e)?.id || `cover`,
  m = `workbook:${t}:v1`;
function h() {
  return {
    schemaVersion: 1,
    lessonId: t,
    contentVersion: n,
    savedAt: null,
    currentQuestion: 1,
    currentSlide: `cover`,
    answers: {},
    checks: {},
    drawings: {},
    image: null,
    completed: [],
    toolState: { shape: `rectangle`, angle: 360, cut: `none`, height: 0, yaw: 0.65, pitch: 0.3 },
  };
}
function g(e, t) {
  let n = (e) => !!t.answers[e]?.trim(),
    r = (e) => t.drawings[e]?.some((e) => e.points.length > 1);
  return e.id === 6
    ? Array.from({ length: 5 }, (e, t) => n(`q6-${t}-judgment`) && n(`q6-${t}-reason`)).every(Boolean)
    : e.id === 11
      ? (r(e.drawing) || n(`q11-plan`)) && n(`q11-description`) && !!t.checks[`q11-check`]
      : e.either
        ? r(e.drawing) || e.fields.some((e) => n(e.id))
        : (e.fields || []).every((e) => n(e.id)) && (e.checks || []).every((e) => t.checks[e.id]);
}
var _ = (e) => e && typeof e == `object` && !Array.isArray(e),
  v = (e, t, n) => typeof e == `number` && Number.isFinite(e) && e >= t && e <= n;
function y(e) {
  if (!_(e) || e.schemaVersion !== 1 || e.lessonId !== `m3-1-algeomath-solids` || e.contentVersion !== `1.0.0`)
    throw Error(`이 활동지의 저장 파일이 아니거나 지원하지 않는 버전입니다.`);
  if (!Number.isInteger(e.currentQuestion) || e.currentQuestion < 1 || e.currentQuestion > 12)
    throw Error(`현재 문항 정보가 올바르지 않습니다.`);
  if (!_(e.answers) || !_(e.checks) || !_(e.drawings) || !Array.isArray(e.completed))
    throw Error(`학습 기록의 형식이 올바르지 않습니다.`);
  let t = h();
  t.currentQuestion = e.currentQuestion;
  for (let [n, r] of Object.entries(e.answers)) {
    if (!o.includes(n) || typeof r != `string` || r.length > 8e3) throw Error(`답변 데이터가 올바르지 않습니다.`);
    if (n.endsWith(`-judgment`) && ![``, `맞음`, `조건이 필요함`, `다름`].includes(r))
      throw Error(`판단 항목이 올바르지 않습니다.`);
    t.answers[n] = r;
  }
  for (let [n, r] of Object.entries(e.checks)) {
    if (!s.includes(n) || typeof r != `boolean`) throw Error(`확인 항목이 올바르지 않습니다.`);
    t.checks[n] = r;
  }
  let n = 0;
  for (let [r, i] of Object.entries(e.drawings)) {
    if (!c.includes(r) || !Array.isArray(i) || i.length > 500) throw Error(`스케치 데이터가 올바르지 않습니다.`);
    t.drawings[r] = i.map((e) => {
      if (
        !_(e) ||
        ![`#176d64`, `#e77738`, `#334155`].includes(e.color) ||
        !Array.isArray(e.points) ||
        e.points.length > 5e3
      )
        throw Error(`스케치 데이터가 올바르지 않습니다.`);
      let t = e.points.map((e) => {
        if (!Array.isArray(e) || e.length !== 2 || !e.every((e) => v(e, 0, 1)))
          throw Error(`스케치 좌표가 올바르지 않습니다.`);
        return [e[0], e[1]];
      });
      if (((n += t.length), n > 6e4)) throw Error(`스케치가 너무 큽니다.`);
      return { color: e.color, points: t };
    });
  }
  if (e.image !== null && e.image !== void 0) {
    if (
      typeof e.image != `string` ||
      e.image.length > 21e5 ||
      !/^data:image\/(png|jpeg|webp);base64,[a-zA-Z0-9+/]+=*$/.test(e.image)
    )
      throw Error(`작품 이미지가 올바르지 않습니다.`);
    t.image = e.image;
  }
  if (e.completed.length > 12 || e.completed.some((e) => !Number.isInteger(e) || e < 1 || e > 12))
    throw Error(`완료 기록이 올바르지 않습니다.`);
  if (((t.completed = [...new Set(e.completed)].filter((e) => g(i[e - 1], t))), e.toolState !== void 0)) {
    let n = e.toolState;
    if (
      !_(n) ||
      ![`rectangle`, `triangle`, `semicircle`, `trapezoid`].includes(n.shape) ||
      ![`none`, `horizontal`, `vertical`].includes(n.cut) ||
      !v(n.angle, 0, 360) ||
      !v(n.height, -0.95, 0.95) ||
      !v(n.yaw, -100, 100) ||
      !v(n.pitch, -0.9, 0.9)
    )
      throw Error(`실험 도구 설정이 올바르지 않습니다.`);
    t.toolState = { shape: n.shape, cut: n.cut, angle: n.angle, height: n.height, yaw: n.yaw, pitch: n.pitch };
  }
  if (e.currentSlide !== void 0) {
    if (!f.includes(e.currentSlide)) throw Error(`페이지 정보가 올바르지 않습니다.`);
    t.currentSlide = e.currentSlide;
  } else
    t.currentSlide =
      Object.keys(t.answers).length || t.completed.length || t.currentQuestion !== 1 ? p(t.currentQuestion) : `cover`;
  return ((t.savedAt = typeof e.savedAt == `string` ? e.savedAt.slice(0, 40) : null), t);
}
function b() {
  try {
    let e = localStorage.getItem(m);
    return e ? { state: y(JSON.parse(e)), restored: !0 } : { state: h() };
  } catch {
    return { state: h(), warning: `이 브라우저의 이전 기록을 읽지 못했어요. 저장 파일이 있다면 불러오세요.` };
  }
}
function x(e) {
  e.savedAt = new Date().toISOString();
  try {
    return (localStorage.setItem(m, JSON.stringify(e)), !0);
  } catch {
    return !1;
  }
}
function S(e, { strokes: t = [], grid: n = !1, label: r, onChange: i, onMessage: a }) {
  let o = document.createElement(`div`);
  ((o.className = `sketch`),
    (o.innerHTML = `<div class="sketch-tools"><span class="sketch-label"></span><div class="pen-colors" role="group" aria-label="펜 색상"><button type="button" data-color="#176d64" class="pen active" aria-label="초록색 펜" aria-pressed="true"></button><button type="button" data-color="#e77738" class="pen" aria-label="주황색 펜" aria-pressed="false"></button><button type="button" data-color="#334155" class="pen" aria-label="검정색 펜" aria-pressed="false"></button></div><button type="button" class="quiet undo">되돌리기</button><button type="button" class="quiet clear">지우기</button></div><canvas width="600" height="340"></canvas><p class="micro">마우스·펜·손가락으로 그리세요. 그리기 어려우면 작성란에 글로 설명할 수 있어요.</p>`),
    (o.querySelector(`.sketch-label`).textContent = r),
    e.append(o));
  let s = o.querySelector(`canvas`),
    c = s.getContext(`2d`);
  (s.setAttribute(`aria-label`, r), s.setAttribute(`role`, `img`));
  let l = null,
    u = `#176d64`,
    d = structuredClone(t);
  function f() {
    if ((c.clearRect(0, 0, 600, 340), (c.fillStyle = `#fff`), c.fillRect(0, 0, 600, 340), n)) {
      ((c.lineWidth = 1), (c.strokeStyle = `#e5eee8`), c.beginPath());
      for (let e = 0; e <= 600; e += 25) (c.moveTo(e, 0), c.lineTo(e, 340));
      for (let e = 20; e <= 340; e += 25) (c.moveTo(0, e), c.lineTo(600, e));
      (c.stroke(),
        (c.strokeStyle = `#829e92`),
        (c.lineWidth = 1.5),
        c.beginPath(),
        c.moveTo(300, 12),
        c.lineTo(300, 330),
        c.moveTo(15, 270),
        c.lineTo(585, 270),
        c.stroke(),
        (c.fillStyle = `#55766a`),
        (c.font = `14px sans-serif`),
        c.fillText(`y`, 308, 19),
        c.fillText(`x`, 580, 261),
        c.fillText(`O`, 283, 287));
    }
    for (let e of d)
      e.points.length &&
        (c.beginPath(),
        (c.strokeStyle = e.color),
        (c.lineWidth = 2.8),
        (c.lineCap = `round`),
        (c.lineJoin = `round`),
        e.points.forEach(([e, t], n) => (n ? c.lineTo(e * 600, t * 340) : c.moveTo(e * 600, t * 340))),
        c.stroke());
    ((o.querySelector(`.undo`).disabled = !d.length), (o.querySelector(`.clear`).disabled = !d.length));
  }
  function p(e) {
    let t = s.getBoundingClientRect();
    return [
      Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)),
      Math.max(0, Math.min(1, (e.clientY - t.top) / t.height)),
    ];
  }
  (s.addEventListener(`pointerdown`, (e) => {
    if (e.button === 0) {
      if (d.length >= 500) {
        a(`스케치가 꽉 찼어요. 일부를 지우거나 글로 설명해 주세요.`);
        return;
      }
      (e.preventDefault(), s.setPointerCapture(e.pointerId), (l = { color: u, points: [p(e)] }), d.push(l), f());
    }
  }),
    s.addEventListener(`pointermove`, (e) => {
      if (!l || (e.preventDefault(), l.points.length >= 5e3)) return;
      let t = p(e),
        n = l.points.at(-1);
      Math.hypot(t[0] - n[0], t[1] - n[1]) > 0.0015 && (l.points.push(t), f());
    }));
  function m() {
    l && (l.points.length < 2 && d.pop(), (l = null), f(), i(structuredClone(d)));
  }
  (s.addEventListener(`pointerup`, m),
    s.addEventListener(`pointercancel`, m),
    s.addEventListener(`lostpointercapture`, m),
    o.querySelectorAll(`[data-color]`).forEach((e) => {
      (e.style.setProperty(`--pen`, e.dataset.color),
        e.addEventListener(`click`, () => {
          ((u = e.dataset.color),
            o.querySelectorAll(`[data-color]`).forEach((t) => {
              (t.classList.toggle(`active`, t === e), t.setAttribute(`aria-pressed`, String(t === e)));
            }));
        }));
    }),
    o.querySelector(`.undo`).addEventListener(`click`, () => {
      (d.pop(), f(), i(structuredClone(d)));
    }));
  let h = !1;
  return (
    o.querySelector(`.clear`).addEventListener(`click`, (e) => {
      if (!h) {
        ((h = !0),
          (e.target.textContent = `전체 지우기 확인`),
          setTimeout(() => {
            ((h = !1), (e.target.textContent = `지우기`));
          }, 3500));
        return;
      }
      ((d = []), (h = !1), (e.target.textContent = `지우기`), f(), i([]));
    }),
    f(),
    () => {}
  );
}
var C = { rectangle: `직사각형`, triangle: `직각삼각형`, semicircle: `반원`, trapezoid: `사다리꼴` };
function w(e, t) {
  return e === `triangle`
    ? (1 - t) / 2
    : e === `semicircle`
      ? Math.sqrt(Math.max(0, 1 - t * t))
      : e === `trapezoid`
        ? 0.66 + 0.17 * (t + 1)
        : 1;
}
function ee(e, t, n) {
  let r = { ...t },
    i = 0,
    a = 0,
    o = !1,
    s = null;
  e.innerHTML = `<div class="lab-top"><label>회전할 평면도형<select id="shape-select"><option value="rectangle">직사각형</option><option value="triangle">직각삼각형</option><option value="semicircle">반원</option><option value="trapezoid">사다리꼴</option></select></label><button class="quiet" id="reset-view">시점 초기화</button></div><div class="model-wrap"><canvas id="solid-canvas" width="760" height="560" role="img" aria-label="회전체와 회전축을 보여 주는 3차원 모형"></canvas><span class="model-hint">드래그하여 시점 바꾸기</span></div><div class="lab-controls"><div class="angle-label"><label for="angle-range">회전각</label><output id="angle-output"></output><button type="button" class="play-btn" id="play-rotation">▶ 회전 보기</button></div><input id="angle-range" type="range" min="0" max="360" step="1" aria-label="회전각"><div class="cut-header"><label for="cut-select">단면 관찰</label><select id="cut-select"><option value="none">자르지 않기</option><option value="horizontal">회전축에 수직으로</option><option value="vertical">회전축을 포함하여</option></select></div><div id="height-control"><label for="height-range">자르는 높이 <output id="height-output"></output></label><input id="height-range" type="range" min="-0.95" max="0.95" step="0.01" aria-label="자르는 높이"></div><p id="lab-description" class="lab-description"></p></div>`;
  let c = (t) => e.querySelector(t),
    l = c(`#solid-canvas`),
    u = l.getContext(`2d`);
  function d([e, t, n]) {
    let i = e * Math.cos(r.yaw) + n * Math.sin(r.yaw),
      a = -e * Math.sin(r.yaw) + n * Math.cos(r.yaw),
      o = t * Math.cos(r.pitch) - a * Math.sin(r.pitch);
    return [380 + i * 170, 280 - o * 170, t * Math.sin(r.pitch) + a * Math.cos(r.pitch)];
  }
  function f(e, t, n) {
    e.length &&
      (u.beginPath(),
      e.forEach((e, t) => (t ? u.lineTo(e[0], e[1]) : u.moveTo(e[0], e[1]))),
      u.closePath(),
      (u.fillStyle = t),
      u.fill(),
      n && ((u.strokeStyle = n), (u.lineWidth = 0.5), u.stroke()));
  }
  function p() {
    (u.clearRect(0, 0, 760, 560),
      (u.fillStyle = `#edf4ef`),
      u.fillRect(0, 0, 760, 560),
      (u.strokeStyle = `#d9e7dd`),
      (u.lineWidth = 1));
    for (let e = -5; e <= 5; e++)
      for (let t of [
        [
          [-2, -1.2, e * 0.4],
          [2, -1.2, e * 0.4],
        ],
        [
          [e * 0.4, -1.2, -2],
          [e * 0.4, -1.2, 2],
        ],
      ]) {
        let e = d(t[0]),
          n = d(t[1]);
        (u.beginPath(), u.moveTo(e[0], e[1]), u.lineTo(n[0], n[1]), u.stroke());
      }
    let e = (r.angle * Math.PI) / 180,
      t = [],
      n = Math.max(1, Math.ceil(r.angle / 7));
    function i(e, n) {
      let r = e.map(d);
      t.push({ p: r, z: r.reduce((e, t) => e + t[2], 0) / r.length, color: n });
    }
    for (let t = 0; t < 28; t++) {
      let a = -1 + (2 * t) / 28,
        o = -1 + (2 * (t + 1)) / 28,
        s = w(r.shape, a),
        c = w(r.shape, o);
      for (let t = 0; t < n; t++) {
        let l = (e * t) / n,
          u = (e * (t + 1)) / n,
          d = Math.round(37 + 15 * Math.cos((l + u) / 2 + r.yaw));
        i(
          [
            [s * Math.cos(l), a, s * Math.sin(l)],
            [s * Math.cos(u), a, s * Math.sin(u)],
            [c * Math.cos(u), o, c * Math.sin(u)],
            [c * Math.cos(l), o, c * Math.sin(l)],
          ],
          `hsla(165, 38%, ${d}%, .92)`,
        );
      }
    }
    for (let t of [-1, 1]) {
      let a = w(r.shape, t);
      if (a < 1e-4) continue;
      let o = [[0, t, 0]];
      for (let r = 0; r <= n; r++) {
        let i = (e * r) / n;
        o.push([a * Math.cos(i), t, a * Math.sin(i)]);
      }
      i(o, t > 0 ? `#87b8a1` : `#245f53`);
    }
    if (r.angle < 360)
      for (let t of [0, e]) {
        let e = [[0, -1, 0]];
        for (let n = 0; n <= 28; n++) {
          let i = -1 + (n * 2) / 28,
            a = w(r.shape, i);
          e.push([a * Math.cos(t), i, a * Math.sin(t)]);
        }
        (e.push([0, 1, 0]), i(e, `rgba(234,177,84,.85)`));
      }
    if ((t.sort((e, t) => e.z - t.z).forEach((e) => f(e.p, e.color)), r.cut === `none` && r.angle === 360)) {
      let e = [[0, -1, 0]];
      for (let t = 0; t <= 28; t++) {
        let n = -1 + (t * 2) / 28;
        e.push([w(r.shape, n), n, 0]);
      }
      (e.push([0, 1, 0]), f(e.map(d), `rgba(249,188,87,.42)`, `#db9b49`));
    }
    let a = d([0, -1.35, 0]),
      o = d([0, 1.45, 0]);
    if (
      ((u.strokeStyle = `#d26937`),
      (u.lineWidth = 2),
      u.setLineDash([6, 5]),
      u.beginPath(),
      u.moveTo(a[0], a[1]),
      u.lineTo(o[0], o[1]),
      u.stroke(),
      u.setLineDash([]),
      (u.fillStyle = `#a55127`),
      (u.font = `bold 15px sans-serif`),
      u.fillText(`회전축`, o[0] + 10, o[1] + 5),
      r.cut !== `none`)
    ) {
      let e = [];
      if (r.cut === `horizontal`)
        for (let t = 0; t <= 80; t++) {
          let n = (t * Math.PI * 2) / 80,
            i = w(r.shape, r.height);
          e.push([i * Math.cos(n), r.height, i * Math.sin(n)]);
        }
      else {
        for (let t = 0; t <= 40; t++) {
          let n = -1 + t / 20;
          e.push([w(r.shape, n), n, 0]);
        }
        for (let t = 40; t >= 0; t--) {
          let n = -1 + t / 20;
          e.push([-w(r.shape, n), n, 0]);
        }
      }
      if (
        (f(e.map(d), `rgba(252,176,60,.5)`, `#dc7429`),
        (u.fillStyle = `rgba(255,255,255,.94)`),
        u.fillRect(564, 352, 180, 190),
        (u.fillStyle = `#745334`),
        (u.font = `bold 15px sans-serif`),
        u.fillText(`단면을 정면에서`, 584, 379),
        u.beginPath(),
        (u.fillStyle = `#f3c27f`),
        (u.strokeStyle = `#c77635`),
        (u.lineWidth = 2),
        r.cut === `horizontal`)
      ) {
        let e = w(r.shape, r.height);
        u.arc(654, 457, e * 63, 0, Math.PI * 2);
      } else
        (e.forEach(([e, t], n) => (n ? u.lineTo(654 + e * 57, 458 - t * 57) : u.moveTo(654 + e * 57, 458 - t * 57))),
          u.closePath());
      (u.fill(), u.stroke());
    }
  }
  function m() {
    ((c(`#shape-select`).value = r.shape),
      (c(`#angle-range`).value = r.angle),
      (c(`#angle-output`).textContent = `${Math.round(r.angle)}°`),
      (c(`#cut-select`).value = r.cut),
      (c(`#height-range`).value = r.height),
      (c(`#height-output`).textContent = r.height.toFixed(2)),
      (c(`#height-control`).hidden = r.cut !== `horizontal`),
      (c(`#lab-description`).textContent =
        r.cut === `none`
          ? `${C[r.shape]}의 노란 면을 회전시켜 보세요.${r.shape === `trapezoid` ? ` 컵의 바깥 윤곽을 비교하는 속이 찬 모형입니다.` : ``}`
          : `완전히 회전한 모형의 단면입니다. 높이는 −1부터 1까지이며, 끝점은 제외합니다.`),
      l.setAttribute(
        `aria-label`,
        `${C[r.shape]}을 ${Math.round(r.angle)}도 회전한 모형. ${r.cut === `none` ? `단면 미표시` : r.cut === `horizontal` ? `회전축에 수직인 단면` : `회전축을 포함하는 단면`} 표시.`,
      ),
      p());
  }
  function h() {
    n({ ...r });
  }
  function g() {
    ((o = !1), cancelAnimationFrame(i), (c(`#play-rotation`).textContent = `▶ 회전 보기`));
  }
  (c(`#shape-select`).addEventListener(`change`, (e) => {
    (g(), (r.shape = e.target.value), m(), h());
  }),
    c(`#angle-range`).addEventListener(`input`, (e) => {
      (g(), (r.angle = +e.target.value), (r.cut = `none`), m(), h());
    }),
    c(`#cut-select`).addEventListener(`change`, (e) => {
      (g(), (r.cut = e.target.value), r.cut !== `none` && (r.angle = 360), m(), h());
    }),
    c(`#height-range`).addEventListener(`input`, (e) => {
      ((r.height = +e.target.value), m(), h());
    }),
    c(`#reset-view`).addEventListener(`click`, () => {
      ((r.yaw = 0.65), (r.pitch = 0.3), m(), h());
    }),
    c(`#play-rotation`).addEventListener(`click`, () => {
      if (o) {
        (g(), h());
        return;
      }
      ((o = !0), (r.angle = 0), (r.cut = `none`), (a = 0), (c(`#play-rotation`).textContent = `Ⅱ 잠시 멈춤`));
      function e(t) {
        (a && (r.angle = Math.min(360, r.angle + (t - a) * 0.11)),
          (a = t),
          m(),
          r.angle < 360 ? (i = requestAnimationFrame(e)) : (g(), h()));
      }
      i = requestAnimationFrame(e);
    }),
    l.addEventListener(`pointerdown`, (e) => {
      e.button === 0 && ((s = { x: e.clientX, y: e.clientY }), l.setPointerCapture(e.pointerId));
    }),
    l.addEventListener(`pointermove`, (e) => {
      s &&
        ((r.yaw = Math.max(-99, Math.min(99, r.yaw + (e.clientX - s.x) * 0.008))),
        (r.pitch = Math.max(-0.9, Math.min(0.9, r.pitch + (e.clientY - s.y) * 0.008))),
        (s = { x: e.clientX, y: e.clientY }),
        p());
    }));
  let _ = () => {
    s && ((s = null), h());
  };
  return (
    l.addEventListener(`pointerup`, _),
    l.addEventListener(`pointercancel`, _),
    m(),
    {
      destroy: () => {
        (g(), h());
      },
      setState: (e) => {
        (g(), (r = { ...e }), m());
      },
    }
  );
}
var T = { make: `새 도형 만들기`, cylinder: `원기둥`, cone: `원뿔`, sphere: `구`, paint: `그림판3D` };
function te({ getToolState: e, onToolStateChange: t }) {
  let n = (e) => document.querySelector(e),
    r = new Map(),
    i = new Map(),
    o = null,
    s = null;
  function c(e) {
    if (!o?.tools?.includes(e)) return;
    (i.set(o.id, e), (n(`#model-choice`).value = e));
    let t = `${o.space}:${e}`;
    for (let [e, n] of r) n.hidden = e !== t;
    if (
      ((n(`#section-tool`).hidden = ![`cylinder`, `cone`, `sphere`].includes(e)),
      (n(`#tool-title`).textContent = e === `paint` ? `그림판3D` : `알지오3D`),
      (n(`#external-link`).href = a[e]),
      !r.has(t))
    ) {
      let i = document.createElement(`iframe`);
      ((i.title = `${T[e]} · ${e === `paint` ? `색칠·장식` : `알지오3D`}`),
        (i.dataset.model = e),
        (i.dataset.workspace = o.space),
        (i.referrerPolicy = `strict-origin-when-cross-origin`),
        (i.allow = `fullscreen`),
        i.setAttribute(
          `sandbox`,
          `allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox`,
        ),
        (i.src = a[e]),
        r.set(t, i),
        n(`#frame-holder`).append(i));
    }
    ((r.get(t).hidden = !1),
      (n(`#frame-status`).textContent = `화면이 비어 보이면 새 창으로 열어 주세요.`),
      (n(`#model-help`).hidden = e === `paint`));
  }
  function l(e) {
    ((o = e), (n(`#tool-card`).hidden = !e.tools));
    for (let e of r.values()) e.hidden = !0;
    if (e.tools) {
      n(`#model-choice`).replaceChildren();
      for (let t of e.tools) {
        let e = document.createElement(`option`);
        ((e.value = t), (e.textContent = T[t]), n(`#model-choice`).append(e));
      }
      ((n(`#model-choice`).hidden = e.tools.length === 1), c(i.get(e.id) || e.tools[0]));
    }
  }
  n(`#model-choice`).addEventListener(`change`, (e) => c(e.target.value));
  function u() {
    return !!document.fullscreenElement || document.body.classList.contains(`tool-expanded`);
  }
  function d() {
    let e = u();
    ((n(`#expand-tool`).textContent = e ? `작게보기` : `크게보기`),
      n(`#expand-tool`).setAttribute(`aria-expanded`, String(e)));
  }
  return (
    n(`#expand-tool`).addEventListener(`click`, async () => {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.body.classList.contains(`tool-expanded`)) document.body.classList.remove(`tool-expanded`);
      else
        try {
          await n(`#tool-card`).requestFullscreen();
        } catch {
          document.body.classList.add(`tool-expanded`);
        }
      d();
    }),
    document.addEventListener(`fullscreenchange`, d),
    document.addEventListener(`keydown`, (e) => {
      e.key === `Escape` &&
        document.body.classList.contains(`tool-expanded`) &&
        (document.body.classList.remove(`tool-expanded`), d(), e.preventDefault());
    }),
    n(`#model-help`).addEventListener(`click`, () => n(`#model-dialog`).showModal()),
    n(`#section-tool`).addEventListener(`click`, async () => {
      (document.fullscreenElement && (await document.exitFullscreen()),
        document.body.classList.remove(`tool-expanded`),
        d());
      let r = { cylinder: `rectangle`, cone: `triangle`, sphere: `semicircle` }[i.get(o.id) || o.tools[0]],
        a = e(),
        c =
          o.id === `vertical-section`
            ? `vertical`
            : o.id === `horizontal-section` || a.cut === `none`
              ? `horizontal`
              : a.cut;
      (s?.destroy(),
        (s = ee(n(`#section-host`), { ...a, shape: r, angle: 360, cut: c }, t)),
        n(`#section-dialog`).showModal());
    }),
    n(`#section-dialog`).addEventListener(`close`, () => {
      (s?.destroy(), (s = null));
    }),
    { show: l }
  );
}
var E = `<div class="reference-art">
  <div class="layer" style="left:118px;top:60px;"><img src="__ASSET:deco-cloud.svg__" width="161" height="61" alt=""></div>
  <div class="layer" style="left:118px;top:395px;"><img src="__ASSET:deco-cloud.svg__" width="161" height="61" alt=""></div>
  <div class="layer" style="left:0;bottom:0;"><img src="__ASSET:deco-ground.png__" width="883" height="75" alt=""></div>
  <div class="layer" style="left:178px;top:73px;"><img src="__ASSET:cover-art.png__" width="524" height="312" alt=""></div>

  <div class="title-copy">
    <p class="line-1"><span class="t-blue">각기둥</span>의 이름과<br>구성요소 탐구</p>
    <span class="lesson">알지오매스 키즈3D 활용</span>
  </div>

  <div class="layer" style="left:40px;top:214px;z-index:3;"><img src="__ASSET:cover-char-left.png__" width="176" height="234" alt=""></div>
  <div class="layer" style="left:606px;top:196px;z-index:3;"><img src="__ASSET:cover-char-right.png__" width="250" height="255" alt=""></div>
</div>`,
  D = `<div class="reference-art">
  <div class="layer" style="left:0;bottom:0;z-index:1;"><img src="__ASSET:deco-ground.png__" width="883" height="75" alt=""></div>
  <div class="layer" style="left:200px;bottom:7px;z-index:2;"><img src="__ASSET:bubble-art.png__" width="480" height="308" alt=""></div>

  <div class="bubble">
    <span class="b-kind">이번 탐구를 이끄는 질문을 살펴봅시다.</span>
    <p class="b-text">각기둥의 이름을 정하는 기준은 무엇일까?</p>
    <p class="b-text">밑면의 모양(변의 수)이 달라지면 각기둥의 면, 모서리, 꼭짓점의 수는 어떻게 변할까?</p>
  </div>
</div>`,
  O = `<div class="reference-art">
  <div class="layer" style="right:88px;top:28px;"><img src="__ASSET:deco-cloud.svg__" width="161" height="61" alt=""></div>
  <div class="layer" style="left:130px;top:398px;"><img src="__ASSET:deco-cloud-small.svg__" width="109" height="41" alt=""></div>

  <div class="cover-plate"></div>
  <div class="cover-board">
    <p class="stage-name"><span class="letter">B.</span> 탐구 상황 제시</p>
  </div>

  <div class="layer" style="left:35px;top:35px;z-index:3;"><img src="__ASSET:divider-char-left.png__" width="160" height="220" alt=""></div>
  <div class="layer" style="right:19px;top:250px;z-index:3;"><img src="__ASSET:divider-char-right.png__" width="182" height="238" alt=""></div>
</div>`,
  k = (e) => document.querySelector(e),
  A = (e) => [...document.querySelectorAll(e)],
  j = b(),
  M = j.state,
  N = 0,
  P = 0,
  F = null,
  I = 1,
  ne = te({
    getToolState: () => M.toolState,
    onToolStateChange: (e) => {
      ((M.toolState = e), H());
    },
  }),
  L = (e, t, n) => {
    let r = document.createElement(e);
    return (t && (r.className = t), n !== void 0 && (r.textContent = n), r);
  },
  R = (e) => l.find((t) => t.id === e.chapter),
  z = () => d.find((e) => e.id === M.currentSlide) || d[0];
function B(e) {
  (clearTimeout(P),
    (k(`#toast`).textContent = e),
    (k(`#toast`).hidden = !1),
    (P = setTimeout(() => (k(`#toast`).hidden = !0), 5500)));
}
function V() {
  clearTimeout(N);
  let e = x(M);
  ((k(`#save-status`).textContent = e ? `● 자동 저장됨` : `자동 저장 불가 · 파일로 저장`),
    k(`#save-status`).classList.toggle(`warning`, !e));
}
function H() {
  ((M.completed = M.completed.filter((e) => g(i[e - 1], M))),
    U(),
    clearTimeout(N),
    (k(`#save-status`).textContent = `입력 중…`),
    (N = setTimeout(V, 250)));
}
function U() {
  ((k(`#learning-progress`).textContent = `활동 완료 ${M.completed.length} / 12`),
    A(`[data-complete]`).forEach((e) => {
      let t = M.completed.includes(+e.dataset.complete);
      ((e.textContent = t ? `✓ 활동 완료됨` : `${e.dataset.complete}번 활동 완료`),
        e.setAttribute(`aria-pressed`, String(t)));
    }));
}
function W(e) {
  let t = L(`div`, `completion`),
    n = L(`button`),
    r = L(
      `small`,
      ``,
      i[e - 1].either ? `그림 또는 설명을 남겨 주세요.` : `이 문항의 작성을 모두 마친 뒤 눌러 주세요.`,
    );
  return (
    (n.dataset.complete = String(e)),
    n.addEventListener(`click`, () => {
      if (M.completed.includes(e)) M.completed = M.completed.filter((t) => t !== e);
      else if (g(i[e - 1], M)) (M.completed.push(e), B(`${e}번 활동을 완료했어요.`));
      else {
        B(`앞선 화면을 포함해 이 문항의 작성란과 확인 항목을 채워 주세요.`);
        return;
      }
      (U(), V());
    }),
    t.append(n, r),
    t
  );
}
function G(e) {
  let t = i.flatMap((e) => e.fields || []).find((t) => t.id === e),
    n = L(`div`, `answer-field`),
    r = L(`label`, ``, t?.label || `관찰 내용과 이유`),
    a = L(`textarea`),
    o = L(`span`, `counter`);
  return (
    (r.htmlFor = e),
    (a.id = e),
    (a.maxLength = 8e3),
    (a.placeholder = t?.placeholder || `어떤 조건에서 무엇을 관찰했나요?`),
    (a.value = M.answers[e] || ``),
    (o.textContent = `${a.value.length} / 8000`),
    a.addEventListener(`input`, () => {
      ((M.answers[e] = a.value), (o.textContent = `${a.value.length} / 8000`), H());
    }),
    n.append(r, a, o),
    n
  );
}
function K(e, t) {
  for (let n of e.checks || []) {
    let e = L(`label`, `check-label`),
      r = L(`input`);
    ((r.type = `checkbox`),
      (r.id = n.id),
      (r.checked = !!M.checks[n.id]),
      r.addEventListener(`change`, () => {
        ((M.checks[n.id] = r.checked), H());
      }),
      e.append(r, L(`span`, ``, n.label)),
      t.append(e));
  }
}
function re(t, n, r) {
  let i = L(`button`, `tip-button`, `💡 TIP!`);
  (i.addEventListener(`click`, () => {
    if (((k(`#tip-title`).textContent = `관찰 도움말`), k(`#tip-content`).replaceChildren(L(`p`, ``, t)), r)) {
      let t = L(`img`);
      ((t.src = e[r]), (t.alt = `원고의 알지오3D 회전 도구 메뉴 예시`), k(`#tip-content`).append(t));
    }
    k(`#tip-dialog`).showModal();
  }),
    n.append(i));
}
function q(t, n) {
  let r = L(`figure`, t === `cup` ? `figure-cup` : `source-figure`),
    i = L(`img`);
  ((i.src = e[t]), (i.alt = t === `cup` ? `원고의 종이컵` : `원고에 제시된 물건`), r.append(i), n.append(r));
}
function ie(e, t) {
  S(t, {
    strokes: M.drawings[e.drawing] || [],
    grid: e.grid,
    label: e.drawingLabel,
    onMessage: B,
    onChange: (t) => {
      if (
        Object.entries(M.drawings)
          .filter(([t]) => t !== e.drawing)
          .reduce((e, [, t]) => e + t.reduce((e, t) => e + t.points.length, 0), 0) +
          t.reduce((e, t) => e + t.points.length, 0) >
        6e4
      ) {
        (B(`그림의 점이 너무 많아요. 일부를 지워 주세요.`), J());
        return;
      }
      ((M.drawings[e.drawing] = t), H());
    },
  });
}
function ae(e) {
  let t = L(`div`, `upload-area`),
    n = L(`label`, ``, `완성 작품 이미지 첨부 (선택)`),
    r = L(`input`);
  if (
    ((r.type = `file`),
    (r.accept = `image/png,image/jpeg,image/webp`),
    (r.id = `artwork-file`),
    (n.htmlFor = r.id),
    t.append(n, r, L(`p`, ``, `PNG·JPG·WebP, 8MB 이하. 큰 이미지는 줄여 저장합니다.`)),
    M.image)
  ) {
    let e = L(`img`);
    ((e.src = M.image), (e.alt = `내가 만든 회전체 완성 작품`), t.append(e));
    let n = L(`button`, ``, `첨부 이미지 삭제`);
    (n.addEventListener(`click`, () => {
      ((M.image = null), H(), J());
    }),
      t.append(n));
  }
  (r.addEventListener(`change`, async () => {
    let e = r.files[0];
    if (e) {
      r.disabled = !0;
      try {
        if (![`image/png`, `image/jpeg`, `image/webp`].includes(e.type) || e.size > 8388608)
          throw Error(`8MB 이하의 PNG·JPG·WebP 파일을 선택하세요.`);
        let t = await createImageBitmap(e),
          n = Math.min(1, 1200 / Math.max(t.width, t.height)),
          r = document.createElement(`canvas`);
        ((r.width = Math.max(1, Math.round(t.width * n))),
          (r.height = Math.max(1, Math.round(t.height * n))),
          r.getContext(`2d`).drawImage(t, 0, 0, r.width, r.height),
          t.close());
        let i = r.toDataURL(`image/webp`, 0.84);
        if (i.length > 21e5) throw Error(`더 작은 이미지를 선택해 주세요.`);
        ((M.image = i), H(), J(), B(`작품 이미지를 첨부했어요.`));
      } catch (e) {
        B(e.message);
      } finally {
        ((r.disabled = !1), (r.value = ``));
      }
    }
  }),
    e.append(t));
}
function oe(e, t) {
  let n = k(`#slide-decoration`);
  if (((n.innerHTML = e.type === `cover` ? E : e.type === `divider` ? O : D), e.type === `cover`)) {
    let e = n.querySelector(`.line-1`);
    (e.replaceChildren(
      document.createTextNode(`알지오매스를 활용한`),
      document.createElement(`br`),
      L(`span`, `t-blue`, `회전체`),
      document.createTextNode(` 만들기`),
    ),
      e.setAttribute(`role`, `heading`),
      e.setAttribute(`aria-level`, `1`),
      (n.querySelector(`.lesson`).textContent = `알지오매스 3D 활용`));
  } else if (e.type === `divider`) {
    let e = n.querySelector(`.stage-name`);
    (e.replaceChildren(L(`span`, `letter`, `${t.id}. `), document.createTextNode(t.name)),
      e.setAttribute(`role`, `heading`),
      e.setAttribute(`aria-level`, `1`));
  } else {
    n.querySelector(`.b-kind`).textContent =
      e.title || [``, `탐구 질문을 살펴보기`, `탐구 질문에 다가가기`, `탐구 질문을 넘어서기`][t.stage];
    let r = n.querySelectorAll(`.b-text`);
    ((r[0].textContent = e.text || t.question),
      r[0].setAttribute(`role`, `heading`),
      r[0].setAttribute(`aria-level`, `1`),
      r.forEach((e, t) => {
        t && e.remove();
      }));
    let i = L(`button`, `inquiry-go`, e.id === `big-question` ? `탐구 흐름 보기 →` : `활동 시작 →`);
    (i.addEventListener(`click`, () => Y(d[d.indexOf(e) + 1].id)), n.querySelector(`.bubble`).append(i));
  }
}
function se(e) {
  let t = L(`div`, `bridge-map`);
  t.innerHTML = `<svg viewBox="0 0 1100 340" preserveAspectRatio="none" aria-hidden="true"><path d="M0 122H1100M0 130H1100" fill="none" stroke="#82b8df" stroke-width="7"/><path d="M0 327Q92 159 183 327M183 327Q275 159 366 327M366 327Q458 159 550 327M550 327Q642 159 733 327M733 327Q825 159 916 327M916 327Q1008 159 1100 327" fill="none" stroke="#c3e0f3" stroke-width="18"/><path d="M183 129V325M366 129V325M550 129V325M733 129V325M916 129V325" stroke="#abd0ea" stroke-width="12"/></svg>`;
  for (let e of l) {
    let n = L(`button`, `bridge-stop`);
    (n.style.setProperty(`--chapter`, e.color),
      (n.dataset.chapter = e.id),
      n.append(L(`span`, `init`, e.id), L(`span`, `nm`, e.name), L(`small`, ``, `${e.stage}단계 · 바로 가기`)),
      n.addEventListener(`click`, () => Y(`${e.id}-cover`)),
      t.append(n));
  }
  e.append(t);
  let n = L(`div`, `toc-phase-row`);
  ([`1 살펴보기`, `2 다가가기`, `3 넘어서기`].forEach((e) => n.append(L(`span`, ``, e))), e.append(n));
}
function J() {
  let t = z(),
    n = R(t),
    r = i.find((e) => e.id === t.q),
    a = d.indexOf(t),
    o = [`cover`, `divider`, `inquiry`].includes(t.type),
    s = k(`#slide-content`);
  if (
    ((k(`#slide-stage`).dataset.slide = t.id),
    k(`#slide-stage`).style.setProperty(`--stage`, n?.color || `#1f89ed`),
    k(`#slide-stage`).classList.toggle(`art-slide`, o),
    (k(`#book-frame`).hidden = o),
    (k(`#slide-decoration`).hidden = !o),
    k(`#slide-decoration`).replaceChildren(),
    s.replaceChildren(),
    (k(`#sheet-body`).className = t.tools
      ? `with-tool` +
        (t.checks || (t.tip && !t.fields && t.type !== `judgment`)
          ? ` tool-strip`
          : !t.fields && !t.statement && t.type !== `judgment`
            ? ` tool-only`
            : ``)
      : ``),
    (k(`#chapter-chip`).textContent = n ? `${n.id}. ${n.name}` : `BRIDGE · 수학 탐구`),
    (k(`#slide-title`).textContent = t.title || n?.name || ``),
    (k(`#slide-original`).textContent = r ? `${r.id}. ${r.original}` : ``),
    (k(`#slide-original`).hidden = !r || t.type === `goal`),
    o)
  )
    oe(t, n);
  else if (t.type === `toc`) se(s);
  else if (t.type === `finish`) {
    let e = L(`div`, `finish-content`);
    e.append(
      L(`strong`, ``, `${M.completed.length} / 12 활동 완료`),
      L(`p`, ``, `나의 생각과 그림, 작품을 학습 기록 파일로 보관하세요.`),
    );
    let t = L(`button`, `primary`, `학습 기록 저장하기 ↓`);
    t.addEventListener(`click`, Z);
    let n = L(`button`, ``, `목차에서 활동 이어가기`);
    (n.addEventListener(`click`, () => Y(`bridge`)), e.append(t, n), s.append(e));
  } else if (t.type === `situation`) {
    let n = L(`div`, `intro-row`),
      i = L(`img`);
    ((i.src = e.objects), (i.alt = r.alt), n.append(L(`p`, `note-box`, r.lead), i), s.append(n, ...t.fields.map(G)));
  } else if (t.type === `goal`) (s.append(L(`p`, `goal-copy`, r.lead)), K(r, s));
  else if (t.type === `drawing`) {
    let e = L(`div`, `drawing-layout`),
      n = L(`div`, `drawing-canvas`),
      i = L(`div`, `drawing-side`);
    (ie(r, n), t.figure && q(t.figure, i), t.fields.forEach((e) => i.append(G(e))), e.append(n, i), s.append(e));
  } else if (t.type === `judgment`) {
    s.append(L(`p`, `judgment-statement`, r.statements[t.statement]));
    let e = L(`select`, `judgment-select`),
      n = `q6-${t.statement}-judgment`;
    ((e.id = n), e.setAttribute(`aria-label`, `${t.statement + 1}번 문장에 대한 판단`));
    for (let t of [``, `맞음`, `조건이 필요함`, `다름`]) {
      let n = L(`option`, ``, t || `판단을 선택하세요`);
      ((n.value = t), e.append(n));
    }
    ((e.value = M.answers[n] || ``),
      e.addEventListener(`change`, () => {
        ((M.answers[n] = e.value), H());
      }),
      s.append(e, G(`q6-${t.statement}-reason`)));
  } else {
    if ((t.figure && q(t.figure, s), t.terms)) {
      let e = L(`div`, `terms`);
      (r.terms.forEach((t) => e.append(L(`span`, ``, t))), s.append(e));
    }
    if ((t.note && s.append(L(`p`, `note-box`, t.note)), t.upload)) {
      let e = L(`div`, `upload-layout`);
      (t.fields.forEach((t) => e.append(G(t))), ae(e), s.append(e));
    } else for (let e of t.fields || []) s.append(G(e));
    t.checks && K(r, s);
  }
  (t.tip && re(t.tip, s, t.tipFigure),
    t.complete && s.append(W(t.complete)),
    ne.show(t),
    (k(`#prev-btn`).disabled = a === 0),
    (k(`#next-btn`).textContent = a === d.length - 1 ? `저장 ↓` : `다음 →`),
    (k(`#page-select`).value = String(a + 1)),
    (k(`#page-progress`).value = a + 1),
    (k(`#nav-stage`).textContent = n ? `${n.id}. ${n.name}` : t.title),
    (k(`#source-btn`).textContent = `원고 ${r?.page || { B: 2, R: 3, I: 5, D: 6, G: 6, E: 7 }[t.chapter] || 1}쪽`),
    A(`[data-phase]`).forEach((e) => {
      n && +e.dataset.phase === n.stage ? e.setAttribute(`aria-current`, `step`) : e.removeAttribute(`aria-current`);
    }),
    U(),
    X());
}
function Y(e, t = !0) {
  if (!d.some((t) => t.id === e)) return;
  M.currentSlide = e;
  let n = z();
  (n.q && (M.currentQuestion = n.q),
    V(),
    history.replaceState(null, ``, `#${d.indexOf(n) + 1}`),
    J(),
    t &&
      (k(`#slide-stage`).focus({ preventScroll: !0 }),
      innerWidth <= 700 && window.scrollTo({ top: 0, behavior: `instant` })));
}
function X() {
  let e = k(`#viewport`).getBoundingClientRect();
  (k(`#slide-stage`).style.setProperty(`--scale`, String(Math.min((e.width - 12) / 1280, (e.height - 12) / 720))),
    k(`#slide-stage`).style.setProperty(`--art-scale`, String(innerWidth <= 700 ? e.width / 881 : 1280 / 881)));
}
function Z() {
  V();
  let e = URL.createObjectURL(new Blob([JSON.stringify(M, null, 2)], { type: `application/json` })),
    t = L(`a`);
  ((t.href = e),
    (t.download = `회전체-학습기록-${new Date().toISOString().replace(/[:.]/g, `-`)}.json`),
    document.body.append(t),
    t.click(),
    t.remove(),
    setTimeout(() => URL.revokeObjectURL(e), 3e4),
    B(`학습 기록 파일을 내려받습니다. 도형은 알지오매스에서 따로 저장하세요.`));
}
(k(`#export-btn`).addEventListener(`click`, Z),
  k(`#backup-current`).addEventListener(`click`, Z),
  k(`#import-btn`).addEventListener(`click`, () => k(`#import-file`).click()),
  k(`#import-file`).addEventListener(`change`, async (e) => {
    let t = e.target.files[0];
    if (((e.target.value = ``), t))
      try {
        if (t.size > 8388608) throw Error(`8MB 이하 파일을 선택하세요.`);
        if (((F = y(JSON.parse(await t.text()))), F.image)) {
          let e = new Image();
          ((e.src = F.image), await e.decode());
        }
        ((k(`#import-summary`).textContent =
          `활동 ${F.completed.length} / 12개 완료 · ${d.findIndex((e) => e.id === F.currentSlide) + 1}번째 화면에서 이어가기`),
          k(`#import-dialog`).showModal());
      } catch (e) {
        ((F = null),
          B(
            `불러오지 못했어요. ${e instanceof SyntaxError ? `올바른 JSON 파일을 선택하세요.` : e.message} 현재 기록은 유지됩니다.`,
          ));
      }
  }),
  k(`#confirm-import`).addEventListener(`click`, () => {
    F &&
      (clearTimeout(N),
      (M = F),
      (F = null),
      k(`#import-dialog`).close(),
      Y(M.currentSlide),
      B(`학습 기록을 불러왔어요.`));
  }),
  k(`#import-dialog`).addEventListener(`close`, () => (F = null)));
function Q() {
  ((k(`#source-image`).src = e.pages[I - 1]),
    (k(`#source-image`).alt = `원본 학생용 활동지 ${I}쪽`),
    (k(`#source-page`).textContent = `${I} / 7`),
    (k(`#source-prev`).disabled = I === 1),
    (k(`#source-next`).disabled = I === 7));
}
(k(`#source-btn`).addEventListener(`click`, () => {
  ((I = i.find((e) => e.id === z().q)?.page || { B: 2, R: 3, I: 5, D: 6, G: 6, E: 7 }[z().chapter] || 1),
    Q(),
    k(`#source-dialog`).showModal());
}),
  k(`#source-prev`).addEventListener(`click`, () => {
    (I--, Q());
  }),
  k(`#source-next`).addEventListener(`click`, () => {
    (I++, Q());
  }),
  k(`#help-btn`).addEventListener(`click`, () => k(`#help-dialog`).showModal()),
  A(`[data-close]`).forEach((e) => e.addEventListener(`click`, () => e.closest(`dialog`).close())),
  k(`#home-btn`).addEventListener(`click`, () => Y(`cover`)),
  k(`#toc-btn`).addEventListener(`click`, () => Y(`bridge`)),
  A(`[data-phase]`).forEach((e) =>
    e.addEventListener(`click`, () => Y({ 1: `B-cover`, 2: `R-cover`, 3: `E-cover` }[e.dataset.phase])),
  ),
  d.forEach((e, t) => {
    let n = L(`option`, ``, String(t + 1));
    ((n.value = String(t + 1)),
      (n.title = e.title || R(e)?.name + ` · ` + (e.type === `divider` ? `단계 안내` : `탐구 질문`)),
      k(`#page-select`).append(n));
  }),
  (k(`#page-total`).textContent = `/ ${d.length}`),
  (k(`#page-progress`).max = d.length),
  k(`#page-select`).addEventListener(`change`, (e) => Y(d[e.target.value - 1].id)),
  k(`#prev-btn`).addEventListener(`click`, () => Y(d[Math.max(0, d.indexOf(z()) - 1)].id)),
  k(`#next-btn`).addEventListener(`click`, () => (d.indexOf(z()) === d.length - 1 ? Z() : Y(d[d.indexOf(z()) + 1].id))),
  document.addEventListener(`keydown`, (e) => {
    e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      document.fullscreenElement ||
      document.body.classList.contains(`tool-expanded`) ||
      k(`dialog[open]`) ||
      e.target.closest(`textarea,input,select,[contenteditable=true]`) ||
      (e.key === `ArrowRight` && d.indexOf(z()) < d.length - 1 && (e.preventDefault(), k(`#next-btn`).click()),
      e.key === `ArrowLeft` && d.indexOf(z()) > 0 && (e.preventDefault(), k(`#prev-btn`).click()));
  }),
  window.addEventListener(`resize`, X),
  document.fonts.ready.then(X),
  window.addEventListener(`hashchange`, () => {
    let e = Number(location.hash.slice(1));
    Number.isInteger(e) && d[e - 1] && Y(d[e - 1].id);
  }),
  document.addEventListener(`visibilitychange`, () => {
    document.visibilityState === `hidden` && V();
  }),
  window.addEventListener(`pagehide`, V),
  (k(`#slide-stage`).tabIndex = -1));
var $ = Number(location.hash.slice(1));
(Number.isInteger($) && d[$ - 1] && (M.currentSlide = d[$ - 1].id),
  J(),
  j.warning ? B(j.warning) : (k(`#save-status`).textContent = j.restored ? `● 이전 기록 복원` : `입력하면 자동 저장`));
