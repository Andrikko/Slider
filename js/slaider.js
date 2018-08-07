var myForm = document.forms.form;
var someRadio = document.forms.someRadio;
var slider = {
    slides: ['1.png','109.png','141223144504.jpg','deshevo.png'],
    i: 0,
    set: function (image) {
        document.getElementById('content').style.backgroundImage = 'url(/img/forSlaider/' + image + ')';
        document.getElementById('content').style.backgroundSize = 'cover';
    },
    interval: function(){
        this.run = setInterval(function(){slider.right();},5000);
    },
    init: function () {
        this.set(this.slides[this.i]);
        this.interval();
    },
    left: function () {
        this.i--;
        if (this.i < 0) {
            this.i = this.slides.length - 1;
        }
        this.set(this.slides[this.i]);
    },
    right: function () {
        $('.content').animate({
            left: '-=100'
        },2000,function(){});
        this.i++;
        if (this.i == this.slides.length) {
            this.i = 0;
        }
        this.set(this.slides[this.i]);
    }
};

slider.init();
document.getElementById('mainDiv').onmouseover = function(){
    clearInterval(slider.run);
    document.getElementById('mainDiv').onmouseout = function(){
        slider.interval();
    }
}