import express from 'express'; //express 사용을 위한 import
import connect from './schemas/index.js';
import ProductsRouter from './routes/products.router.js';

const app = express();
const PORT = 3000;

connect();

// ejs를 사용하기 위한 view 엔진설정.
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = express.Router();

app.get('/', (req, res) => {
    res.send({ messege: '안녕' });
});

app.use('/api', [router, ProductsRouter]);

app.listen(PORT, () => {
    console.log(PORT, '포트로 서버가 열렸어요!');
});
