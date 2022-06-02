
var slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById('show-prev-btn'),
    showNextBtn: document.getElementById('show-next-btn'),
    slideImage: document.getElementById('slide-img'),

    start: function () {
        var that = this;
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick
        });

        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick
        });
      
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1b5hi5Fpdcy6XuyeuZ9I6k_WQUk5AjUAuZg&usqp=CAU');
        this.imagesUrls.push('https://1gai.ru/uploads/posts/2020-09/1601381443_56.jpg');
        this.imagesUrls.push('https://zelenyjmir.ru/wp-content/uploads/2017/06/Mops-17.jpg');
        this.imagesUrls.push('https://99px.ru/sstorage/53/2012/08/mid_47709_5099.jpg');

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disablet = true;
    },

    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disablet = false;

        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disablet = true;
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disablet = false;

        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disablet = true;
        }
    },
};



