const scrollBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset >500){
        scrollBtn.style.display ="block";
    }
    else{
        scrollBtn.style.display = "none";
    }
});
scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
