var showPrevBtn = document.getElementById("show-prev-btn")
var showNext = document.getElementById("show-next-btn")

showPrevBtn.addEventListener("click",onShowPrevBtn)
showNext.addEventListener("click",onShowNextBtn)



function onShowPrevBtn(){
    console.log('prev-clicked');
}
function onShowNextBtn(){
    console.log('next-clicked');
}