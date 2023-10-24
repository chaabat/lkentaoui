const buttons = document.querySelectorAll('button');
const navMobile = document.querySelector(".navbar-mobile");
const burgerBtn = document.querySelector(".burger");


burgerBtn.addEventListener("click" , () =>{
     if(navMobile.style.display == "none"){
      navMobile.style.display = "block";
     }
     else{
      navMobile.style.display = "none";
     }
} );

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}








