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

let minusBtn = document.querySelector('.minus');
let inputCount = document.querySelector('.count input');
let plusBtn = document.querySelector('.plus');
let price = document.querySelector('.price span');

let s = 1;
let priceIn = 119;

plusBtn.addEventListener('click', () => {
    let countValue = parseInt(inputCount.value, 10);
    // let priceValue = parseInt(price.textContent, 10);

    if (countValue >= s) {
        inputCount.value = countValue + 1;
        price.textContent = priceIn * inputCount.value;
        minusBtn.disabled = false;
    }
});


minusBtn.addEventListener('click', () => {
    let countValue = parseInt(inputCount.value, 10);
    let priceValue = parseInt(price.textContent, 10);
    console.log(priceValue);

    if (countValue > s) {
        inputCount.value = countValue - 1;
        price.textContent = priceValue - priceIn;
    } else if (countValue === s) {
        price.textContent = priceIn;
        minusBtn.disabled = true;
    }
});






