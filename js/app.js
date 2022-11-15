document.body.style.backgroundColor = `lightgrey`;

// function spaceBar(event){
//     // document.body.style.backgroundImage = `(src="https://www.datocms-assets.com/75076/1656656339-macgregor_tartan_2.jpeg")`;
//     if (key === "" || code == "space" || keyCode == 32){
//     document.body.style.backgroundColor = `limegreen`;
// }
// }
// document.body.onkeydown = function(event) {
//     if (event.key ==" " ||
//     event.code == "Space" ||
//     event.keyCode == 32) {
//         document.body.style.backgroundImage =  `(src="https://www.datocms-assets.com/75076/1656656339-macgregor_tartan_2.jpeg")`;
//  }
// }
// document.body.addEventListener(`onkeydown`, spaceBar);
//     if(code === `space`){
//         console.log(`Space pressed`);
//     }

// function spaceBar() {
//     document.getElementById(`spacebar`).style.backgroundImage = `(src="https://www.datocms-assets.com/75076/1656656339-macgregor_tartan_2.jpeg")`;
// }

// window.onkeydown = function (event) {
//     if (event.which == 32) {
//         document.body.backgroundColor = `black`;
//     }
// }

// addEventListener(`keydown`, (event) => {});
// onkeydown = (event) => {};

function goBold(event){
    event.target.style.color = `limegreen`;
    event.target.style.fontSize = `3rem`;
}

   window.onkeypress = function(event) {
      if (event.which == 32) {
        document.body.style.backgroundColor = `hotpink`; 
      }
    }

function goBig(event){
    event.target.innerHTML += ` HOME OF TERRIBLE PUNS!`;
    head.style.fontStyle = `italic`;
    head.style.color = `dodgerblue`;
    head.style.fontFamily = `verdana`;
}

let firstP = document.getElementById(`firstP`);
firstP.addEventListener(`mouseover`, (goBold));

let head = document.getElementById(`head`);
head.addEventListener(`click`, (goBig));

// function changeColor(i){
//     let body = document.getElementById(`background`);
//     let color = [`blue`, `purple`, `pink`, `limegreen`];
//     for(i=0; i<color.length; i++){
//         document.style.backgroundColor = color(i);
//     }
// }

// let changeColor = document.getElementById(`spacebar`);
// setTimeout(function(changeColor)){spaceBar.value = `blue`}, 15000);
// // 

