const botonNo = document.getElementById("wenas");
botonNo.addEventListener("mouseover", moverRandom);

function moverRandom(){
    var screenWidth = screen.width;

    var screenHeight = screen.height;

    let top =  randomMedidas(0,400),
        left = randomMedidas(0,screenWidth);

    botonNo.style.position="absolute";
    botonNo.style.top=`${top}px`
    botonNo.style.left=`${left}px`

}

const randomMedidas = (min, max) =>{
    return Math.floor(Math.random()*(max-min))+min
}