import express from 'express';
import productschemas from '../schemas/products.schema.js';

const router = express.Router();

// 상품 삽입 API
router.post('/product', async (req, res) => {
    try {
        const { productName, productDetail, sellerName, password } = req.body;

        // req.body에 비어있는 항목이 있을경우
        if (!(productName || productDetail || sellerName || password)) {
            return res.status(400).json({ errMessage: '데이터 형식이 올바르지 않습니다.' });
        }

        const product = new productschemas({
            productName,
            productDetail,
            sellerName,
            password,
        });

        await product.save();
        return res.status(201).redirect('/api');
    } catch (error) {
        return res.status(500).json({ errmessege: '예기치 못한 에러가 발생하였습니다.' });
    }
});

// mainPage 상품리스트 조회 API
router.get('/', async (req, res) => {
    const products = await productschemas.find().sort('-registrationDate').exec();
    return res.render('index', { products }); // 객체로 넘겨줘야 뷰 템플릿에서 변수로 접근할 수 있음
});

// detailPage 상품 상세 조회 API
router.get('/productDetail/:productId', async (req, res) => {
    const productId = req.params.productId;
    const products = await productschemas.findById(productId).exec();

    // 해당 상품이 존재하지 않을 경우
    if (!products) {
        return res.status(404).json({ errMessage: '상품조회에 실패하였습니다.' });
    }

    return res.status(200).render('detail', { products });
});

// 상품 수정 API
router.patch('/product/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const { productName, productDetail, sellerName, password = 0, productStatus } = req.body;
        const products = await productschemas.findById(productId).exec();

        // req.body에 비어있는 항목이 있거나 params가 비어 있을경우
        if (!(productName || productDetail || sellerName || password) || !req.params) {
            return res.status(400).json({ errMessage: '데이터 형식이 올바르지 않습니다.' });
        }

        // Validation
        // 상품이 없다면 에러메세지 전송 (상품이 항상 있다고 나와서 이 IF문을 진입하지 않음)
        if (!products) {
            return res.status(404).json({ errmessege: '상품조회에 실패 하였습니다 ' });
        }

        // Validation
        // 비밀번호가 일치하지 않는다면 에러메세지 전송
        if (parseInt(password) !== products.password) {
            return res.status(401).json({ errmessege: '상품을 수정할 권한이 존재하지 않습니다.' });
        }

        //위 Validation을 지나면 검증이 됐으므로 데이터를 넣어주고 저장해준뒤 반환
        products.productName = productName;
        products.productDetail = productDetail;
        products.sellerName = sellerName;
        products.productStatus = productStatus;
        await products.save();

        return res.status(200).json({ products });
    } catch (error) {
        // 발생한 에러 문구 전달
        return res.status(500).json({ errmessege: '예기치 못한 에러가 발생하였습니다.' });
    }
});

// 상품 삭제 API
router.delete('/product/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const { password } = req.body;
        const products = await productschemas.findById(productId).exec();

        // 요청받은 param또는 body가 비어있다면
        if (!req.params || !req.body) {
            return res.status(400).json({ errmessege: '데이터 형식이 올바르지 않습니다.' });
        }

        // Validation
        // 상품이 없다면 에러메세지 전송 (상품이 항상 있다고 나와서 이 IF문을 진입하지 않음)
        if (!products) {
            return res.status(404).json({ errmessege: '상품조회에 실패 하였습니다 ' });
        }

        // Validation
        // 비밀번호가 일치하지 않는다면 에러메세지 전송
        if (parseInt(password) !== products.password) {
            return res.status(401).json({ errmessege: '상품을 삭제할 권한이 존재하지 않습니다.' });
        }

        await productschemas.findByIdAndDelete(productId);
        return res.status(200).json({});
    } catch (error) {
        // 발생한 에러 문구 전달
        return res.status(404).json({ errmessege: '예기치 못한 에러가 발생하였습니다.' });
    }
});

export default router;
