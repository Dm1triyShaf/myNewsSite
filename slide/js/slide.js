var sliderFactory = {
   
    createNewSlider: function () {  
        var newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,
            
            showPrevBtn: null,
            showNextBtn: null,
            slideImage: null,
        
            start: function (elId) {
                var that = this;
        
                var elSelector = '#' + elId;
                var el = document.querySelector(elSelector);
        
                this.showPrevBtn = el.querySelector('.show-prev-btn');
                this.showNextBtn = el.querySelector('.show-next-btn');
                this.slideImage = el.querySelector('.slide-img');
        
                this.showPrevBtn.addEventListener('click', function (e) {
                    that.onShowPrevBtnClick(e)
                });
        
                this.showNextBtn.addEventListener('click', function (e) {
                    that.onShowNextBtnClick(e)
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
        
                if (this.currentImageIndex == (this.imagesUrls.length - 1)) {
                    this.showPrevBtn.disablet = true;
                }
            }
       
        };
    
        return newSlider;
    }
    }





