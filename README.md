
<img width="100%;" src="http://via.placeholder.com/600x300?text=mockupdesign"/>

<h1 align="middle">두더지</h1>
<p align="middle">두더지는 유저가 매일 이루고 싶은 작은 목표나 다짐을 기록하고 실천하도록 돕는 서비스 입니다.<br/>
이 서비스를 통해 유저들은 거창한 목표를 세우기보다는 오늘 하루 동안 실천할 수 있는 현실적인 다짐을 설정하고,<br/>
이를 지키는 과정을 통해 성취감을 느낄 수 있습니다.<br/>
친구들과 함께 서로의 다짐을 응원하고 동기부여를 받으며<br/>
매일의 다짐을 이뤄나갈 수 있도록 두더지와 함께 실천해봐요! Do Does Did! </p>

<p align="center">
<img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
<img alt="npm-v9.8.1" src="https://img.shields.io/badge/npm-v9.8.1-aa96da" />
<img alt="node-v18.18.0" src="https://img.shields.io/badge/node-v18.18.0-ffc7c7" />
</p>

## 🏃 Developers
<div align="center">
  
|FE | FE |
| :---: | :---: |
|  <img style="width: 200px;" src="https://github.com/user-attachments/assets/26072509-b41d-4e51-9a3e-09884a49cb36" />  | <img style="width: 200px;" src="https://github.com/user-attachments/assets/b2163bdc-9621-4f57-960a-22969586e310" /> |
|소현|찬영|
|   [@5o-hyun](https://github.com/5o-hyun)   |  [@Jeongchanyeong](https://github.com/Jeongchanyeong)     |
|   📂 회원가입, 로그인, 그룹<br/>홈, 마이페이지  |  📂  피드, 통계   |

</div>

## 👨‍💻 Tech Stacks
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,tailwind,nodejs,webpack,vercel,vscode,npm,babel,&perline="/>
  </a>
</p>

## 📱 Service Preview
<img width="100%;" src="http://via.placeholder.com/600x300?text=preview"/>

## 🌲 Git Branch Strategy
**Git Flow 채택** : 협업 중 수정된 코드의 충돌을 방지하기 위함

- main(master) : 제품으로 출시될 수 있는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

## 📜 Git Commit Convention
> **feat: (기능명) -#(이슈번호)**
> 
> 
> ex) feat: 로그인 유효성 검사 -#22
> 

| 제목             | 내용                                                                             |
| -----------      | -------------------------------------------------------------------------------- |
| feat             | 새로운 기능을 추가할경우                                                           |
| fix              | 이슈수정, 버그를 고친 경우                                                         |
| design           | CSS 등 사용자 UI 디자인 변경                                                       |
| !breaking change | 커다란 api 변경의 경우                                                             |
| !hotfix          | 급하게 치명적인 버그를 고쳐야하는경우                                                |
| style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                                |
| refactor         | 프로덕션 코드 리팩토링                                                             |
| comment          | 필요한 주석 추가 및 변경                                                           |
| docs          | 문서를 수정한경우                                                                     |
| test          | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)                                      |
| chore          | 기타작업, 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)      |
| rename          | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                    |
| remove          | 파일을 삭제하는 작업만 수행한 경우                                                   |


## 📁 Directory Structure

```
dodoesdid-client/
  ├─ public/              --> 정적 파일 및 HTML 파일이 저장되는 폴더
  ├─ src/                 --> 앱의 소스코드가 저장되는 폴더
  │   ├─ lib/          --> 우리가 사용하는 라이브러리 폴더
  │   │   ├─ api/      --> API 요청과 관련된 코드를 저장하는 폴더
  │   │   ├─ data/     --> client내에서 사용되는 데이터를 저장하는 폴더
  │   │   ├─ hooks/    --> 사용자 Custom Hook코드를 저장하는 폴더
  │   │   ├─ utils/    --> 유틸리티 함수 등 여러 곳에서 자주 사용될것같은 함수를 저장
  │   ├─ assets/       --> 이미지,CSS,글꼴과 같은 리소스를 저장하는 폴더
  │   │   ├─ images/   
  │   │   ├─ fonts/  
  │   │   └─ css/       
  │   ├─ components/   --> 리액트 컴포넌트가 저장되는 폴더
  │   │   ├─ common/   --> 공통으로 재사용되는 컴포넌트
  │   │   ├─ contents/ --> 페이지별로 하위디렉토리 구성
  │   ├─ containers/ --> 로직이 포함된 컨테이너 컴포넌트를 저장하는 폴더 (페이지별로 하위디렉토리구성)
  │   ├─ pages/      --> 각각의 페이지에 대한 레이아웃이나 특정 페이지 관련 로직을 담당하는 컴포넌트를 저장하는 폴더
  │   ├─ routes/     --> 라우팅 정보를 저장하는 폴더
  │   ├─ types/      --> 자주 사용되는 타입을 담은 폴더
  │   └─ stores/      --> 상태 관리를 위한 관련코드들이 저장되는 폴더
  ├─ .env
  ├─ .gitignore
  ├─ package.json
  └─ README.md
```


## 🎨 Collaboration Tools
![figma](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![postman](https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![swagger](https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black) ![slack](https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![notion](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)

## 💫 License
Copyright © 2024 dodoesdid-project
