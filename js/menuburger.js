const btnMenu = document.getElementsByClassName("btnmenuMobile")[0];
const menuF = document.getElementsByClassName('MenuFutuante')[0];

btnMenu.addEventListener('click',()=>{
    if(menuF.style.display=='flex'){
        menuF.style.display = 'none'
    }else{
        menuF.style.display='flex'
    }
});

window.onresize = ()=>{
    if(window.innerWidth >= 490){
        menuF.style.display='none'
    }else{

    }
};




