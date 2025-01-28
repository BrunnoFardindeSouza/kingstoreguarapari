const navBody = [...document.getElementsByClassName("navBody")]; 

window.onscroll = (()=>{
    navBody.map((el,i,a)=>{
        topoNavBody = el.offsetTop
        if(scrollY > topoNavBody){
            el.classList.add("fixar")
        }else{
            el.classList.remove("fixar")
        }
    })

})