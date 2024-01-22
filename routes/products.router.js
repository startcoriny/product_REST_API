import express from 'express';
import productschemas from '../schemas/products.schema.js';

const router = express.Router();

router.post('/product', async (req, res) => {
    try {
        const { productName, productDetail, sellerName, password } = req.body;

        const product = new productschemas({
            productName,
            productDetail,
            sellerName,
            password,
        });

        await product.save();
        return res.status(201).redirect('/api');
    } catch (error) {
        return res.status(404).json({ errmessege: '상품 추가 에러' });
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
    return res.status(200).render('detail', { products });
});

// 상품 수정 API
router.patch('/product/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const { productName, productDetail, sellerName, password = 0 } = req.body;
        const products = await productschemas.findById(productId).exec();

        if (!products) {
            return res.status(404).json({ errmessege: '상품조회에 실패 하였습니다 ' });
        }

        if (parseInt(password) !== products.password) {
            return res.status(404).json({ errmessege: '비밀번호가 일치하지 않습니다.' });
        }
        products.productName = productName;
        products.productDetail = productDetail;
        products.sellerName = sellerName;
        await products.save();

        return res.status(200).json({ products });
    } catch (error) {
        // 발생한 에러를 다음 에러 처리 미들웨어로 전달합니다.
        return res.status(404).json({ errmessege: '상품조회에 실패 하거나 비밀번호가 일치하지 않습니다.' });
    }
});

// 상품 삭제 API
router.delete('/product/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const { password } = req.body;
        const products = await productschemas.findById(productId).exec();

        //상품 존재유무 확인
        if (!products) {
            return res.status(404).json({ errmessege: '상품조회에 실패 하였습니다 ' });
        }

        if (parseInt(password) !== products.password) {
            return res.status(404).json({ errmessege: '비밀번호가 일치하지 않습니다.' });
        }

        await productschemas.findByIdAndDelete(productId);
        return res.status(200).json({});
    } catch (error) {
        // 발생한 에러를 다음 에러 처리 미들웨어로 전달합니다.
        return res.status(404).json({ errmessege: '상품조회에 실패 하거나 비밀번호가 일치하지 않습니다.' });
    }
});

export default router;
