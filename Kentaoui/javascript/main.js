function imgSlide(imgSrc){
    document.querySelector(".atay").src = imgSrc

}

function changeColors(color){
    const shape = document.querySelector(".shape");
    const button = document.querySelector(".learn-more");
    const atay = document.querySelector("h2.product-header span");
    shape.style.backgroundColor = color;
    button.style.backgroundColor = color;
    atay.style.color = color;
}


const buttons = document.querySelectorAll('button');

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





// const nameInput = document.querySelector("#name");
// const nameInput = document.querySelector("#email");
// const nameInput = document.querySelector("#message");
// const nameInput = document.querySelector("#success");
// const nameInput = document.querySelectorAll(".error");









// function ValidateForm(){

//   clearMessages();
//   if(nameInput.ariaValueMax.lenght <1){
//     errornodes[0].innerText = "Name cannot be blank";
//     nameInput.classList.add("error-border");
//   }

// }

// function clearMessages(){
//   for(let i=0;)
// }
