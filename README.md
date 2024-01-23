# 상품(CRUD) REST API 구현 및 AWS 배포
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
### ■ node.js와 mongoDB-mongoose를 활용하여 데이터베이스를 설계하였습니다.
### ■ crud기능이 있는 REST API를 Express.js기반으로 구현하였습니다.
### ■ AWS EC2에 배포하였습니다.
<a href='http://13.125.255.98:3000/api'> 프로젝트 링크 </a>


<br><br><br>
### 상품 목록조회 API  |  GET /api/
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/038bbba9-0532-4ae4-82d1-a37b6815af85" width="600"/><br>
● 상품명, 작성자명, 상품 상태, 작성 날짜 조회하기.<br>
● 상품 목록은 작성 날짜를 기준으로 내림차순(최신순)정렬.<br>

### 상품 등록 API  |  POST /api/product
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/a1566436-bfe9-44de-aa7d-a56a37dd69d8" width="600"/><br>
● 상품명, 작성자명, 작성내용, 비밀번호를 request에서 전달 받기.<br>
● 상품은 두가지 상태, 판매중(FOR_SALE)과 판매 완료(SOLD_OUT)상태를 가짐.<br>
● 상품 등록시 기본상태는 판매중(FOR_SALE)으로 설정.<br>

### 상품 상세조회 API  |  GET /api/productDetail/:productId
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/5e6f8e75-8c37-4636-9837-4b1f9a831c8c" width="600"/><br>
● 상품명, 작성자명, 작성내용, 상품 상태, 작성 날짜 조회하기<br>

### 상품 정보수정 API  |  PATCH /api/product/:productId
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/259663dd-4417-4bfc-95c5-3cb97a57bac3" width="600"/><br>
● 상품명, 작성자명, 작성내용, 비밀번호를 request에서 전달 받기.<br>
● 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이 수정되게 하기<br>

### 상품 목록조회 GET /api/
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/0a66a2e4-7130-49c5-a4cc-17b9ec1a7b64" width="600"/><br>
● 비밀번호를 request에서 전달 받기.<br>
● 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이 수정되게 하기<br>
