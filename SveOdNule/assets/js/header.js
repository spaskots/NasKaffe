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

//Menjanje boje
function promeniBoju(){
    
    if(this.scrollY  > this.innerHeight / 2 + 100) // na pola ce se ispuniti uslov
    {
        document.body.classList.add("bg-active");
    }else{
        document.body.classList.remove("bg-active");
    }
}
window.addEventListener('scroll', promeniBoju)

//sticky header 
window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
})