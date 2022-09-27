let nums = document.querySelectorAll(".stats .content .card .num ")
let section = document.querySelector(".stats");
let start = false;
window.onscroll = function(){
// if(window.scrollY >= section.offsetTop ){
// if(!start){
// nums.forEach((nus)=> counter(nus)) 
// start=true;   
// }
// }
}
function counter(nums){
let goal = nums.dataset.goal;
let count = setInterval(function(){
nums.textContent++;
if(nums.textContent == goal)
clearInterval(count)
},10)
}

//timer count down?

let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let goaldate = new Date("March 20 ,2040 00:00:00").getTime();

let count=setInterval(function(){


let currenttime = new Date().getTime();



let timediff = goaldate - currenttime;
let remainday =Math.floor(timediff/(1000*60*60*24));
let remainhour =Math.floor((timediff%(1000*60*60*24))/(1000*60*60));
let remainminute =Math.floor((timediff%(1000*60*60))/(1000*60));
let remainsecond =Math.floor((timediff%(1000*60))/(1000));




days.innerHTML=remainday<10?`00${remainday}`:remainday<100 ? `0${remainday}`:remainday  ;

hours.innerHTML=remainhour<10?`0${remainhour}`:remainhour; 
minutes.innerHTML=remainminute<10?`0${remainminute}`:remainminute; 
seconds.innerHTML=remainsecond<10?`0${remainsecond}`:remainsecond; 








},1000)

// fill the data width percentage 
let skill = document.querySelectorAll(".perc .pro span ")
let skillssection = document.querySelector(".skills");

window.onscroll = function(){
if(window.scrollY >= skillssection.offsetTop ){

skill.forEach((skill) => fill(skill));

}else if(window.scrollY > 3100){
show();
}else{
hide();


}
if(window.scrollY >= section.offsetTop ){
if(!start){
nums.forEach((nus)=> counter(nus)) 
start=true;   
}
}
}
function fill(skill){
let goal = skill.dataset.progress;
skill.style.width = goal;


}



//4- How many letters remained and fill width:
let formclass = document.querySelector(".formclass")
let howmanyletters = document.querySelector("span.count")
let borderfill =document.querySelector(".progress")
let input = document.querySelector("[type = email]")
howmanyletters.innerHTML = input.getAttribute("maxlength")
input.oninput = function(){
howmanyletters.innerHTML = input.getAttribute("maxlength") - input.value.length ;
howmanyletters.innerHTML == 0? howmanyletters.classList.add("reachfinal") : howmanyletters.classList.remove("reachfinal");
borderfill.style.width=`${(input.value.length *100)/input.getAttribute("maxlength")}%`







} 

//scroll to the top
let scroll1 = document.querySelector(".scrollup");

// window.onscroll=function(){
// console.log(scrollY)
// if(window.scrollY > 3100){
// scroll1.style.display="block";

// }else{
// scroll1.style.display="none";


// }

// }
function show(){
    scroll1.style.display="block";
}
function hide(){
    scroll1.style.display="none";
}

scroll1.onclick=function(){

window.scrollTo(0,0);



}

