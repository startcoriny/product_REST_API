# 상품(CRUD) REST API 구현 및 AWS 배포



### 상품 목록조회 API  |  GET /api/
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/038bbba9-0532-4ae4-82d1-a37b6815af85" width="800"/><br>
● 상품명, 작성자명, 상품 상태, 작성 날짜 조회하기.<br>
● 상품 목록은 작성 날짜를 기준으로 내림차순(최신순)정렬.<br>

### 상품 등록 API  |  POST /api/product
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/9c8aa0b2-fe88-47f6-a40f-dd78441ad4c1" width="800"/><br>
● 상품명, 작성자명, 작성내용, 비밀번호를 request에서 전달 받기.<br>
● 상품은 두가지 상태, 판매중(FOR_SALE)과 판매 완료(SOLD_OUT)상태를 가짐.<br>
● 상품 등록시 기본상태는 판매중(FOR_SALE)으로 설정.<br>

### 상품 상세조회 API  |  GET /api/productDetail/:productId
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/953bd66f-3ab2-4141-a57c-a18801a7abfd" width="800"/><br>
● 상품명, 작성자명, 작성내용, 상품 상태, 작성 날짜 조회하기<br>

### 상품 정보수정 API  |  PATCH /api/product/:productId
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/89537e6a-538e-4895-b463-096fb9b42f72" width="800"/><br>
● 상품명, 작성자명, 작성내용, 비밀번호를 request에서 전달 받기.<br>
● 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이 수정되게 하기<br>

### 상품 목록조회 GET /api/
<hr>
<img src="https://github.com/startcoriny/product_REST_API/assets/127919222/2d5e9610-1317-4ef7-9b34-5fabd05d85c5" width="400"/><br>
● 비밀번호를 request에서 전달 받기.<br>
● 수정할 상품과 비밀번호 일치 여부를 확인한 후, 동일할 때만 글이 수정되게 하기<br>
