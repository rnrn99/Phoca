# **Phoca ('Pho'to + Vo'ca')**

**📝 나만의 영단어장 서비스**

- 직접 찍은 사진의 사물을 인식하여 영단어로 변환해줍니다.
- 만들어진 단어장의 단어들을 학습할 수 있는 컨텐츠를 제공합니다.

![image](https://user-images.githubusercontent.com/59808674/176880303-1b710483-03c5-4314-b2ee-271d6a02471a.png)    

## 1. 프로젝트 소개

### 💡 기획 의도
- 언어를 배울 때 단어암기만큼 기본적인 요소는 없다.
- 언제 쓰일지도 모르는 초등 필수 영단어 800개를 의무적으로 외운다.
- 남의 정해주는 단어들을 외우다 보면, 지루해지기 마련이다.
- **내가 직접 찍은 사진으로 나만의 단어장을 만든다면?**

### 📍 목적 및 필요성
- 점점 직접 해내고 이뤄내고 싶은 것들이 많아지는 초등학교 학생들을 대상으로 합니다.
- 자기 자신이 배우고 싶은 주변 사물을 직접 찍으며 흥미를 잃지 않고 단어 학습을 할수 있게 돕습니다.

### ✨기대효과
- 단순히 일방적인 학습이 아닌, 사용자가 학습 자료를 직접 만드는 쌍방향 학습
- 흥미를 지속적으로 유지하며 시각적인 매체를 통한 단기 학습 기억 향상

### 🎈 활용방안
- 어린 아이 뿐만 아니라 저시력자들에게도 효과적인 배움을 제공 가능
- 청소년이나 성인들로 대상을 확장하여 문장 단위의 재미있는 영어 학습 서비스로 개발 가능

## 2. 기술 스택 및 기술 문서

### 📚 기술 스택
| 📕 Front-end | 📘 Back-end | 📗 AI |
| :---: | :---: | :---: |
|Next.js<br />Typescript<br />React Query<br />Zustand<br />Styletron<br />|Nest.js<br />Typescript<br />TypeORM<br />PostgreSQL<br />AWS S3<br />GCP<br />Docker<br />|Python<br />Jupyter<br />TensorFlow<br />yolo<br />Flask<br />|

### 🗃 시스템 아키텍처
![image](https://user-images.githubusercontent.com/59808674/176872369-f3cee8a6-fa93-4064-a4aa-b838eccd7b4c.png)  

### 🛠 ER-Diagram
![image](https://user-images.githubusercontent.com/59808674/176872435-04b84c54-7552-4814-9825-e51f71d738c7.png)  

### 📃 API 명세서
- [Swagger API 레퍼런스](https://app.swaggerhub.com/apis/PHOCAHELP/phoca-api-docs/1.0)

### 🖼 와이어프레임
- [Figma](https://www.figma.com/file/L48aThyqqlQRMsaaUQqMXa/DEVMON)

## 3. 기능

### 💬 프로젝트 전체 기능 정리

<details>
<summary>프로젝트 전체 기능 정리</summary>
<div markdown="1">

#### [ 메인 페이지 ] : `FE 이창민`
- 각 페이지로 이동하는 버튼
- 단어장 보러가기 / 단어 퀴즈 보러가기 버튼 클릭 시 로그인 요청 모달 띄움  
  (제한 : 로그인 안 했을 때)


#### [ 학습 가이드 페이지 ] : `FE 이창민`
- 각 기능 소개  
  (단어장 만들기, 단어장 보러가기, 그림퀴즈 하러가기, 단어퀴즈 하러가기)


#### [ 단어장 만들기 ] :`FE 백지유`, `BE 김신웅`, `AI 김은혜`
- `/word/upload` 페이지
   - 이미지 파일 첨부/드랍 가능
   - 단어를 인식할 사진을 넣으면 넣은 사진을 보여줌
   - 사진을 첨부해 사진 보내기 버튼 클릭 시 결과화면인 `/word/result`로 이동
   - 인식할 수 없는 사진일 경우 '등록할 수 없는 이미지입니다.' 라는 에러 메세지를 유저에게 보여줌  
     (이후 새로고침으로 다시 사진을 등록할 수 있게 함)
- `/word/result/[id]` 페이지
   - AI가 인식한 영어 단어 확인 가능  
     (정확도가 제일 큰 단어 기준)
   - tts 버튼 클릭 시 단어의 발음 확인 가능
   - 편집 아이콘 버튼 클릭 시 영어단어, 뜻 수정 가능    
     (체크리스트로 후보 단어 제공 또는 직접 작성 가능)
   - 단어장 저장하기 버튼 클릭 시 로그인 요청 모달 띄움  
     (로그인 안 했을 때, 이동하기 클릭 시 로그인으로 이동 후 로그인 하면 다시 결과 페이지로 이동 가능)
   - 단어장 저장하기 버튼 클릭 시 단어장 목록 선택 가능
   - 단어장 목록 선택 모달에서 단어장 추가 가능  
     (이름, 공개 여부)
   - 단어장 목록 선택 모달에서 단어장 선택 후 저장하면 단어장에 단어가 저장됨


#### [ 마이페이지 ] : `FE 이창민`, `BE 남혜민`
- 회원 정보 확인 가능  
  (사진, 이름, 이메일, 코멘트, 내 단어장 개수, 북마크한 단어장 개수)
- 단어장 둘러보기 버튼 클릭 시 다른 사람의 공개된 단어장을 확인할 수 있는 `/network`로 이동
- 내 단어장 바로가기 버튼 클릭 시 내 단어장/북마크한 단어장을 확인할 수 있는 `/vocabulary`로 이동
- 회원 정보 수정하기 버튼 클릭 시 회원 정보 수정 가능  
  (사진, 이름, 코멘트)
- 회원 정보 수정하기 모달에서 비밀번호 변경 버튼 클릭 시 비밀번호 변경 가능
- 회원 정보 수정하기 모달에서 회원 탈퇴 버튼 클릭 시 회원 탈퇴 가능  
  (이때 확인 모달을 띄워 회원 탈퇴 여부를 한 번 더 물음 => 실수 방지)
- 회원 정보 수정 후 수정 완료 버튼 클릭 시 수정된 회원 정보가 저장됨


#### [ 네트워크 페이지 ] : `FE 이창민`, `BE 김신웅`
- 다른 사람의 공개된 단어장 목록 확인 가능
- 하트 버튼 클릭 시 다른 사람의 단어장을 북마크에 저장 가능
- 단어장 카드 클릭 시 단어장의 저장된 단어를 확인할 수 있는 `/vocabulary/[id]`로 이동


#### [ 내 단어장/북마크 단어장 페이지 ] : `FE 이창민`, `BE 김신웅`
- 내 단어장 페이지
   - 내 단어장 확인 가능
   - 공개 여부 버튼 클릭 시 공개 여부 전환 가능  
     (지구본 - public, 자물쇠 - private)
   - 편집 버튼 클릭 시 단어장 이름 변경, 단어장 삭제 가능
   - 단어장 카드 클릭 시 단어장의 저장된 단어를 확인할 수 있는 `/vocabulary/[id]`로 이동
- 북마크 단어장 페이지
   - 페이지 상단의 스위치 버튼 클릭 시 내 단어장 <-> 북마크 단어장 전환 가능
   - 하트 버튼 클릭 시 북마크 해제 가능
   - 단어장 카드 클릭 시 단어장의 저장된 단어를 확인할 수 있는 `/vocabulary/[id]`로 이동


#### [ 단어 페이지 ] : `FE 백지유`, `BE 김신웅`
- 단어장에 저장된 단어의 정보 확인 가능  
   (사진, 영어단어, 한글 뜻)
- tts 버튼 클릭 시 단어의 발음 확인 가능
- 편집 아이콘 버튼 클릭 시 영어 단어, 한글 뜻 수정 가능
- 휴지통 아이콘 버튼 클릭 시 단어 삭제 가능  
  (이때 확인 모달을 띄워 단어 삭제 여부를 한 번 더 물음 => 실수 방지)


#### [ 그림 퀴즈 하러가기 페이지 ] : `FE 백지유`, `BE 김신웅`, `AI 조인철`
- 그림으로 그릴 영어 단어 확인 가능
- 문제로 주어진 단어를 보고 캔버스에 그림 그리기 가능
- 모두 지우기 버튼 클릭 시 캔버스에 그린 그림 초기화 가능
- 제출하기 버튼 클릭 시 그린 그림과 AI가 인식한 결과 비교해 결과 모달 띄움
  (문제로 주어진 단어와 뜻, AI가 예측한 단어 확인 가능)


#### [ 단어 퀴즈 하러가기 페이지 ] : `FE 백지유`, `BE 김신웅`
- 단어 퀴즈 페이지 안내 카드
- 단어 짝 맞추기 게임 버튼, 단어장 외우기 버튼 클릭 시 단어장 선택 모달 창을 띄움
- 단어 짝 맞추기 게임 버튼 클릭, 단어장 선택 후 게임을 할 수 있는 `/wordQuiz/game/[id]`로 이동  
 (제한 : 단어장에 저장된 단어가 8개 이상일 때 가능)
- 단어장 외우기 버튼 클릭, 단어장 선택 후 단어를 외울 수 있는 `/wordQuiz/voca/[id]`로 이동  
 (제한 : 단어장에 저장된 단어가 1개 이상일 때 가능)


#### [ 단어 짝 맞추기 게임 페이지 ] : `FE 이창민`, `BE 김신웅`
- 단어장의 단어들로 짝 맞추기 게임 가능
- 게임 종료 후 홈으로 버튼 클릭 시 메인 페이지인 `/`로 이동
- 게임 종료 후 다시 할래요 버튼 클릭 시 단어 퀴즈 하러가기 페이지인 `/wordQuiz`로 이동


#### [ 단어장 외우기 페이지 ] : `FE 백지유`, `BE 김신웅`
- 단어장의 영어 단어들을 하나씩 확인 가능
- tts 버튼 클릭 시 단어의 발음 확인 가능
- 단어 카드 클릭 시 한글 뜻 확인 가능
  (다시 한 번 더 클릭하면 한글 뜻 숨기기 가능)
- 단어 카드 아래 세모 버튼 클릭 시 이전 단어, 다음 단어 이동 가능


#### [ 로그인 / 회원가입 페이지 ] : `FE 백지유`, `BE 남혜민`
- 회원가입 페이지
   - 이메일, 이름, 비밀번호, 비밀번호 확인 입력 후 회원가입 가능
   - 상단의 pocha 로고를 눌러 메인 페이지인 `/`로 이동 가능
- 로그인 페이지
   - 이메일, 비밀번호 입력 후 로그인 가능
   - 상단의 pocha 로고를 눌러 메인 페이지인 `/`로 이동 가능
   - 회원가입 버튼 클릭 시 회원가입 페이지인 `/register`로 이동
   - 비밀번호 찾기 버튼 클릭 시 임시 비밀번호 발급 모달 띄움
   - 임시 비밀번호 발급 모달에서 회원가입 시 입력했던 이메일을 입력하면 해당 이메일로 임시 비밀번호 발급
   - kakao 로그인 가능

</div>
</details>


### ⚙ 메인 기능
- 이미지 인식 후 단어로 변환
    - 사진에 찍힌 사물들을 AI가 인식하여 영단어와 한글 뜻으로 변환해줍니다
- 나만의 단어장 만들기
    - 이미지 인식으로 만든 단어들로 나만의 단어장을 만듭니다.
- 그림 단어 게임
    - 임의의 영단어가 주어지면 해당 단어를 AI가 맞출 수 있도록 직접 그림을 그려봅니다.

### 🔧 서브 기능
- 단어장 학습 컨텐츠
    - 단어장 암기 페이지: 단어장의 사진과 영단어, 뜻을 암기할 수 있는 페이지가 주어집니다.
    - 카드 짝 맞추기 게임: 단어장의 사진과 영단어를 짝을 맞추며 자연스럽게 암기를 도와줍니다.
- 다른 유저 단어장 검색 및 북마크
    - 다른 유저가 만든 단어장도 학습할 수 있게 검색하고, 북마크를 합니다.
- 단어를 읽어주는 TTS 서비스  
    - 단어의 발음을 읽어주는 서비스 입니다.

## 4. 프로젝트 실행 방법
- back : ```npm run start```
- front : ```yarn start```

## 5. 제작 기간 및 팀 소개
엘리스 AI 트랙 4기 3차 인공지능 웹 서비스 프로젝트 6팀 데브몬(DEVMON)

| 팀원 | 역할 |
|--|--|
| 김은혜 | 팀장, AI |
| 조인철 | AI |
| 남혜민 | BE |
| 김신웅 | BE |
| 백지유 | FE |
| 이창민 | FE |

- 제작기간
   - 22.05.31 ~ 22.07.02 (5주)
   
 ## 6. 트러블슈팅
 ![단어퀴즈](https://user-images.githubusercontent.com/28249915/177251895-42d1110c-c791-439a-b9f6-4ae556938713.png)

### 🙅‍♀️ 어려움
각자 다른 페이지로 이동하게 하는 버튼 2개가 존재하는 단어 퀴즈 보러가기 페이지를 구현하면서 버튼 두 개만 존재하기에 따로 배열을 만들지 않고 컴포넌트 2개를 사용했습니다. 두 버튼 모두 클릭 시 단어장 선택 모달이 뜨게 되고 유저가 단어장을 선택했을 때 단어장 아이디와 함께 눌린 버튼에 해당하는 링크로 페이지 이동을 합니다.
클릭 후 로직이 비슷하기에 두 버튼의 클릭 핸들러를 하나로 통일하려 했으나 어떤 버튼이 눌렸는지를 알아야 해당 링크로 보내기 때문에 어떤 값을 key로 설정해 클릭 이벤트가 발생한 버튼을 알 수 있을지 고민했습니다.

처음에는 버튼 클릭 시 발생하는 event 객체의 ```event.target.innerText``` 값을 사용하려 했으나 이 경우 버튼의 text가 바뀌면 클릭 핸들러 함수에도 비교하는 값을 바꿔주어야 하기 때문에 다른 방법을 찾아야 했습니다.

그 다음 해결 방법으로는 버튼이 2개만 들어간다고 하더라도 디자인, 클릭 핸들러 로직이 같거나 비슷하기 때문에 배열로 만든 후 map 함수를 이용했고 이때  key는 index를 사용했습니다. 하지만 index를 사용하는 것은 값이 바뀔 경우 코드들이 무너질 가능성을 염두에 두고 있어야 하기에 적절하지않다고 판단하였습니다.

### 🙆‍♀️ 해결방법
확장성있는 코드를 위해 버튼과 해당 버튼의 페이지 카드 요소들 중 key로 사용될 만한 값을 살펴보았고 그 값을 페이지 카드에 들어가는 이미지의 alt 값으로 설정했습니다.
그리고 이 alt 값을 key로, 나머지 값을 value로 가지는 object를 선언하였고 ```Object.entries()```를 이용해 object의 모든 값을 살펴보았습니다.
또한 이 key 값을 버튼 클릭 핸들러에 넘겨 클릭한 버튼에 대한 분기처리를 실행할 수 있었습니다.
