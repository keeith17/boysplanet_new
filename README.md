## 설치 및 실행

```bash
cd boysplanet_new
yarn install
yarn run dev
```

## 프로젝트

올해 초 Mnet에서 방영했던 <Boys Planet> 프로그램의 투표 순위 여론 조사 서비스입니다. 블라인드 투표를 통해 데뷔를 결정하는 오디션 프로그램으로, 투표 순위를 가늠하기 어려웠기 때문에 팬들의 답답함을 해소해 보고자 제작했던 사이트입니다.

## 사용한 skill

FRONT: React.js, typescript, Axios + react-query, emotion(styled-component)  
DEPLOY:Aws

## 구현 기능

-   라이브러리 없이 Modal 기능 구현

    -   가장 상단 화면에 Modal Comonent를 배치한 후 useState를 통해 display 조정

-   투표 기능

    -   백엔드 API와 통신하여 명단 수신
    -   React-query를 통해 데이터 관리 / map과 사용하여 컴포넌트 렌더링
    -   선택 데이터 개수 제한, 선택 제거 시 filter 사용하여 필터링 및 해당 데이터 전송

-   결과 보기 기능
    -   투표 수대로 정렬된 투표 데이터와 명단 데이터를 받아 와 하나의 array로 재배열 후 렌더링
    -   select box의 선택 정보에 따라 보여지는 데이터 바꾸어 렌더링
