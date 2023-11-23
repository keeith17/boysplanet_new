import { css } from "@emotion/react";

export const global = css`
    @font-face {
        font-family: "Noto Sans KR";
        font-weight: normal;
        src: url("./fonts/NotoSansKR-VariableFont_wght.ttf") format("truetype");
    }

    * {
        margin: 0;
        padding: 0;
        vertical-align: middle;
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
    }

    body {
        // font-family: "Noto Sans KR";
        font: normal 14px/1 "Noto Sans KR", "Malgun Gothic", "arial";
        letter-spacing: -0.3px;
        overflow-x: overlay;
        overflow-y: overlay;
        background: #120a30;
        color: #ffffff;
    }

    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        color: #333333;
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 14px;
        font-weight: normal;
    }

    i,
    address,
    em {
        font-style: normal;
    }

    header,
    main,
    footer,
    section,
    nav,
    aside,
    article {
        display: block;
    }

    #root {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    button {
        background: transparent;
        border: 0;
        cursor: pointer;
    }
`;
