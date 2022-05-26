var showPrevBtn = document.getElementById("show-prev-btn");
var showNextBtn = document.getElementById("show-next-btn");
var slideImage = document.getElementById("slide-img");

showPrevBtn.addEventListener("click",onShowPrevBtnClick);
showNextBtn.addEventListener("click",onShowNextBtnClick);

var imagesUrls = [];
imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1b5hi5Fpdcy6XuyeuZ9I6k_WQUk5AjUAuZg&usqp=CAU");
imagesUrls.push("https://1gai.ru/uploads/posts/2020-09/1601381443_56.jpg");
imagesUrls.push("https://zelenyjmir.ru/wp-content/uploads/2017/06/Mops-17.jpg");
imagesUrls.push("https://99px.ru/sstorage/53/2012/08/mid_47709_5099.jpg");


var currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disablet = true;


function onShowPrevBtnClick(){
    currentImageIndex -- ;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disablet = false;
    
    if (currentImageIndex === 0 ) {
        showPrevBtn.disablet = true;
    };

};
function onShowNextBtnClick(){
    currentImageIndex ++ ;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disablet = false;

    if (currentImageIndex === (imagesUrls.length - 1) ) {
        showNextBtn.disablet = true;
    };
};