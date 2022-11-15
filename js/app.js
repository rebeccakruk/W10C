document.body.style.backgroundColor = `lightgrey`;

function goBold(event) {
    event.target.style.color = `limegreen`;
    event.target.style.fontSize = `3rem`;
}

function goBig(event) {
    event.target.innerHTML += ` HOME OF TERRIBLE PUNS!`;
    head.style.fontStyle = `italic`;
    head.style.color = `dodgerblue`;
    head.style.fontFamily = `verdana`;
}

let firstP = document.getElementById(`firstP`);
firstP.addEventListener(`mouseover`, (goBold));

let head = document.getElementById(`head`);
head.addEventListener(`click`, (goBig));

window.onkeypress = function (event) {
    if (event.which == 32) {
        document.body.style.color = `hotpink`;
        document.body.style.fontSize = `30px`;
    }
}

colors = [`red`, `darkgrey`, `rebeccapurple`, `darkgoldenrod`, `aqua`, `bisque`]
colorIndex =0
function changeColor(){
    document.body.style.backgroundColor = colors[colorIndex]
    colorIndex = (colorIndex +1) % colors.length
}

function startChange(){
    setInterval(`changeColor()`, 15*1000)
}
window.onload = startChange

