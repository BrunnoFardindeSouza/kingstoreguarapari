const navBody = [...document.getElementsByClassName("navBody")]; 

function verificTop(){
    navBody.map((el,i,a)=>{
        topoNavBody = el.offsetTop
        if(scrollY > topoNavBody){
            el.classList.add("fixar")
        }else{
            el.classList.remove("fixar")
        }
    })

}

window.onload = (()=>{
    verificTop();

})
window.onscroll = (()=>{
    verificTop()

})