




const buttons = document.querySelectorAll('button');
const navMobile = document.querySelector(".navbar-mobile");
const burgerBtn = document.querySelector(".burger");


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



burgerBtn.addEventListener("click" , () =>{
     if(navMobile.style.display == "none"){
      navMobile.style.display = "block";
     }
     else{
      navMobile.style.display = "none";
     }
} );


/******************validation email********************************/

let contact_input = document.getElementsByClassName("field");

for (let i = 0; i <= contact_input.length; i++) {
  contact_input[i].addEventListener("invalid", () => {
    contact_input(contact_input[i]);
  });

  contact_input[i].addEventListener("input", () => {
    input_error(contact_input[i]);
  });
}


function input_error(x) {
  if (x.validity.valueMissing) {
    x.setCustomValidity("Ce champ est Invalid");
  } else if (x.validity.typeMismatch) {
    x.setCustomValidity("Email invalide");
  } else {
    x.setCustomValidity("");
    return true;
  }
  
}












