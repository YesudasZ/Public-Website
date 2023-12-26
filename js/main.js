

//nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})



// Counter design

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
           current += increment;
           obj.textContent = current;
           if(current == end){
            clearInterval(timer);
           }

    },step);
  }
  counter("count1",0,228,300);
  counter("count2",0,57,250);
  counter("count3",0,148,300);
  counter("count4",0,420,20);
});