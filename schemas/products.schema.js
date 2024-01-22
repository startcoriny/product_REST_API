import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    //스키마 정의하기
    productName: {
        type: String,
        require: true, // productName(상품이름) 필수 요소
    },
    productDetail: {
        type: String,
        require: true, // productDetail(상품내용) 필수 요소
    },
    sellerName: {
        type: String,
        require: true, // sellerName(판매자이름) 필수 요소
    },
    password: {
        type: Number,
        require: true, // password(비밀번호) 필수 요소
    },
    productStatus: {
        type: String,
        require: true, // productStatus(상품상태) 필수 요소
        default: 'FOR_SALE', // 기본값으로 'FOR_SALE'지정
    },
    registrationDate: {
        type: Date,
        require: true,
        default: Date.now(),
    },
});

// TodoSchema를 바탕으로 Todo모델을 생성하여, 외부로 내보냅니다.
export default mongoose.model('productschemas', productSchema);
