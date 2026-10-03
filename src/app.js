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
  // 알지오3D 조작 순서 그림(알지오3D 실제 화면 캡처, 2026-10-03)
  _guideImages = (window.ASSET_IMG = {
    guide1: `__ASSET:guide-1-viewcube.webp__`,
    guide2: `__ASSET:guide-2-polygon.webp__`,
    guide3: `__ASSET:guide-3-rotate.webp__`,
    guide4: `__ASSET:guide-4-axis.webp__`,
    guide5: `__ASSET:guide-5-click.webp__`,
    guide6: `__ASSET:guide-5-done.webp__`,
    qrFolder: `__ASSET:qr-submit-folder.svg__`,
    qrFiles: `__ASSET:qr-files-by-google.svg__`,
  }),
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
          `위 물건 말고 우리 주변에서 볼 수 있는 물건 중에 한 직선을 축으로 돌려서 만든 것처럼 보이는 물건과 그렇게 생각한 이유를 적으시오.`,
          `물건의 이름과 이유를 함께 적고, 친구와 이야기해 보세요.`,
        ),
      ],
      inquiry: `평면도형을 한 직선을 축으로 회전시키면 어떤 입체도형이 만들어지며, 그 입체도형의 단면에는 어떤 성질이 나타날까?`,
    },
    {
      id: 2,
      stage: 1,
      page: 2,
      title: `오늘의 탐구 목표`,
      original: `학습 목표를 알아보시오.`,
      lead: `알지오매스의 회전 도구로 평면도형을 회전시켜 입체도형을 만들고, 회전축과 단면의 성질을 탐구·일반화하며, 나만의 입체도형을 설계·표현할 수 있다.`,
      auto: !0,
      checks: [{ id: `q2-check`, label: `오늘의 학습 목표를 읽고 확인했어요.` }],
    },
    {
      id: 3,
      stage: 1,
      page: 2,
      title: `회전 도구와 만나기`,
      original: `알지오3D에서 xy평면에 그려진 평면도형을 회전하기 도구로 회전시켜 보시오.`,
      lead: `도구 영역에서 「알지오3D」를 열어 회전 도구를 찾아보세요. 큰 화면이 필요하면 새 창으로 열 수 있어요.`,
      figure: `tool`,
      alt: `알지오3D 좌표 평면과 회전 도구 메뉴를 보여 주는 원고 화면`,
      toolAction: !0,
      checks: [{ id: `q3-check`, label: `평면도형을 회전시켜 입체도형을 만들어 보았어요.` }],
    },
    {
      id: 4,
      stage: 1,
      page: 2,
      title: `만들고 싶은 모양 그리기`,
      original: `한 직선을 축으로 하여 평면도형을 1회전 시킬 때 생기는 입체도형 중에서 오늘 만들어 보고 싶은 것을 그리시오.`,
      drawing: `q4-drawing`,
      drawingLabel: `만들고 싶은 입체도형 스케치`,
      fields: [r(`q4-plan`, `그림 설명 · 글로 대신 표현해도 좋아요`, `어떤 모양을 만들고 싶은가요?`)],
      either: !0,
    },
    {
      id: 5,
      stage: 2,
      page: 3,
      title: `평면도형을 360° 돌리면?`,
      original: `다음 평면도형을 회전축을 중심으로 360° 회전시키면 어떤 입체도형이 되는지 관찰하시오.`,
      lead: `알지오3D에서 직사각형·직각삼각형·반원 예시를 바꾸며 회전하기 도구로 직접 관찰하세요.`,
      figure: `profiles`,
      alt: `직사각형, 직각삼각형, 반원과 각각의 회전축`,
      fields: [
        r(`q5-1`, `(1) 직사각형을 한 변을 축으로 회전하면?`),
        r(`q5-2`, `(2) 직각삼각형을 한 변을 축으로 회전하면?`),
        r(`q5-3`, `(3) 반원을 지름을 축으로 회전하면?`),
        r(`q5-4`, `(4) 각 입체도형을 회전축에 수직인 평면으로 자른 단면은?`),
        r(`q5-5`, `(5) 각 입체도형을 회전축을 포함하는 평면으로 자른 단면은?`),
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
      original: `실생활 속 입체도형(종이컵)을 보고, 그것을 만드는 평면도형을 추측하여 y축을 회전축으로 삼아 알지오3D의 xy평면(제1사분면과 제4사분면)에 다각형 도구로 그리시오.`,
      figure: `cup`,
      alt: `원고에 제시된 위쪽이 넓고 아래쪽이 좁은 종이컵`,
      drawing: `q7-drawing`,
      drawingLabel: `컵을 만드는 평면도형 추측`,
      grid: !0,
      fields: [
        r(`q7-plan`, `내가 그린 평면도형 설명`, `어떤 모양을 그렸는지, 그 도형이 y축과 어떻게 놓여 있는지 설명해 보세요.`),
      ],
      checks: [{ id: `q7-check`, label: `알지오3D의 xy평면에 컵을 만드는 평면도형을 그렸어요.` }],
      note: `실험실의 「사다리꼴」은 컵의 바깥 윤곽을 비교하기 위한 속이 찬 모형입니다. 실제 종이컵의 두께와 빈 공간도 생각해 보세요.`,
    },
    {
      id: 8,
      stage: 2,
      page: 5,
      title: `회전시켜 비교하기`,
      original: `추측한 평면도형을 y축으로 회전시켜 주어진 입체도형과 비교하시오.`,
      fields: [
        r(
          `q8-1`,
          `(1) 추측한 평면도형을 회전시킨 결과가 주어진 입체도형(종이컵)과 같은지 확인하고, 다르면 어디를 고쳐야 할지 말하시오.`,
        ),
        r(`q8-2`, `(2) 회전축을 포함하는 평면으로 자른 단면과 회전시킨 평면도형은 어떤 관계가 있는지 설명하시오.`),
        r(
          `q8-3`,
          `(3) 회전축을 포함하는 평면으로 자른 단면을 회전축으로 나누면, 그 한쪽은 어떤 도형인가요? 이 사실을 이용하여 처음 추측한 평면도형을 더 정확히 그리는 방법을 설명하시오.`,
          `예: 컵을 회전축을 포함하는 평면으로 자른 단면을 먼저 그려 보고, …`,
        ),
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
      original: `회전체의 단면에 대한 규칙을 일반화하시오. (회전축에 수직인 평면으로 자르면 단면은 항상 무엇인지, 그 원의 크기는 무엇으로 정해지는지)`,
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
    top: `https://www.algeomath.kr/algeo/algeomath/poly/make`,
    blank: `https://www.algeomath.kr/algeo/algeomath/poly/make`,
    // 알지오3D 도구 앱 본체(노란 머리줄 없음). 앱이 자료를 직접 실어 줄 때 쓴다.
    poly: `https://www.algeomath.kr/algeo/tools/poly/index.html`,
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
      desc: `회전하기 도구로 평면도형을 돌려 입체도형을 만들어 보고, 만들고 싶은 모양을 그려 봅니다.`,
      stage: 1,
      name: `회전 도구로 입체도형 맛보기`,
      color: `#0D996E`,
      question: `우리 주변의 매끈한 물건들은 어떻게 만들어진 것일까?`,
    },
    {
      id: `R`,
      desc: `직사각형·직각삼각형·반원을 돌려 만든 입체도형과 그 단면을 관찰하고, 문장이 맞는지 확인합니다.`,
      stage: 2,
      name: `평면도형을 회전시켜 관찰하기`,
      color: `#1073C6`,
      question: `평면도형을 회전축을 중심으로 돌리면 어떤 입체도형이 만들어질까?`,
    },
    {
      id: `I`,
      desc: `종이컵을 만드는 평면도형을 추측하고, 회전시켜 비교하며 단면과의 관계를 찾습니다.`,
      stage: 2,
      name: `실생활 입체도형으로 평면도형 추측하기`,
      color: `#E5910A`,
      question: `주어진 입체도형을 만든 평면도형은 그 단면과 어떤 관계가 있을까?`,
    },
    {
      id: `D`,
      desc: `회전체·회전축·모선·밑면·단면을 이용하여 지금까지의 활동을 정리합니다.`,
      stage: 2,
      name: `회전체 개념 정리하기`,
      color: `#774DC1`,
      question: `회전체의 구성 요소와 단면의 성질을 어떻게 설명할 수 있을까?`,
    },
    {
      id: `G`,
      desc: `회전축에 수직인 평면으로 자른 단면의 규칙을 일반화합니다.`,
      stage: 2,
      name: `단면의 성질 일반화하기`,
      color: `#308F32`,
      question: `회전체의 단면에서 관찰한 규칙을 어떻게 일반화할 수 있을까?`,
    },
    {
      id: `E`,
      desc: `나만의 회전체를 설계하고 알지오3D와 그림판3D로 만들어 꾸밉니다.`,
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
      text: `평면도형을 한 직선을 축으로 회전시키면 어떤 입체도형이 만들어지며, 그 입체도형의 단면에는 어떤 성질이 나타날까?`,
    },
    { id: `bridge`, type: `toc`, title: `오늘의 탐구 흐름` },
    ...u(`B`),
    { id: `goal`, type: `goal`, chapter: `B`, q: 2, checks: !0, title: `오늘의 학습 목표를 알아보세요.` },
    {
      id: `tool-intro`,
      type: `activity`,
      chapter: `B`,
      q: 3,
      tools: [`top`],
      space: `B`,
      layout: `side`,
      guide: `full`,
      checks: !0,
      complete: 3,
      title: `xy평면에 그려진 평면도형을 회전하기 도구로 회전시켜 보세요.`,
    },
    {
      id: `first-sketch`,
      type: `drawing`,
      chapter: `B`,
      q: 4,
      fields: [`q4-plan`],
      complete: 4,
      title: `한 직선을 축으로 하여 평면도형을 1회전 시킬 때 생기는 입체도형을 그려 보세요.`,
      note: `여기에서 그린 입체도형은 마지막 활동(E. 나만의 회전체 만들기)에서 알지오매스로 직접 만들고, 그림판3D로 색칠하여 꾸며 봅니다.`,
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
      guide: `short`,
      title: `직사각형을 한 변을 축으로 360° 회전시켜 보세요.`,
    },
    {
      id: `triangle`,
      type: `activity`,
      chapter: `R`,
      q: 5,
      tools: [`cone`],
      space: `R`,
      fields: [`q5-2`],
      guide: `short`,
      title: `직각삼각형을 한 변을 축으로 360° 회전시켜 보세요.`,
      tip: `직각을 이루는 한 변이 y축 위에 놓여 있어요. 회전하기 도구에서 초록색 축(y축)을 고르고 삼각형을 누르세요.`,
    },
    {
      id: `semicircle`,
      type: `activity`,
      chapter: `R`,
      q: 5,
      tools: [`sphere`],
      space: `R`,
      fields: [`q5-3`],
      guide: `short`,
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
      sectionCta: `horizontal`,
      title: `각 입체도형을 회전축에 수직인 평면으로 자른 단면을 관찰하세요.`,
      tip: `① 알지오3D에서 입체도형을 만든 뒤, 오른쪽 위의 ‘한 방향에서 보기’(또는 보기 큐브)에서 ‘앞쪽’이나 ‘뒤쪽’을 골라 회전축(y축) 방향으로 바라보세요. 보이는 모양이 회전축에 수직인 평면으로 자른 단면의 모양이에요. ② ‘단면 관찰’ 버튼을 누르면 자르는 높이를 바꾸며 단면의 모양과 크기를 비교할 수 있어요.`,
      viewHint: `회전축에 수직인 평면으로 자른 단면은 ‘한 방향에서 보기’를 ‘앞쪽’ 또는 ‘뒤쪽’으로 하여 관찰해요. (회전축인 y축 방향으로 바라보게 돼요.)`,
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
      sectionCta: `vertical`,
      title: `회전축을 포함하는 평면으로 자른 단면을 관찰하세요.`,
      tip: `① 알지오3D에서 입체도형을 만든 뒤, 오른쪽 위의 ‘한 방향에서 보기’(또는 보기 큐브)에서 ‘위쪽’이나 ‘아래쪽’을 골라 회전축에 수직인 방향에서 바라보세요. 보이는 윤곽이 회전축을 포함하는 평면으로 자른 단면의 모양이에요. ② ‘단면 관찰’ 버튼으로 단면을 직접 확인할 수 있어요.`,
      viewHint: `회전축을 포함하는 평면으로 자른 단면은 ‘한 방향에서 보기’를 ‘위쪽’ 또는 ‘아래쪽’으로 하여 관찰해요. (회전축에 수직인 방향에서 바라보게 돼요.)`,
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
      feedback: !0,
      hollowDemo: t === 3,
      viewHint: t === 3 ? `회전축에 수직인 평면으로 자른 단면은 ‘한 방향에서 보기’를 ‘앞쪽’ 또는 ‘뒤쪽’으로 하여 관찰해요. (회전축인 y축 방향으로 바라보게 돼요.)` : t === 4 ? `회전축을 포함하는 평면으로 자른 단면은 ‘한 방향에서 보기’를 ‘위쪽’ 또는 ‘아래쪽’으로 하여 관찰해요. (회전축에 수직인 방향에서 바라보게 돼요.)` : void 0,
      title: `관찰로 문장 확인하기 · ${t + 1} / 5`,
      tip: `회전축의 선택, 자르는 위치, 속이 빈 물체인지에 따라 조건이 더 필요한지도 살펴보세요.`,
    })),
    ...u(`I`),
    {
      id: `cup-sketch`,
      type: `activity`,
      chapter: `I`,
      q: 7,
      // 24~26쪽은 같은 알지오3D 작업 공간(I)을 쓴다: 여기서 그린 도형을 25쪽에서 그대로 회전시킨다.
      tools: [`blank`],
      space: `I`,
      layout: `side`,
      initView: 2,
      fields: [`q7-plan`],
      checks: !0,
      complete: 7,
      title: `컵을 만드는 평면도형을 추측하여 알지오3D의 제1사분면과 제4사분면에 그리세요.`,
      hint: `보는 시점이 ‘위쪽’으로 맞춰져 있어 xy평면이 보여요. 왼쪽 빨간 십자 아이콘 → ‘다각형’을 고르고 꼭짓점을 차례로 찍은 뒤, 처음 점을 다시 누르면 평면도형이 완성돼요. 그린 도형은 다음 화면에서 그대로 회전시켜 봅니다.`,
      figure: `cup`,
    },
    {
      id: `cup-compare`,
      type: `activity`,
      chapter: `I`,
      q: 8,
      tools: [`blank`],
      space: `I`,
      fields: [`q8-1`],
      hint: `24쪽에서 그린 평면도형이 그대로 있어요. 빨간 십자 → ‘회전하기’ → ‘초록색 축(y축) 기준으로 회전’ → 그린 도형을 누르세요.`,
      title: `추측한 평면도형을 y축으로 회전시켜 컵과 비교하세요.`,
      figure: `cup`,
    },
    {
      id: `cup-section`,
      type: `activity`,
      chapter: `I`,
      q: 8,
      tools: [`blank`],
      space: `I`,
      fields: [`q8-2`],
      title: `회전축을 포함하는 단면과 처음 평면도형을 비교하세요.`,
      tip: `앞 화면에서 만든 입체도형을 ‘한 방향에서 보기’(또는 보기 큐브)의 ‘위쪽’이나 ‘아래쪽’에서 바라보세요. 보이는 윤곽이 회전축을 포함하는 평면으로 자른 단면의 모양이에요. 이 단면을 회전축(y축)으로 나눈 한쪽과 처음 그린 평면도형을 비교해 보세요.`,
      viewHint: `회전축을 포함하는 평면으로 자른 단면은 ‘한 방향에서 보기’를 ‘위쪽’ 또는 ‘아래쪽’으로 하여 관찰해요. (회전축에 수직인 방향에서 바라보게 돼요.)`,
    },
    {
      id: `cup-refine`,
      type: `writing`,
      chapter: `I`,
      q: 8,
      fields: [`q8-3`],
      complete: 8,
      title: `단면을 이용하여 처음의 평면도형을 더 정확히 추측해 보세요.`,
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
      define: `지금까지 만든 입체도형처럼, 평면도형을 한 직선을 축으로 하여 한 바퀴 돌릴 때 생기는 입체도형을 회전체라고 해요. 이때 축으로 삼은 직선을 회전축이라고 해요.`,
      frame: `(평면도형)을 (그 도형의 한 변 또는 한 직선)을 회전축으로 하여 한 바퀴 돌리면 (입체도형)인 회전체가 된다. 이때 옆면을 만드는 선분을 (   )이라 하고, 위아래의 평평한 면을 (   )이라 한다. 회전체를 회전축에 수직인 평면으로 자른 단면은 (   )이고, 회전축을 포함하는 평면으로 자른 단면은 (   )이다.`,
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
      note: `회전축에 수직인 평면으로 자른 단면의 모양은 무엇인지, 그 크기는 무엇으로 정해지는지 조건과 함께 설명해 보세요.`,
      hints: [
        `원기둥·원뿔·구를 회전축에 수직인 평면으로 잘랐을 때 단면은 각각 어떤 모양이었나요? 공통점은 무엇인가요?`,
        `그 단면의 중심은 어디에 있나요? 단면의 반지름은 회전축에서 어디까지의 거리인가요? (자르는 높이에 따라 크기가 어떻게 달라졌는지 떠올려 보세요.)`,
        `컵이나 두루마리 휴지처럼 속이 빈 회전체를 회전축에 수직인 평면으로 자르면 단면은 어떻게 달라지나요? 규칙이 성립하는 조건까지 함께 써 보세요.`,
      ],
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
      layout: `strip`,
      guide: `short`,
      recall: 4,
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
      layout: `strip`,
      title: `STL 파일을 불러와 색칠하고 장식하세요.`,
      tip: `① ‘크게보기’를 누른 뒤 그림판3D 시작 화면 가운데의 ‘파일 가져오기’ 버튼으로 앞에서 내보낸 STL 파일을 불러오세요. (작게 보기에서는 시작 화면을 아래로 내려야 이 버튼이 보여요.) ② 색 채우기·색 바꾸기·스티커로 꾸미세요. ③ 다 꾸몄으면 내 스마트폰에 맞게 저장하세요. 아이폰·아이패드는 ‘저장 → USDZ’, 안드로이드는 ‘저장 → GLB’예요. 다음 화면에서 이 파일을 선생님 OneDrive 폴더에 제출하고, 그다음 화면에서 스마트폰 AR로 봐요.`,
    },
    {
      id: `my-explanation`,
      type: `writing`,
      chapter: `E`,
      q: 11,
      fields: [`q11-description`],
      glbSubmit: !0,
      complete: 11,
      title: `내가 만든 회전체는 어떻게 만들어졌나요?`,
    },
    {
      id: `my-ar`,
      type: `ar`,
      chapter: `E`,
      title: `내가 만든 회전체를 스마트폰 증강현실(AR)로 보세요.`,
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
      ![`rectangle`, `triangle`, `semicircle`, `trapezoid`, `hollow`].includes(n.shape) ||
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
function S(e, { strokes: t = [], grid: n = !1, label: r, onChange: i, onMessage: a, locked: lk = !1 }) {
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
        c.moveTo(15, 170),
        c.lineTo(585, 170),
        c.stroke(),
        (c.fillStyle = `#55766a`),
        (c.font = `14px sans-serif`),
        c.fillText(`y`, 308, 19),
        c.fillText(`x`, 580, 161),
        c.fillText(`O`, 283, 187),
        (c.fillStyle = `#a9bdb4`),
        (c.font = `13px sans-serif`),
        c.fillText(`제1사분면`, 500, 40),
        c.fillText(`제4사분면`, 500, 318));
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
    ((o.querySelector(`.undo`).disabled = lk || !d.length), (o.querySelector(`.clear`).disabled = lk || !d.length));
  }
  lk && o.classList.add(`locked`);
  function p(e) {
    let t = s.getBoundingClientRect();
    return [
      Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)),
      Math.max(0, Math.min(1, (e.clientY - t.top) / t.height)),
    ];
  }
  (s.addEventListener(`pointerdown`, (e) => {
    if (e.button === 0) {
      if (lk) {
        a(`완료한 활동이에요. 고치려면 먼저 ‘완료 취소’를 누르세요.`);
        return;
      }
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
var C = {
  rectangle: `직사각형`,
  triangle: `직각삼각형`,
  semicircle: `반원`,
  trapezoid: `사다리꼴`,
  hollow: `속이 빈 원기둥(두루마리 휴지)`,
};
function w(e, t) {
  return e === `triangle`
    ? (1 - t) / 2
    : e === `semicircle`
      ? Math.sqrt(Math.max(0, 1 - t * t))
      : e === `trapezoid`
        ? 0.66 + 0.17 * (t + 1)
        : 1;
}
// 회전축에서 안쪽 면까지의 거리. 속이 빈 모형만 0보다 크다.
function wi(e) {
  return e === `hollow` ? 0.5 : 0;
}
// 회전시키는 평면도형의 윤곽(회전축과 이루는 각 0)
function profile(e) {
  let t = [],
    n = wi(e);
  for (let r = 0; r <= 28; r++) {
    let i = -1 + (r * 2) / 28;
    t.push([w(e, i), i]);
  }
  for (let r = 28; r >= 0; r--) t.push([n, -1 + (r * 2) / 28]);
  return t;
}
function ee(e, t, n) {
  let r = { ...t },
    i = 0,
    a = 0,
    o = !1,
    s = null;
  e.innerHTML = `<div class="lab-top"><label>회전할 평면도형<select id="shape-select"><option value="rectangle">직사각형</option><option value="triangle">직각삼각형</option><option value="semicircle">반원</option><option value="trapezoid">사다리꼴</option><option value="hollow">속이 빈 원기둥(두루마리 휴지)</option></select></label><button class="quiet" id="reset-view">시점 초기화</button></div><div class="model-wrap"><canvas id="solid-canvas" width="760" height="560" role="img" aria-label="회전체와 회전축을 보여 주는 3차원 모형"></canvas><span class="model-hint">드래그하여 시점 바꾸기</span></div><div class="lab-controls"><div class="angle-label"><label for="angle-range">회전각</label><output id="angle-output"></output><button type="button" class="play-btn" id="play-rotation">▶ 회전 보기</button></div><input id="angle-range" type="range" min="0" max="360" step="1" aria-label="회전각"><div class="cut-header"><label for="cut-select">단면 관찰</label><select id="cut-select"><option value="none">자르지 않기</option><option value="horizontal">회전축에 수직으로</option><option value="vertical">회전축을 포함하여</option></select></div><div id="height-control"><label for="height-range">자르는 높이 <output id="height-output"></output></label><input id="height-range" type="range" min="-0.95" max="0.95" step="0.01" aria-label="자르는 높이"></div><p id="lab-description" class="lab-description"></p></div>`;
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
  // 여러 개의 닫힌 경로를 한 번에 칠한다(evenodd라서 고리 모양의 가운데가 비어 보인다).
  function fp(e, t, n, r = 1) {
    u.beginPath();
    for (let t of e) (t.forEach((e, t) => (t ? u.lineTo(e[0], e[1]) : u.moveTo(e[0], e[1]))), u.closePath());
    ((u.fillStyle = t), u.fill(`evenodd`), n && ((u.strokeStyle = n), (u.lineWidth = r), u.stroke()));
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
      n = Math.max(1, Math.ceil(r.angle / 7)),
      ri = wi(r.shape);
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
        (i(
          [
            [s * Math.cos(l), a, s * Math.sin(l)],
            [s * Math.cos(u), a, s * Math.sin(u)],
            [c * Math.cos(u), o, c * Math.sin(u)],
            [c * Math.cos(l), o, c * Math.sin(l)],
          ],
          `hsla(165, 38%, ${d}%, .92)`,
        ),
          ri > 0 &&
            i(
              [
                [ri * Math.cos(l), a, ri * Math.sin(l)],
                [ri * Math.cos(u), a, ri * Math.sin(u)],
                [ri * Math.cos(u), o, ri * Math.sin(u)],
                [ri * Math.cos(l), o, ri * Math.sin(l)],
              ],
              `hsla(35, 45%, ${d + 22}%, .95)`,
            ));
      }
    }
    for (let t of [-1, 1]) {
      let a = w(r.shape, t);
      if (a < 1e-4) continue;
      if (ri > 0)
        for (let r = 0; r < n; r++) {
          let o = (e * r) / n,
            s = (e * (r + 1)) / n;
          i(
            [
              [a * Math.cos(o), t, a * Math.sin(o)],
              [a * Math.cos(s), t, a * Math.sin(s)],
              [ri * Math.cos(s), t, ri * Math.sin(s)],
              [ri * Math.cos(o), t, ri * Math.sin(o)],
            ],
            t > 0 ? `#87b8a1` : `#245f53`,
          );
        }
      else {
        let o = [[0, t, 0]];
        for (let r = 0; r <= n; r++) {
          let i = (e * r) / n;
          o.push([a * Math.cos(i), t, a * Math.sin(i)]);
        }
        i(o, t > 0 ? `#87b8a1` : `#245f53`);
      }
    }
    if (r.angle < 360)
      for (let t of [0, e]) i(profile(r.shape).map(([e, n]) => [e * Math.cos(t), n, e * Math.sin(t)]), `rgba(234,177,84,.85)`);
    if ((t.sort((e, t) => e.z - t.z).forEach((e) => f(e.p, e.color)), r.cut === `none` && r.angle === 360))
      f(
        profile(r.shape).map(([e, t]) => d([e, t, 0])),
        `rgba(249,188,87,.42)`,
        `#db9b49`,
      );
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
      // 단면을 이루는 닫힌 경로들(3차원 좌표)
      let e = [];
      if (r.cut === `horizontal`) {
        let t = (t) => Array.from({ length: 81 }, (e, n) => [t * Math.cos((n * Math.PI) / 40), r.height, t * Math.sin((n * Math.PI) / 40)]);
        (e.push(t(w(r.shape, r.height))), ri > 0 && e.push(t(ri)));
      } else {
        let t = profile(r.shape);
        ri > 0
          ? e.push(
              t.map(([e, t]) => [e, t, 0]),
              t.map(([e, t]) => [-e, t, 0]),
            )
          : e.push([...t.slice(0, 29).map(([e, t]) => [e, t, 0]), ...t.slice(0, 29).reverse().map(([e, t]) => [-e, t, 0])]);
      }
      (fp(
        e.map((e) => e.map(d)),
        `rgba(252,176,60,.5)`,
        `#dc7429`,
        0.5,
      ),
        (u.fillStyle = `rgba(255,255,255,.94)`),
        u.fillRect(564, 352, 180, 190),
        (u.fillStyle = `#745334`),
        (u.font = `bold 15px sans-serif`),
        u.fillText(`단면을 정면에서`, 584, 379));
      // 단면을 정면에서 본 모양: 수직 단면은 xz평면, 축 포함 단면은 xy평면에 그린다.
      let t = r.cut === `horizontal` ? 63 : 57;
      fp(
        e.map((e) => e.map(([e, n, i]) => (r.cut === `horizontal` ? [654 + e * t, 457 + i * t] : [654 + e * t, 458 - n * t]))),
        `#f3c27f`,
        `#c77635`,
        2,
      );
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
          ? `${C[r.shape]}의 노란 면을 회전시켜 보세요.${r.shape === `trapezoid` ? ` 컵의 바깥 윤곽을 비교하는 속이 찬 모형입니다.` : r.shape === `hollow` ? ` 회전축에서 떨어진 직사각형을 돌린 모형이라 가운데가 비어 있어요.` : ``}`
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
// 도구 선택 목록에 보이는 이름. 알지오3D 예시는 회전시키기 전의 평면도형 이름으로 부른다.
var T = {
  top: `xy평면의 평면도형`,
  cylinder: `직사각형`,
  cone: `직각삼각형`,
  sphere: `반원`,
  blank: `빈 작업 공간`,
  make: `새 도형 만들기`,
  paint: `그림판3D`,
};
// 앱이 직접 실어 주는 알지오3D 자료(tools/presets/*.json을 tools/make-presets.cjs로 변환).
// 모두 같은 도구 구성(deactiveTools)을 쓴다: 다각형·원·회전하기·한 방향에서 보기는 켜고, 입체도형을 바로 만드는 도구는 끈다.
var PRESET = {
  top: `__TEXT:presets/top.algeo3d__`,
  cylinder: `__TEXT:presets/cylinder.algeo3d__`,
  cone: `__TEXT:presets/cone.algeo3d__`,
  sphere: `__TEXT:presets/sphere.algeo3d__`,
  blank: `__TEXT:presets/blank.algeo3d__`,
};
// 알지오3D 도구 앱 postMessage API: {id, type, payload, origin} → {id, result}
function polyCall(f, type, payload) {
  return new Promise((res) => {
    let id = `wb-${Math.random().toString(36).slice(2)}`,
      tm,
      h = (e) => {
        e.source === f.contentWindow && e.data && e.data.id === id && !e.data.type && done(e.data.result);
      },
      done = (v) => {
        (removeEventListener(`message`, h), clearTimeout(tm), res(v));
      };
    ((tm = setTimeout(() => done(void 0), 2500)), addEventListener(`message`, h));
    try {
      f.contentWindow.postMessage({ id, type, payload, origin: location.origin === `null` ? `*` : location.origin }, `*`);
    } catch {
      done(void 0);
    }
  });
}
async function loadPreset(f, key) {
  for (let k = 0; k < 30; k++) {
    if (!f.isConnected) return !1;
    if ((await polyCall(f, `is-loaded`)) === !0 && (await polyCall(f, `set-data`, PRESET[key]))?.success) return !0;
    await new Promise((r) => setTimeout(r, 600));
  }
  return !1;
}
var SECTION_SHAPE = { cylinder: `rectangle`, cone: `triangle`, sphere: `semicircle` };
function te({ getToolState: e, onToolStateChange: t }) {
  let n = (e) => document.querySelector(e),
    r = new Map(),
    i = new Map(),
    st = new Map(),
    o = null,
    s = null,
    cur = null,
    rs = !1;
  function status(e) {
    let t = st.get(cur);
    n(`#frame-status`).textContent =
      t === `loading`
        ? `알지오3D 자료를 불러오는 중…`
        : t === `fail`
          ? `자료를 불러오지 못했어요. ‘처음 상태로’를 누르거나 새 창으로 열어 주세요.`
          : `화면이 비어 보이면 새 창으로 열어 주세요.`;
  }
  async function load(e, k, v) {
    (st.set(e, `loading`), status());
    let t = await loadPreset(r.get(e), k);
    t && v != null && (await polyCall(r.get(e), `camera-view`, v));
    (st.set(e, t ? `ok` : `fail`), status());
  }
  function c(e) {
    if (!o?.tools?.includes(e)) return;
    (i.set(o.id, e), (n(`#model-choice`).value = e));
    let t = `${o.space}:${e}`;
    cur = t;
    for (let [e, n] of r) n.classList.toggle(`parked`, e !== t);
    let p = !!PRESET[e];
    if (
      ((n(`#section-tool`).hidden = !SECTION_SHAPE[e]),
      (n(`#view-top`).hidden = n(`#reset-preset`).hidden = !p),
      (n(`#tool-title`).textContent = e === `paint` ? `그림판3D` : `알지오3D`),
      (n(`#external-link`).href = a[e]),
      !r.has(t))
    ) {
      let i = document.createElement(`iframe`),
        vw = o.initView;
      ((i.title = `${T[e]} · ${e === `paint` ? `색칠·장식` : `알지오3D`}`),
        (i.dataset.model = e),
        (i.dataset.workspace = o.space),
        (i.referrerPolicy = `strict-origin-when-cross-origin`),
        (i.allow = `fullscreen`),
        i.setAttribute(
          `sandbox`,
          `allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox`,
        ),
        r.set(t, i),
        n(`#frame-holder`).append(i),
        p && st.set(t, `loading`),
        // 알지오3D는 처음 실행될 때의 창 너비(750px 이하면 모바일 배치)로 화면 배치를 정한다.
        // 두 번째 창부터는 캐시 덕에 크기가 정해지기 전에 실행되어 모바일 배치가 되므로, 자리를 잡은 뒤 주소를 넣는다.
        setTimeout(() => {
          (p && i.addEventListener(`load`, () => load(t, e, vw), { once: !0 }), (i.src = p ? a.poly : a[e]));
        }, 400));
    }
    // 앱이 실어 주는 자료(B·R·I 단계)는 저장할 필요가 없으므로 도형 저장 안내는 ‘새 도형 만들기’에서만 보인다.
    (r.get(t).classList.remove(`parked`), status(), (n(`#model-help`).hidden = e === `paint` || p));
  }
  function l(e) {
    // 도구 카드와 iframe은 display:none 대신 보이지 않게만 한다(크기가 0이 되면 알지오3D가 다음부터 모바일 배치로 열린다).
    let pc = n(`#tool-card`);
    // 숨길 때는 지금 크기를 그대로 고정해 둔다(크기가 바뀌면 알지오3D 화면이 제대로 다시 그려지지 않는다).
    (!e.tools && !pc.classList.contains(`parked`) && ((pc.style.width = `${pc.offsetWidth}px`), (pc.style.height = `${pc.offsetHeight}px`)),
      e.tools && (pc.style.width = pc.style.height = ``),
      (o = e),
      pc.classList.toggle(`parked`, !e.tools));
    for (let e of r.values()) e.classList.add(`parked`);
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
  async function section(r, a) {
    (document.fullscreenElement && (await document.exitFullscreen()),
      document.body.classList.remove(`tool-expanded`),
      d());
    let c = e();
    (s?.destroy(), (s = ee(n(`#section-host`), { ...c, shape: r, angle: 360, cut: a }, t)), n(`#section-dialog`).showModal());
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
    n(`#view-top`).addEventListener(`click`, () => {
      let e = r.get(cur);
      e && polyCall(e, `camera-view`, 2);
    }),
    n(`#reset-preset`).addEventListener(`click`, (e) => {
      let t = e.currentTarget;
      if (!rs) {
        ((rs = !0),
          (t.textContent = `한 번 더 누르면 처음으로`),
          setTimeout(() => {
            ((rs = !1), (t.textContent = `처음 상태로`));
          }, 3500));
        return;
      }
      ((rs = !1), (t.textContent = `처음 상태로`), load(cur, cur.split(`:`)[1], o.initView));
    }),
    n(`#section-tool`).addEventListener(`click`, () => {
      let t = e();
      section(
        SECTION_SHAPE[i.get(o.id) || o.tools[0]],
        o.sectionCta || (t.cut === `none` ? `horizontal` : t.cut),
      );
    }),
    n(`#section-dialog`).addEventListener(`close`, () => {
      (s?.destroy(), (s = null));
    }),
    { show: l, section: (e, t) => section(e || SECTION_SHAPE[i.get(o.id) || o.tools[0]] || `rectangle`, t) }
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
// ---- 화면별 작성 상태 ----
// 문항 q에 속하면서 학생이 채울 것이 있는 화면들
function qSlides(q) {
  return d.filter((e) => e.q === q && (e.fields || e.checks || e.type === `judgment` || e.type === `drawing`));
}
function slideFilled(e, t = M) {
  let r = i.find((t) => t.id === e.q),
    n = (e) => !!t.answers[e]?.trim();
  return e.type === `judgment`
    ? n(`q6-${e.statement}-judgment`) && n(`q6-${e.statement}-reason`)
    : e.type === `drawing`
      ? !!t.drawings[r.drawing]?.some((e) => e.points.length > 1) || (e.fields || []).some(n)
      : (e.fields || []).every(n) && (!e.checks || (r.checks || []).every((e) => t.checks[e.id]));
}
var pageNo = (e) => d.indexOf(e) + 1,
  // 완료한 활동은 고치지 못하게 잠근다(완료를 취소하면 다시 고칠 수 있다).
  lockedQ = (e) => M.completed.includes(e) && !i[e - 1].auto,
  qOfField = (e) => (e.startsWith(`q6-`) ? 6 : i.find((t) => t.fields?.some((t) => t.id === e))?.id),
  firstEmpty = (e) => qSlides(e).find((e) => !slideFilled(e)) || d.find((t) => t.complete === e);
function unlock(e) {
  ((M.completed = M.completed.filter((t) => t !== e)), B(`${e}번 활동의 완료를 취소했어요. 이제 고칠 수 있어요.`), V(), J());
}
function H() {
  for (let e of i)
    if (e.auto) {
      let t = g(e, M),
        n = M.completed.includes(e.id);
      t && !n ? M.completed.push(e.id) : !t && n && (M.completed = M.completed.filter((t) => t !== e.id));
    }
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
      ((e.textContent = t ? `✓ ${e.dataset.complete}번 활동 완료됨` : `${e.dataset.complete}번 활동 완료`),
        e.setAttribute(`aria-pressed`, String(t)),
        e.nextElementSibling &&
          (e.nextElementSibling.textContent = t
            ? `고치려면 이 버튼을 다시 눌러 완료를 취소하세요.`
            : i[e.dataset.complete - 1].either
              ? `그림 또는 설명을 남긴 뒤 눌러 주세요.`
              : `이 활동의 모든 화면을 채운 뒤 눌러 주세요.`));
    }),
    A(`.q-tracker`).forEach((e) => {
      let t = +e.dataset.q;
      e.querySelectorAll(`[data-page]`).forEach((e) => {
        let t = d[e.dataset.page - 1],
          n = slideFilled(t);
        (e.classList.toggle(`filled`, n), (e.title = `${e.dataset.page}쪽 · ${n ? `작성함` : `아직 비어 있음`}`));
      });
      let n = e.querySelector(`.qt-here`),
        r = z();
      n && (n.textContent = slideFilled(r) ? `이 화면 ✓ 작성함` : `이 화면 ○ 아직 비어 있음`);
      e.classList.toggle(`done`, M.completed.includes(t));
    }));
}
function W(e) {
  let t = L(`div`, `completion`),
    n = L(`button`),
    r = L(`small`);
  return (
    (n.dataset.complete = String(e)),
    n.addEventListener(`click`, () => {
      if (M.completed.includes(e)) return unlock(e);
      if (g(i[e - 1], M)) (M.completed.push(e), B(`${e}번 활동을 완료했어요.`), V(), J());
      else {
        let t = qSlides(e).filter((e) => !slideFilled(e));
        B(
          t.length
            ? `아직 비어 있는 화면이 있어요: ${t.map(pageNo).join(`, `)}쪽. 아래 번호를 눌러 이동하세요.`
            : `이 활동의 작성란과 확인 항목을 모두 채워 주세요.`,
        );
      }
    }),
    t.append(n, r),
    t
  );
}
// 한 활동이 여러 화면에 걸칠 때: 화면 번호 단추(채운 화면은 초록색)와 이 화면의 상태
function tracker(e) {
  let t = qSlides(e.q);
  // 한 화면짜리 활동은 완료 버튼만으로 충분하다
  if (t.length < 2 || i[e.q - 1].auto) return null;
  let n = L(`div`, `q-tracker`),
    r = d.find((t) => t.complete === e.q);
  if (((n.dataset.q = e.q), n.append(L(`b`, ``, `${e.q}번 활동`)), t.length > 1)) {
    let e = L(`span`, `qt-pages`);
    for (let t of qSlides(n.dataset.q * 1)) {
      let n = L(`button`, t === z() ? `current` : ``, String(pageNo(t)));
      ((n.dataset.page = pageNo(t)), n.addEventListener(`click`, () => Y(t.id)), e.append(n));
    }
    n.append(e);
  }
  if ((n.append(L(`span`, `qt-here`)), lockedQ(e.q))) {
    let t = L(`button`, `qt-unlock`, `완료 취소하고 고치기`);
    (t.addEventListener(`click`, () => unlock(e.q)), n.append(L(`span`, `qt-msg`, `✓ 완료한 활동이에요.`), t));
  } else r && r !== e && n.append(L(`span`, `qt-msg`, `완료 버튼은 ${pageNo(r)}쪽에 있어요.`));
  return n;
}
function G(e) {
  let t = i.flatMap((e) => e.fields || []).find((t) => t.id === e),
    n = L(`div`, `answer-field`),
    r = L(`label`, ``, t?.label || `관찰 내용과 이유`),
    a = L(`textarea`),
    o = L(`span`, `counter`),
    s = qOfField(e);
  return (
    (r.htmlFor = e),
    (a.id = e),
    (a.maxLength = 8e3),
    (a.placeholder = t?.placeholder || `어떤 조건에서 무엇을 관찰했나요?`),
    (a.value = M.answers[e] || ``),
    (o.textContent = `${a.value.length} / 8000`),
    s && lockedQ(s) && ((a.readOnly = !0), a.addEventListener(`focus`, () => B(`완료한 활동이에요. 고치려면 ‘완료 취소’를 누르세요.`))),
    a.addEventListener(`input`, () => {
      ((M.answers[e] = a.value), (o.textContent = `${a.value.length} / 8000`), H());
    }),
    n.append(r, a, o),
    n
  );
}
function K(e, t) {
  for (let n of e.checks || []) {
    let a = L(`label`, `check-label`),
      r = L(`input`);
    ((r.type = `checkbox`),
      (r.id = n.id),
      (r.checked = !!M.checks[n.id]),
      (r.disabled = lockedQ(e.id)),
      r.addEventListener(`change`, () => {
        ((M.checks[n.id] = r.checked), H());
      }),
      a.append(r, L(`span`, ``, n.label)),
      t.append(a));
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
// ---- 알지오3D로 회전체 만드는 순서(그림과 함께) ----
var GUIDE = [
  [`guide1`, `오른쪽 위 보기 큐브에서 ‘위쪽’을 눌러 xy평면을 위에서 내려다봐요. (도구 위의 ‘위에서 보기’ 버튼도 같아요.)`],
  [`guide2`, `왼쪽 빨간 십자 아이콘 → ‘다각형’(또는 ‘원’)을 골라 y축에 붙여 평면도형을 그려요. 이미 그려져 있으면 건너뛰어요.`],
  [`guide3`, `같은 메뉴에서 ‘회전하기’를 골라요.`],
  [`guide4`, `‘회전축 선택’ 창에서 ‘초록색 축(y축) 기준으로 회전’을 눌러요.`],
  [`guide5`, `평면도형을 누르면 y축을 중심으로 돌린 입체도형이 만들어져요. 화면을 끌어 여러 방향에서 관찰해요.`],
];
// 앞에서 그린 그림(문항 q의 스케치와 설명)을 대화상자로 다시 보여 준다.
function recallDialog(q) {
  let t = i[q - 1],
    n = d.find((e) => e.q === q),
    r = M.drawings[t.drawing] || [],
    a = (M.answers[t.fields?.[0]?.id] || ``).trim();
  ((k(`#tip-title`).textContent = `${pageNo(n)}쪽에 그린 나의 입체도형`), k(`#tip-content`).replaceChildren());
  if (r.some((e) => e.points.length > 1)) {
    let e = L(`canvas`, `recall-canvas`);
    ((e.width = 600), (e.height = 340), e.setAttribute(`role`, `img`), e.setAttribute(`aria-label`, `${pageNo(n)}쪽에 그린 그림`));
    let t = e.getContext(`2d`);
    ((t.fillStyle = `#fff`), t.fillRect(0, 0, 600, 340));
    for (let e of r)
      e.points.length > 1 &&
        (t.beginPath(),
        (t.strokeStyle = e.color),
        (t.lineWidth = 2.8),
        (t.lineCap = t.lineJoin = `round`),
        e.points.forEach(([e, n], r) => (r ? t.lineTo(e * 600, n * 340) : t.moveTo(e * 600, n * 340))),
        t.stroke());
    k(`#tip-content`).append(e);
  }
  a && k(`#tip-content`).append(L(`p`, `recall-text`, a));
  if (!k(`#tip-content`).children.length) {
    let e = L(`button`, ``, `${pageNo(n)}쪽으로 가서 그리기 →`);
    (e.addEventListener(`click`, () => (k(`#tip-dialog`).close(), Y(n.id))),
      k(`#tip-content`).append(L(`p`, ``, `아직 ${pageNo(n)}쪽에 그린 그림이나 설명이 없어요.`), e));
  } else k(`#tip-content`).append(L(`p`, `recall-hint`, `이 그림을 보면서 어떤 평면도형을 어느 직선을 축으로 회전하면 될지 생각하며 알지오3D로 만들어 보세요.`));
  k(`#tip-dialog`).showModal();
}
function guideDialog(e = 0) {
  ((k(`#tip-title`).textContent = `알지오3D에서 평면도형을 회전시키는 순서`), k(`#tip-content`).replaceChildren());
  let t = L(`ol`, `guide-big`);
  (GUIDE.forEach(([e, n]) => {
    let r = L(`li`),
      i = L(`img`);
    ((i.src = window.ASSET_IMG[e]), (i.alt = n), r.append(L(`p`, ``, n), i), t.append(r));
  }),
    k(`#tip-content`).append(t));
  let n = L(`img`, `guide-done`);
  ((n.src = window.ASSET_IMG.guide6),
    (n.alt = `회전하기로 만든 입체도형`),
    k(`#tip-content`).append(L(`p`, ``, `▼ 이렇게 입체도형이 만들어져요.`), n),
    k(`#tip-dialog`).showModal(),
    e && t.children[e]?.scrollIntoView({ block: `start` }));
}
function guideBox(e, t) {
  if (e === `full`) {
    let e = L(`ol`, `guide-steps`);
    return (
      GUIDE.forEach(([t, n], r) => {
        let i = L(`li`),
          a = L(`button`, `guide-thumb`),
          o = L(`img`);
        ((o.src = window.ASSET_IMG[t]),
          (o.alt = ``),
          a.append(o),
          a.setAttribute(`aria-label`, `${r + 1}단계 그림 크게 보기`),
          a.addEventListener(`click`, () => guideDialog(r)),
          i.append(a, L(`span`, ``, n)),
          e.append(i));
      }),
      e
    );
  }
  let n = L(`div`, `guide-short`),
    r = L(`button`, ``, `그림으로 보기`);
  return (
    r.addEventListener(`click`, () => guideDialog()),
    n.append(L(`span`, ``, `만드는 순서: ① 위쪽 보기 → ② 다각형·원으로 그리기 → ③ 회전하기 → ④ 초록색 축(y축) → ⑤ 평면도형 누르기`), r),
    n
  );
}
// ---- 스스로 점검(규칙 기반 자동 힌트, AI 아님) ----
var FEEDBACK = [
  {
    맞음: [/원기둥/, `이유에 어떤 입체도형(원기둥)이 되었는지와 관찰한 모습을 함께 써 보세요.`],
    "조건이 필요함": `직사각형은 어느 변을 축으로 돌려도 원기둥이 되는지 알지오3D에서 확인해 보세요. 그래도 조건이 필요하다면 그 조건을 이유에 적어 보세요.`,
    다름: `알지오3D에서 직사각형을 한 변을 축으로 360° 돌려 보고, 어떤 입체도형이 되는지 다시 관찰해 보세요.`,
  },
  {
    맞음: `직각삼각형의 빗변을 회전축으로 하면 어떤 입체도형이 될까요? 어느 변을 축으로 하느냐에 따라 결과가 같은지 확인해 보세요.`,
    "조건이 필요함": [/직각|빗변/, `어떤 변을 회전축으로 해야 원뿔이 되는지(예: 직각을 낀 변) 조건을 구체적으로 써 보세요.`],
    다름: `직각을 낀 한 변을 축으로 돌렸을 때와 빗변을 축으로 돌렸을 때를 비교해 보세요. 항상 원뿔이 아닌가요?`,
  },
  {
    맞음: [/구/, `이유에 어떤 입체도형(구)이 되었는지와 관찰한 모습을 함께 써 보세요.`],
    "조건이 필요함": `문장은 ‘지름을 축으로’ 돌리는 경우만 말하고 있어요. 반원을 지름을 축으로 돌렸을 때 항상 같은 입체도형이 되는지 다시 판단해 보세요.`,
    다름: `알지오3D에서 반원을 지름을 축으로 360° 돌려 보고, 어떤 입체도형이 되는지 다시 관찰해 보세요.`,
  },
  {
    맞음: `두루마리 휴지처럼 속이 빈 입체도형을 회전축에 수직인 평면으로 자르면 단면이 어떤 모양일까요? 아래 ‘속이 빈 원기둥 단면 보기’로 확인해 보세요.`,
    "조건이 필요함": [
      /속이\s*빈|비어|빈\s*공간|구멍|고리|도넛|휴지|두\s*원|원\s*안/,
      `어떤 경우에 단면이 원이 아닐 수 있는지(예: 속이 빈 회전체) 조건을 구체적으로 써 보세요.`,
    ],
    다름: `원기둥·원뿔·구를 회전축에 수직인 평면으로 잘랐을 때 단면은 무엇이었나요? 항상 다른지, 어떤 경우에만 다른지 생각해 보세요.`,
  },
  {
    맞음: [/대칭|접|겹/, `회전축을 기준으로 단면을 접으면 어떻게 되는지 이유에 써 보세요.`],
    "조건이 필요함": `‘단면 관찰’에서 여러 모형의 회전축을 포함하는 단면을 보세요. 회전축을 기준으로 접었을 때 겹치지 않는 경우가 있었나요?`,
    다름: `‘단면 관찰’에서 회전축을 포함하는 단면을 보고, 회전축을 기준으로 접으면 겹쳐지는지 확인해 보세요.`,
  },
];
function judgeHints(e) {
  let t = M.answers[`q6-${e}-judgment`] || ``,
    n = (M.answers[`q6-${e}-reason`] || ``).trim(),
    r = FEEDBACK[e][t];
  if (!t) return [`먼저 이 문장이 맞는지 판단을 골라 주세요.`];
  let i = [];
  return (
    typeof r == `string` ? i.push(r) : n && !r[0].test(n) && i.push(r[1]),
    n.length < 15 && i.push(`관찰한 내용을 바탕으로 이유를 조금 더 자세히 써 보세요.`),
    i.length ? i : [`좋아요! 판단과 관찰 근거가 잘 드러나요. 친구의 생각과도 비교해 보세요.`]
  );
}
function generalHints() {
  let e = (M.answers.q10 || ``).trim(),
    t = [];
  return e.length < 15
    ? [`먼저 내가 찾은 규칙을 문장으로 써 보세요. 막히면 위의 힌트를 차례로 열어 보세요.`]
    : (/원/.test(e) || t.push(`회전축에 수직인 평면으로 자른 단면이 어떤 모양인지 써 보세요.`),
      /반지름|거리|떨어/.test(e) || t.push(`단면의 크기(반지름)가 회전축에서 어디까지의 거리로 정해지는지 써 보세요.`),
      /속이|빈|구멍|고리|휴지|컵/.test(e) || t.push(`컵처럼 속이 빈 회전체일 때 단면이 어떻게 달라지는지, 규칙이 성립하는 조건도 써 보세요.`),
      t.length ? t : [`좋아요! 단면의 모양·크기·조건이 모두 드러나요.`]);
}
function conceptHints() {
  let e = M.answers.q9 || ``,
    t = i[8].terms.filter((t) => !e.includes(t));
  return e.trim().length < 15
    ? [`다섯 용어를 사용해 지금까지 한 활동을 정리해 보세요. 막히면 ‘문장 틀 넣기’를 눌러 빈칸을 채워 보세요.`]
    : t.length
      ? [`아직 쓰지 않은 용어가 있어요: ${t.join(`, `)}`]
      : [`좋아요! 다섯 용어를 모두 사용했어요. 각 용어가 무엇을 가리키는지 정확한지 한 번 더 확인해 보세요.`];
}
function selfCheck(e, t) {
  let n = L(`div`, `self-check`),
    r = L(`button`, ``, `💬 스스로 점검하기`),
    a = L(`ul`);
  function o() {
    a.replaceChildren(...e().map((e) => L(`li`, ``, e)));
  }
  return (
    r.addEventListener(`click`, o),
    n.append(r, L(`small`, ``, `미리 정한 규칙으로 주는 힌트예요(AI 아님).`), a),
    t && (n.refresh = o),
    n
  );
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
    locked: lockedQ(e.id),
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
    r = L(`input`),
    lk = lockedQ(11);
  if (
    ((r.type = `file`),
    (r.accept = `image/png,image/jpeg,image/webp`),
    (r.id = `artwork-file`),
    (r.disabled = lk),
    (n.htmlFor = r.id),
    t.append(
      n,
      r,
      L(`p`, ``, `그림판3D에서 ‘저장 → 사진(PNG)’으로 저장한 파일을 첨부하세요. PNG·JPG·WebP, 8MB 이하. 큰 이미지는 줄여 저장합니다.`),
    ),
    M.image)
  ) {
    let e = L(`img`);
    ((e.src = M.image), (e.alt = `내가 만든 회전체 완성 작품`), t.append(e));
    let n = L(`button`, ``, `첨부 이미지 삭제`);
    ((n.disabled = lk),
      n.addEventListener(`click`, () => {
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
// ---- 작품 3D 파일(GLB) 제출: 교사의 OneDrive 폴더(공유 링크)를 새 창으로 연다 ----
var GLB_SUBMIT_URL = `https://icego0265-my.sharepoint.com/:f:/g/personal/j333333_guwol_icems_kr/IgCAsA7TFOuLRZvoN6d1nG3WARgbr5CFjdEcsZ5Fd2RpXVg?e=xWhxB6`;
function glbSubmitBox() {
  let e = L(`div`, `glb-submit`),
    t = L(`a`, `glb-submit-btn`, `📤 3D 파일 제출하기`),
    n = L(`div`);
  ((t.href = GLB_SUBMIT_URL), (t.target = `_blank`), (t.rel = `noopener`));
  return (
    n.append(
      L(`b`, ``, `작품 3D 파일 제출 `),
      L(
        `span`,
        ``,
        `① 그림판3D에서 내 스마트폰에 맞게 저장해요(‘다운로드’ 폴더). 아이폰·아이패드 → ‘저장 → USDZ’, 안드로이드 → ‘저장 → GLB’ ② 파일 이름을 ‘학번+이름’으로 바꿔요(예: 10101홍길동.usdz, 10101홍길동.glb) ③ 오른쪽 버튼으로 열린 OneDrive 폴더에 파일을 끌어다 놓거나 ‘업로드 → 파일’로 올려요. ※ 다른 친구의 파일은 열거나 지우지 않아요.`,
      ),
    ),
    e.append(n, t),
    e
  );
}
// ---- 스마트폰 AR 안내: 제출 폴더를 휴대폰으로 열어 아이폰은 USDZ, 안드로이드는 GLB를 연다 ----
function arGuide() {
  let e = L(`div`, `ar-guide`),
    t = (t, n, r, a) => {
      let i = L(`section`, `ar-col`),
        o = L(`ol`);
      (n.forEach((e) => o.append(L(`li`, ``, e))), i.append(L(`h3`, ``, t), o));
      let s = L(`div`, `ar-qrs`);
      for (let [e, t, n] of r) {
        let r = L(`figure`),
          i = L(`img`);
        ((i.src = e), (i.alt = `${t} QR 코드`), r.append(i, L(`figcaption`, ``, t)), n && r.append(L(`small`, ``, n)), s.append(r));
      }
      return (i.append(s), a && i.append(L(`p`, `ar-note`, a)), i);
    };
  return (
    e.append(
      L(`p`, `ar-lead`, `39쪽에서 OneDrive 폴더에 올린 내 작품 파일(아이폰은 USDZ, 안드로이드는 GLB)을 스마트폰으로 내려받아 열면, 내 책상이나 바닥 위에 회전체를 띄워 볼 수 있어요. 스마트폰 카메라로 ‘OneDrive 제출 폴더’ QR 코드를 찍어 시작하세요.`),
      L(`div`, `ar-cols`),
    ),
    e.lastChild.append(
      t(
        `🍎 아이폰·아이패드`,
        [
          `카메라로 ‘OneDrive 제출 폴더’ QR 코드를 찍어 폴더를 열어요.`,
          `내 파일 ‘학번이름.usdz’(예: 10101홍길동.usdz)를 눌러 다운로드한 뒤, 다운로드한 파일을 눌러 열어요.`,
          `3D 모델이 보이면 위쪽의 ‘AR’을 누르고, 휴대폰을 천천히 움직여 바닥을 비춰요.`,
        ],
        [[window.ASSET_IMG.qrFolder, `OneDrive 제출 폴더`]],
        `USDZ 파일은 아이폰에서 별도 앱 없이 바로 AR로 열려요.`,
      ),
      t(
        `🤖 안드로이드`,
        [
          `‘Files by Google’ 앱이 없으면 먼저 설치해요. (QR 코드 또는 han.gl/구글파일)`,
          `카메라로 ‘OneDrive 제출 폴더’ QR 코드를 찍어 폴더를 열고, 내 파일 ‘학번이름.glb’(예: 10101홍길동.glb)를 다운로드해요.`,
          `‘Files by Google’ 앱 → ‘다운로드’에서 내 .glb 파일을 눌러요. Google 앱으로 3D 모델이 열리면 ‘내 공간에서 보기’(AR)를 눌러요.`,
        ],
        [
          [window.ASSET_IMG.qrFolder, `OneDrive 제출 폴더`],
          [window.ASSET_IMG.qrFiles, `Files by Google 설치`, `han.gl/구글파일`],
        ],
        `다운로드 알림이나 다른 파일 앱에서 .glb를 누르면 Google 앱으로 연결되지 않는 경우가 많아요. 꼭 ‘Files by Google’ 앱에서 여세요.`,
      ),
    ),
    e
  );
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
// 목차의 다리: 누르면 그 단계의 설명만 보여 준다(화면 이동은 다음 버튼·쪽 번호로).
function se(e) {
  let t = L(`div`, `bridge-map`);
  t.innerHTML = `<svg viewBox="0 0 1100 340" preserveAspectRatio="none" aria-hidden="true"><path d="M0 122H1100M0 130H1100" fill="none" stroke="#82b8df" stroke-width="7"/><path d="M0 327Q92 159 183 327M183 327Q275 159 366 327M366 327Q458 159 550 327M550 327Q642 159 733 327M733 327Q825 159 916 327M916 327Q1008 159 1100 327" fill="none" stroke="#c3e0f3" stroke-width="18"/><path d="M183 129V325M366 129V325M550 129V325M733 129V325M916 129V325" stroke="#abd0ea" stroke-width="12"/></svg>`;
  for (let e of l) {
    let n = L(`button`, `bridge-stop`),
      r = d.filter((t) => t.chapter === e.id).map(pageNo);
    (n.style.setProperty(`--chapter`, e.color),
      (n.dataset.chapter = e.id),
      n.append(L(`span`, `init`, e.id), L(`span`, `nm`, e.name), L(`small`, ``, `${e.stage}단계 · 설명 보기`)),
      n.addEventListener(`click`, () => {
        ((k(`#tip-title`).textContent = `${e.id}. ${e.name}`),
          k(`#tip-content`).replaceChildren(
            L(`p`, `stage-desc`, e.desc),
            L(`p`, `stage-question`, `탐구 질문 · ${e.question}`),
            L(`p`, `stage-range`, `${[``, `살펴보기`, `다가가기`, `넘어서기`][e.stage]} 단계 · ${Math.min(...r)}~${Math.max(...r)}쪽`),
          ),
          k(`#tip-dialog`).showModal());
      }),
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
    k(`#slide-stage`).classList.toggle(`tool-slide`, !!t.tools),
    (k(`#book-frame`).hidden = o),
    (k(`#slide-decoration`).hidden = !o),
    k(`#slide-decoration`).replaceChildren(),
    s.replaceChildren(),
    (k(`#sheet-body`).className = t.tools
      ? `with-tool` +
        ((t.layout || (t.checks || (t.tip && !t.fields && t.type !== `judgment`) ? `strip` : ``)) === `strip`
          ? ` tool-strip`
          : !t.fields && !t.statement && t.type !== `judgment` && !t.guide
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
  else if (t.type === `ar`) s.append(arGuide());
  else if (t.type === `finish`) {
    let e = L(`div`, `finish-content`);
    e.append(
      L(`strong`, ``, `${M.completed.length} / 12 활동 완료`),
      L(`p`, ``, `나의 생각과 그림, 작품을 학습 기록 파일로 보관하세요.`),
    );
    let t = i.filter((e) => !M.completed.includes(e.id));
    if (t.length) {
      let n = L(`div`, `finish-todo`);
      n.append(L(`p`, ``, `아직 완료하지 않은 활동`));
      let r = L(`ul`);
      for (let e of t) {
        let t = L(`li`),
          n = qSlides(e.id).filter((e) => !slideFilled(e)),
          i = L(`button`, ``, `${pageNo(firstEmpty(e.id))}쪽으로 →`);
        (i.addEventListener(`click`, () => Y(firstEmpty(e.id).id)),
          t.append(
            L(`b`, ``, `${e.id}. ${e.title}`),
            L(`span`, ``, n.length ? `비어 있는 화면: ${n.map(pageNo).join(`, `)}쪽` : `모두 채웠어요 · 완료 버튼을 눌러 주세요`),
            i,
          ),
          r.append(t));
      }
      (n.append(r), e.append(n));
    }
    let n = L(`button`, `primary`, `학습 기록 저장하기 ↓`);
    n.addEventListener(`click`, Z);
    let r = L(`button`, ``, `목차 보기`);
    (r.addEventListener(`click`, () => Y(`bridge`)), e.append(L(`div`, `finish-actions`)), e.lastChild.append(n, r), s.append(e));
  } else if (t.type === `situation`) {
    let n = L(`div`, `intro-row`),
      i = L(`img`);
    ((i.src = e.objects), (i.alt = r.alt), n.append(L(`p`, `note-box`, r.lead), i), s.append(n, ...t.fields.map(G)));
  } else if (t.type === `goal`)
    (s.append(L(`p`, `goal-copy`, r.lead)), K(r, s), s.append(L(`p`, `goal-hint`, `확인란에 표시하면 자동으로 완료돼요.`)));
  else if (t.type === `drawing`) {
    let e = L(`div`, `drawing-layout`),
      n = L(`div`, `drawing-canvas`),
      i = L(`div`, `drawing-side`);
    (ie(r, n),
      t.figure && q(t.figure, i),
      t.note && i.append(L(`p`, `note-box drawing-note`, t.note)),
      t.fields.forEach((e) => i.append(G(e))),
      e.append(n, i),
      s.append(e));
  } else if (t.type === `judgment`) {
    s.append(L(`p`, `judgment-statement`, r.statements[t.statement]));
    t.viewHint && s.append(L(`p`, `view-hint`, `👁 ${t.viewHint}`));
    let e = L(`select`, `judgment-select`),
      n = `q6-${t.statement}-judgment`,
      a = selfCheck(() => judgeHints(t.statement), !0);
    ((e.id = n), e.setAttribute(`aria-label`, `${t.statement + 1}번 문장에 대한 판단`), (e.disabled = lockedQ(6)));
    for (let t of [``, `맞음`, `조건이 필요함`, `다름`]) {
      let n = L(`option`, ``, t || `판단을 선택하세요`);
      ((n.value = t), e.append(n));
    }
    if (
      ((e.value = M.answers[n] || ``),
      e.addEventListener(`change`, () => {
        ((M.answers[n] = e.value), H(), a.refresh());
      }),
      s.append(e, G(`q6-${t.statement}-reason`)),
      t.hollowDemo)
    ) {
      let e = L(`button`, `section-cta`, `🧻 속이 빈 원기둥 단면 보기`);
      (e.addEventListener(`click`, () => ne.section(`hollow`, `horizontal`)), s.append(e));
    }
    s.append(a);
  } else {
    if ((t.hint && s.append(L(`p`, `view-hint`, `📌 ${t.hint}`)), t.viewHint && s.append(L(`p`, `view-hint`, `👁 ${t.viewHint}`)), t.guide === `full` && s.append(guideBox(`full`)), t.figure && q(t.figure, s), t.define && s.append(L(`p`, `define-box`, t.define)), t.terms)) {
      let e = L(`div`, `terms`);
      (r.terms.forEach((t) => e.append(L(`span`, ``, t))), s.append(e));
    }
    if ((t.note && s.append(L(`p`, `note-box`, t.note)), t.hints)) {
      let e = L(`div`, `hint-steps`);
      (t.hints.forEach((t, n) => {
        let r = L(`details`);
        (r.append(L(`summary`, ``, `힌트 ${n + 1}`), L(`p`, ``, t)), e.append(r));
      }),
        s.append(e));
    }
    if (t.upload) {
      let e = L(`div`, `upload-layout`);
      (t.fields.forEach((t) => e.append(G(t))), ae(e), s.append(e));
    } else for (let e of t.fields || []) s.append(G(e));
    t.glbSubmit && s.append(glbSubmitBox());
    if (t.frame) {
      let e = L(`div`, `frame-box`),
        n = L(`button`, ``, `문장 틀 넣기`);
      ((n.disabled = lockedQ(9)),
        n.addEventListener(`click`, () => {
          let e = k(`#q9`),
            n = e.value.trim();
          ((e.value = n ? `${n}\n${t.frame}` : t.frame), (M.answers.q9 = e.value), H(), J(), B(`문장 틀을 넣었어요. 괄호 안을 채워 보세요.`));
        }),
        e.append(L(`b`, ``, `문장 틀`), L(`p`, ``, t.frame), n),
        s.append(e, selfCheck(conceptHints)));
    }
    if ((t.hints && s.append(selfCheck(generalHints)), t.sectionCta)) {
      let e = L(`button`, `section-cta`, `🔍 단면 관찰 열기`);
      (e.addEventListener(`click`, () => ne.section(void 0, t.sectionCta)), s.append(e));
    }
    if (t.recall) {
      let e = L(`button`, `recall-btn`, `🖍 ${pageNo(d.find((e) => e.q === t.recall))}쪽에 그린 내 그림 보기`);
      (e.addEventListener(`click`, () => recallDialog(t.recall)), s.append(e));
    }
    (t.guide === `short` && s.append(guideBox(`short`)), t.checks && K(r, s));
  }
  t.tip && re(t.tip, s, t.tipFigure);
  let tr = r && !o && tracker(t);
  tr && s.append(tr);
  (t.complete && !r?.auto && s.append(W(t.complete)),
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
