# 알지오매스를 활용한 회전체 만들기 · 학생용 웹 활동지

한국과학창의재단 「수학 공학도구 활용 교육자료」 M3-1 차시(중1 회전체)의 학생용 웹 활동지입니다.
`index.html` 한 파일로 실행되며, 알지오매스(알지오3D)와 그림판3D는 인터넷으로 불러옵니다.

- 원본: 셈웨어 제작 v2.2 단일 HTML(2026-09-30)을 `src/`로 풀어 고치고 있습니다.
- 수정 근거: `수업 실연/회전체 만들기_학생용_v2.2_수정의견.hwpx`(교사 수업 검토 의견). 반영 내역은 [CHANGELOG.md](CHANGELOG.md)에 의견 번호별로 적습니다.

## 고치는 방법

```
src/index.html   화면 뼈대
src/app.js       문항·화면 데이터와 동작 (i: 문항 12개, d: 화면 41개, l: BRIDGE 단계)
src/app.css      모양
src/assets/      그림·글꼴 (빌드할 때 index.html 안에 들어감)
src/presets/     앱이 알지오3D에 직접 실어 주는 자료(.algeo3d 문자열)
tools/presets/   위 자료의 원본 JSON — 고친 뒤 `node tools/make-presets.cjs`
```

고친 뒤에는 반드시 빌드합니다.

```
python build.py          # src/ → index.html (한 파일)
```

`index.html`을 크롬·엣지로 바로 열거나, `python -m http.server`로 띄워 확인합니다.

## 알지오3D 연결 방식

- B·R·I 단계 도구는 알지오3D 도구 앱 본체(`/algeo/tools/poly/index.html`)를 띄우고, postMessage API `set-data`로
  `src/presets/*.algeo3d`를 실어 줍니다. 그래서 예시마다 도구 구성(deactiveTools)을 앱에서 통일할 수 있습니다.
  - 켠 도구: 다각형·원·회전하기·한 방향에서 보기(앞·뒤·왼·오른·위·아래)
  - 끈 도구: 쌓기나무·연결큐브·입체도형 바로 만들기(직육면체~정다면체)·정다각형·전개도·접기·겉넓이/부피 측정
  - 원기둥·원뿔·구 예시의 도형은 원래 알지오매스 공유 자료(view?id=…)의 것을 그대로 가져왔습니다.
- E단계 '나만의 회전체'는 저장(.algeo3d)·STL 내보내기가 필요하므로 알지오매스 정식 화면(poly/make)을 씁니다.
- 함정: 알지오3D는 **처음 실행될 때의 창 너비가 750px 이하이면 모바일 배치**로 열립니다. 두 번째 창부터는 캐시 때문에
  크기가 정해지기 전에 실행되므로, iframe을 붙인 뒤 0.4초 뒤에 주소를 넣습니다. 숨길 때도 `display:none` 대신
  보이지 않게만(`.parked`) 합니다.

## 학습 기록

- 브라우저 자동 저장 키와 JSON 형식(`schemaVersion 1`, `contentVersion 1.0.0`)은 v2.2와 같습니다. v2.2에서 저장한 파일을 그대로 불러올 수 있습니다.
