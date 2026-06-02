const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('.nav-links');

if(hamburger){
hamburger.addEventListener('click',()=>{
nav.classList.toggle('active');
});
}
