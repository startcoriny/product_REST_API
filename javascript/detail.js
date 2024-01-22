// 함수 최소화
function ButtonClick(e, actionFunction) {
    e.preventDefault();

    const closestForm = e.target.closest('form');
    const productId = closestForm.id;
    console.log('actionFunction => ' + actionFunction);

    if (actionFunction == btnChange) {
        actionFunction(closestForm, e);
    } else {
        actionFunction(productId);
    }
}

// 수정 버튼 눌렀을 때
document.querySelector('#modbtn').addEventListener('click', (e) => {
    console.log('e' + e);
    ButtonClick(e, btnChange);
});

// 수정취소 버튼 눌렀을 때
document.querySelector('#cancelbtn').addEventListener('click', (e) => {
    console.log('e' + e);
    ButtonClick(e, btnChange);
});

// 수정완료 버튼 눌렀을 떄
document.querySelector('#finbtn').addEventListener('click', (e) => {
    ButtonClick(e, modProduct);
});

// 삭제 버튼 눌럿을 때
document.querySelector('#delbtn').addEventListener('click', (e) => {
    ButtonClick(e, delProduct);
});

//버튼 함수(수정버튼, 수정 취소버튼)
function btnChange(closestForm, e) {
    if (closestForm) {
        const productElement = closestForm.querySelectorAll('input, textarea');
        productElement.forEach((product) => {
            product.removeAttribute('readonly');
        });
    }

    const modbtn = closestForm.querySelector('#modbtn');
    const finBtn = closestForm.querySelector('#finbtn');
    const delBtn = closestForm.querySelector('#delbtn');
    const password = closestForm.querySelector('input[name="password"]');
    const cancelbtn = closestForm.querySelector('#cancelbtn');

    if (e.target.id === 'modbtn') {
        if (closestForm) {
            const productElement = closestForm.querySelectorAll('input, textarea');
            productElement.forEach((product) => {
                product.removeAttribute('readonly');
            });
        }
        modbtn.style.display = 'none';
        finBtn.style.display = 'inline-block';
        cancelbtn.style.display = 'inline-block';
        delBtn.style.display = 'none';
        password.style.display = 'block';
    } else if (e.target.id === 'cancelbtn') {
        if (closestForm) {
            const productElement = closestForm.querySelectorAll('input, textarea');
            productElement.forEach((product) => {
                product.readOnly = true;
            });
        }
        modbtn.style.display = 'inline-block';
        finBtn.style.display = 'none';
        cancelbtn.style.display = 'none';
        delBtn.style.display = 'inline-block';
        password.style.display = 'none';
    }
}

// 수정하기 함수
async function modProduct(productId) {
    const productElement = closestForm.querySelectorAll('input, textarea');
    const data = {};
    productElement.forEach((product) => {
        data[product.name] = product.value;
    });
    try {
        const response = await fetch(`/api/product/${productId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            location.reload();
        } else {
            console.error('Server response error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error during update:', error);
    }
}

// 삭제하기 함수
async function delProduct(productId) {
    try {
        const response = await fetch(`/api/product/${productId}`, {
            method: 'DELETE',
        });
        // 네트워크 요청 성공 및 서버 응답이 성공적인 경우
        if (response.ok) {
            const responseData = await response.json(); // 혹은 response.text() 등으로 데이터를 가져올 수 있음
            console.log('Server response:', responseData);
            window.location = '/api';
        } else {
            // 서버 응답이 실패한 경우
            console.error('Server response error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error during update:', error);
    }
}
