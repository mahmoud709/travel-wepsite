let bar_btn=document.getElementById("menu-btn");
let login_btn=document.getElementById("login-btn");
let menue=document.querySelector(".navbar");
let login_menue=document.querySelector(".login-form");

let theme_btn=document.getElementById("theme-btn");


bar_btn.onclick=function(){
    menue.classList.toggle('active');
}
login_btn.onclick=function(){
    login_menue.classList.toggle('active');
}

theme_btn.onclick=function(){
    theme_btn.classList.toggle("fa-sun")
   
if(theme_btn.contains('fa-sun')){
    document.body.classList.add('active');
}
else{
    document.body.classList.remove('active');
}

}

const scroll_btn=document.getElementById('scroll_button');

window.onscroll=function(){
    if(scrollY>=150){
        scroll_btn.style.display='block';
    }
    else{
        scroll_btn.style.display='none';
    }
}

scroll_btn.onclick=function(){
scroll(0,0);
}