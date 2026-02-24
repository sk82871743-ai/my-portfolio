// Button Click Animation
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.9)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

// Video Hover Preview
document.querySelectorAll("video").forEach(video => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});