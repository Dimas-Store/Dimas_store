const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

function tampilSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function slideBerikutnya(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    tampilSlide(current);
}

function slideSebelumnya(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    tampilSlide(current);
}

next.addEventListener("click",slideBerikutnya);

prev.addEventListener("click",slideSebelumnya);

setInterval(()=>{
    slideBerikutnya();
},3000);

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        tampilSlide(current);

    });

});

const searchInput=document.getElementById("searchInput");

const cards=document.querySelectorAll(".produk-card");

searchInput.addEventListener("keyup",()=>{

    const keyword=searchInput.value.toLowerCase();

    cards.forEach((card)=>{

        const nama=card.querySelector("h3").textContent.toLowerCase();

        if(nama.includes(keyword)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});
