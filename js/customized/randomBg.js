document.addEventListener('DOMContentLoaded', function () {
    var elementById = document.getElementsByClassName("full_page").item(0);
    if (elementById != null) {
        // 取0到10的随机数
        var number = Math.random() * 10;
        var bgNumber = Math.ceil(number);
        var bgPath = "/img/index_bg/bg" + bgNumber + ".png";
        elementById.style.backgroundImage = "url('" + bgPath + "')";
    }
});