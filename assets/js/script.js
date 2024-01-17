const rangeInput = document.querySelectorAll('.range__input input'),
priceInput = document.querySelectorAll('.price span input'),
progress = document.querySelector('.slider .progress');

let priceGap = 0;

priceInput.forEach(input => {
    input.addEventListener("input", e=>{

        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);

        if((maxVal - minVal >= priceGap) && maxVal <= 1900){
            if(e.target.className === 'input-min'){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            }else{
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e=>{

        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap){
            if(e.target.className === 'minInput'){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

        
    });
});


// Shop Javascript

let activePage = window.location.pathname;

let activeHeader = document.querySelectorAll('.header .nav li a').forEach(link => {
   if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
   }else{
    link.classList.remove('active');
   }
});





// Cart

let shopImgList = document.querySelectorAll('.shop-left-images li img');
let home = document.querySelector('.home-img');

shopImgList.forEach(img => {
    img.addEventListener('click', () => {
        document.querySelectorAll('.shop-left-images li img').forEach(oldImg => {
            oldImg.classList.remove('active');
        });
        img.classList.add('active');
        home.src = img.src;
    });
});

// Minus And Plus Price

let minusBtn = document.querySelectorAll('.minus');
let inputCount = document.querySelectorAll('.count input');
let plusBtn = document.querySelectorAll('.plus');
let price = document.querySelectorAll('.price span');
let initialPrice = Array.from(price).map(element => parseInt(element.textContent, 10));

plusBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let countValue = parseInt(inputCount[index].value, 10);

        if (countValue >= 1) {
            inputCount[index].value = countValue + 1;
            price[index].textContent = (initialPrice[index] * (countValue + 1)) + ".00";
            minusBtn[index].disabled = false;
        }
    });
});

minusBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let countValue = parseInt(inputCount[index].value, 10);

        if (countValue > 1) {
            inputCount[index].value = countValue - 1;
            price[index].textContent = (initialPrice[index] * (countValue - 1)) + ".00";
        } else if (countValue === 1) {
            price[index].textContent = initialPrice[index] + '.00';
            minusBtn[index].disabled = true;
        }
    });
});



// DELETE BUTTON FOR JS

let delButton = document.querySelectorAll('.btns .delete').forEach((btn, index) =>{
    btn.addEventListener('click', ()=>{
        let product = document.querySelectorAll('.cart__left tbody tr');
        product[index].style.display = 'none';
    })
});









