let btn=document.querySelector(".btn")
let share=document.querySelector(".share2")
let classOfMain=document.getElementById("mobile")
let classOfMain2=document.getElementById("mobile2")
let touch=document.getElementById("touch")

classOfMain.classList.remove("share3")
share.addEventListener("click", showme)

function showme() {
    btn.style.display="block"
    classOfMain.classList.add("share3")

share.addEventListener("mouseover",tiout)

function tiout() {
    classOfMain.classList.remove("share3")
  
    btn.style.display="none"
  }
}






