//================
//================
//skills-meter-start
//================
//================


let number1 = document.getElementById('number1');
let counter1 = 0;

setInterval(() => {
    if (counter1 == 90) {
        setInterval();
    } else {
        counter1 += 1
        number1.innerHTML = ` ${counter1}${'%'} `
    }


}, 18)


let number2 = document.getElementById('number2');
let counter2 = 0;

setInterval(() => {
    if (counter2 == 80) {
        setInterval();
    } else {
        counter2 += 1
        number2.innerHTML = ` ${counter2}${'%'} `
    }


}, 21)


let number3 = document.getElementById('number3');
let counter3 = 0;

setInterval(() => {
    if (counter3 == 80) {
        setInterval();
    } else {
        counter3 += 1
        number3.innerHTML = ` ${counter3}${'%'} `
    }


}, 21)


let number4 = document.getElementById('number4');
let counter4 = 0;

setInterval(() => {
    if (counter4 == 85) {
        setInterval();
    } else {
        counter4 += 1
        number4.innerHTML = ` ${counter4}${'%'} `
    }


}, 21)

let number5 = document.getElementById('number5');
let counter5 = 0;

setInterval(() => {
    if (counter5 == 85) {
        setInterval();
    } else {
        counter5 += 1
        number5.innerHTML = ` ${counter5}${'%'} `
    }


}, 21)

//================
//================
//skills-meter-end
//================
//================



//------------------------------------------------------------------------------------------



//================
//================
//mobile hamburger menu start
//================
//================


jQuery('#toggle').click(function () {
    jQuery(this).toggleClass('active');
    jQuery('#overlay').toggleClass('open');
});


//================
//================
//mobile hamburger menu end
//================
//================