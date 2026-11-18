// d.ts 파일
// 타입스크립트 엔진에게 타입(자료형)을 재지정 등을 알려주시 위해 존재하는 파일

// styled-components 패키지가 이미 갖고 있느 타입을 재지정해서 커스텀하기 위해 생성
// d.ts파일은 프로젝트가 시작할 때 자동으로 로딩하여 구동함

import "styled-components";
// 패키지 전체를 import하지 않으면 패키지 전체가 재지정됨

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            background: string;
            text: string;
            primary: string;        // 주요한. 사이트에 메인 색상
            muted: string;
        };
    }
}