const count = document.getElementById("count");

const add = document.getElementById("add");
add.addEventListener('click', () =>{
    count.innerHTML++;
    Color();
});
const sub = document.getElementById("sub");
sub.addEventListener('click', () =>{
    count.innerHTML--;
    Color();
});
const reset = document.getElementById("reset");
reset.addEventListener('click', () =>{
    count.innerHTML = 0;
    Color();
});

function Color(){
    if(count.innerHTML > 0){
        count.style.color = "green";
    }else if(count.innerHTML < 0){
        count.style.color = "orange                     ";
    }else{
        count.style.color = "black"
    }
}