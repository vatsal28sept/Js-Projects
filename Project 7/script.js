const randomColor = function(){
    let hexCode = '123456789ABCDEF';
    let color = '#';
    for(i = 0; i < 6; i++){
        color += hexCode[Math.floor(Math.random() * 16)]
    }
    return color;
}

let bg;
document.querySelector('#start').addEventListener('click',function(){
    if(bg == null){

        bg = setInterval(bgChange,100)
    }
    function bgChange(){
        document.body.style.backgroundColor = randomColor();

    }
    // console.log("Start BUtton Clicked")
})
document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(bg)
    bg = null;
})