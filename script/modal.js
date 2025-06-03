const backdrop = document.querySelectorAll(".backdrop")
const mapButton = document.getElementById("mapButton")
const contactButton = document.getElementById("contactButton")
const modal = document.querySelectorAll(".modal")
document.addEventListener("keydown",(event)=>{
  if (event.key==="Escape"){
    closeModal()
  }
})

mapButton.addEventListener("click",()=>openModal(0))

modal.forEach(content => content.addEventListener("click",(event)=> event.stopPropagation()))
contactButton.addEventListener("click",()=>openModal(1))


function openModal(index){
  backdrop[index].classList.add("backdrop_active")
}

function closeModal(){
  backdrop.forEach((element)=>element.classList.remove("backdrop_active"))
}

console.log(mapButton)

