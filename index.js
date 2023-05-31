const intro = $("#intro");
const detail = $("#detail");
const hobby = $("#hobby");

const introduction = $(".introduction");
const backDiv = $(".backDiv");
const detailIntro = $('.detailIntro');
const hobbyContent = $(".hobby");

const none = "none";
const show = "";

function displayHandler(intro, back, detail, hobby) {
    introduction.css("display", intro);
    backDiv.css("display", back);
    detailIntro.css("display", detail);
    hobbyContent.css("display", hobby);
}

intro.on("click", function() {
    displayHandler(show, show, none, none);
});

detail.on("click", function() {
    displayHandler(none, none, show, none);
});

hobby.on("click", function() {
    displayHandler(none, none, none, show);
});
