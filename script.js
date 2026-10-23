var images = document.querySelectorAll(".im img");

var overlay = document.createElement("div");
var fullimg = document.createElement("img");

var nextBtn = document.createElement("button");
var prevBtn = document.createElement("button");
var exitBtn = document.createElement("button");

nextBtn.innerHTML = ">";
prevBtn.innerHTML = "<";
exitBtn.innerHTML = "X";

overlay.id = "overlay";

nextBtn.className = "next";
prevBtn.className = "prev";
exitBtn.className = "exit";

overlay.appendChild(fullimg);
overlay.appendChild(prevBtn);
overlay.appendChild(nextBtn);
overlay.appendChild(exitBtn);

document.body.appendChild(overlay);

var currentIndex = 0;


images.forEach(function(img, index) {

    img.addEventListener("click", function() {
        currentIndex = index;
        showImage();
        overlay.style.display = "flex";
    });

});


function showImage() {
    fullimg.src = images[currentIndex].src;
}


nextBtn.addEventListener("click", function(event) {
    event.stopPropagation();

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

prevBtn.addEventListener("click", function(event) {
    event.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});


exitBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    overlay.style.display = "none";
});