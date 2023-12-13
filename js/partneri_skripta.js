document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const partneriImages = document.querySelector(".partneri-images");

    let slideIndex = 0;
    const slideWidth = 200; 

    prevButton.addEventListener("click", function () {
        slideIndex = Math.max(slideIndex - 1, 0);
        partneriImages.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });

    nextButton.addEventListener("click", function () {
        const numImages = partneriImages.children.length;
        slideIndex = Math.min(slideIndex + 1, numImages - 1);
        partneriImages.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });
});
