// ===============================================
//                 JS_DOM_II_Uebungen
// ===============================================

// ==================
//      Level 2_7
// ==================

console.log("%c level 2_7", "color: blue; background-color: gold");

const button = document.getElementsByTagName('button');
const div = document.getElementsByClassName('umwickeln');

let counter = 0;

button[0].addEventListener(('click'), () =>
{
    const childDivs = document.createElement('div');
    if(counter % 10 === 0)
    {
        childDivs.classList.add('rechteck', 'weiss');
    }
    else
    {
        childDivs.classList.add('rechteck');
    }
    div[0].appendChild(childDivs);
    childDivs.textContent = counter;
    counter++;
});

// ==================
//     Level 2_11
// ==================

console.log("%c level 2_11", "color: blue; background-color: gold");
console.log(button);

const background = document.body;

button[1].addEventListener(('click'), () =>
{
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let redSecond = Math.floor(Math.random() * 255);
    let greenSecond = Math.floor(Math.random() * 255);
    let blueSecond = Math.floor(Math.random() * 255);
    let deg = Math.floor(Math.random() * 360);
    // background.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    background.style.background = `linear-gradient(${deg}deg, rgb(${red}, ${green}, ${blue}), rgb(${redSecond}, ${greenSecond}, ${blueSecond}))`;
});