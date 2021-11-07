const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
            //Animirani Linkovi
         navLinks.forEach((link, index)=>{

             if(link.style.animation){
                link.style.animation = '';
              }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 1.1}s`;        
            }
    });
    //Animacija za Burger
    burger.classList.toggle('toggle');
});

}

navSlide();