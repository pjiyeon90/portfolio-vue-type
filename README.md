
![portlogo](https://github.com/user-attachments/assets/52240510-c729-4b1a-82fe-8d69df14c103)



## 📝 프로젝트 : 개인 포트폴리오

본 프로젝트는 프론트엔드 개발자를 꿈꾸는 박지연, 개인의 포트폴리오 웹사이트로, 기술 스택, 작업한 프로젝트, 경력 등을 소개하고 있습니다.
이 웹사이트는 **Vue.js**,**Typescript**를 활용하여 제작되었으며, **Vercel**을 사용하여 배포하였습니다.
디자인은 간결하면서도 동적 사용을 통해 보는 재미를 추구하였고 직관적인 방식으로 사용자의 경험을 중시하며, 반응형 작업을 통해 테블릿, 모바일에서도 최적화되어있어 쉽게 확인할 수 있습니다.

---

- **목적**: 본인 소개 및 개인 역량을 한눈에 볼 수 있는 포트폴리오를 제공하여, 개발자로서의 경력과 역량을 확인할 수 있도록 합니다.
- **특징**: 깔끔하고 직관적인 UI를 제공하여 작업한 프로젝트를 한눈에 볼 수 있도록 제공하며 스킬과 기술 스택을 명확히 입력하였습니다.

---
<br>

## :zap: 프로젝트 배포 링크
https://portfolio-peach-eight-19.vercel.app/ 

<br />

## 🗓 프로젝트 일정
2024.11.4(월) ~ 2024.11.26(화)

<br/>


## ⚙ 개발 환경

본 프로젝트는 다양한 기술을 활용하여 구현하였습니다.

| 기술                 | 기술명                                               | Badge                                                                                                           |
|:--------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------:|
| **프레임워크**       | Vue.js                                               | ![Vue.js](https://img.shields.io/badge/Vue.js-42b883?style=flat-square&logo=vue.js&logoColor=white)             |
| **데이터베이스**     | Google Firebase                                      | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)       |
| **배포**             | Vercel                                               | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white)             |
| **버전 관리**        | GitHub                                               | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)             |
| **스타일링**         | SASS                                                 | ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white)                   |
| **슬라이더**         | Swiper                                               | ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white)             |
| **정적 타입 검사**   | Typescript                                           | ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white) |


<br />

## :wrench: 주요 기능 및 특징

### 1) **흐르는 텍스트 애니메이션**
- **설명**: 흐르는 텍스트를 사용하여 나를 표현하는 단어, 사용할 수 있는 환경들로 나열하였습니다.
- **기능**: flow-txt와 flow-txt-reverse 애니메이션을 사용하여 텍스트가 일정 속도로 화면을 가로지르는 효과를 구현하였습니다.

### 2) **프로젝트 상세 보기 팝업**
- **설명**: 프로젝트를 선택시 팝업이 열리며 세부 내용을 확인할 수 있습니다.
- **기능**: 각 프로젝트는 제목, 기술 스택, 배포 링크, GitHub 링크 등을 포함하며, 프로젝트 상세 정보를 제공하는 팝업이 열리도록 구현하였습니다.

### 3) **프로젝트를 "album"과 "swiper" 2가지 모드로 볼 수 있는 기능**
- **설명**: 사용자의 프로젝트를 여러 방식(슬라이드, 앨범 형태)으로 보여주는 기능입니다.
- **기능**: 리스트 아이템을 컴포넌트화 하여 하나는 스와이퍼 형식으로 볼 수 있으며 하나는 앨범 형식으로 볼 수 있도록 구현하였습니다.

### 4) **아코디언 형식으로 펼쳐지는 섹션 기능**
- **설명**: 경력 부분 섹션을 아코디언으로 만들어 클릭시 활성화되어 세부 내용을 볼 수 있도록 하였습니다.
- **기술 사용**: *isOpen** 메서드와 **onClick** 메서드를 사용하여 클릭한 항목의 열림/닫힘 상태를 토글하며, **activeIndex**를 통해 현재 열려 있는 항목을 관리하도록 구현하였습니다.

### 5) **마우스를 이용해 이모티콘을 튕기게하는 효과**
- **설명**: 다양한 캐릭터를 화면에 랜덤하게 배치하고 두개의 중심점에 끌어당기는 중력 효과를 적용하는 방식으로 마우스 움직임에 따라 캐릭터들이 튕기는 효과가 있습니다.
- **기술 사용**: **Mateer.js** 엔진을 사용해 물리적으로 시뮬레이션을 설정하고 캐릭터 배열에 저장되어있는 캐릭터들은 canvas에 렌더링하고 **getRandomPosition** 함수를 사용하여 랜덤하게 배치합니다. **MouseConstraint**를 이용해 투이기는 효과를 구현합니다.

### 6) **반응형 디자인**
- **설명**: 다양한 화면 크기에서 최적화된 디자인을 제공합니다.
- **기술 사용**: **Media Queries**를 사용하여 화면 크기에 따라 레이아웃을 변경하는 방식으로 반응형 디자인을 구현하였습니다.

<br />

---

<br />
