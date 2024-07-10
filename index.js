



// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".slide");
//     const audioPlayer = document.querySelector(".audio-player");
//     let currentPlaying = null;

//     slides.forEach((slide, index) => {
//         const playButton = slide.querySelector(".play-button");
//         const audioSrc = slide.getAttribute("data-audio");

//         playButton.addEventListener("click", function () {
//             if (currentPlaying && currentPlaying !== slide) {
//                 currentPlaying.classList.remove("active");
//                 const currentPlayButton = currentPlaying.querySelector(".play-button");
//                 currentPlayButton.innerHTML = "&#9658;";
//                 audioPlayer.pause();
//                 audioPlayer.currentTime = 0;
//             }

//             if (slide.classList.contains("active")) {
//                 if (audioPlayer.paused) {
//                     audioPlayer.play();
//                     playButton.innerHTML = "&#10074;&#10074;";
//                     playButton.style.color = "white";
//                 } else {
//                     audioPlayer.pause();
//                     playButton.innerHTML = "&#9658;";
//                     playButton.style.color = "white";
//                 }
//             } else {
//                 slide.classList.add("active");
//                 playButton.innerHTML = "&#10074;&#10074;";
//                 playButton.style.color = "white";
//                 audioPlayer.src = audioSrc;
//                 audioPlayer.play();
//                 currentPlaying = slide;
//             }
//         });

//         audioPlayer.addEventListener("ended", function () {
//             slide.classList.remove("active");
//             playButton.innerHTML = "&#9658;";
//             playButton.style.color = "white";
//             const nextSlide = slides[(index + 1) % slides.length];
//             const nextPlayButton = nextSlide.querySelector(".play-button");
//             const nextAudioSrc = nextSlide.getAttribute("data-audio");
//             nextSlide.classList.add("active");
//             nextPlayButton.innerHTML = "&#10074;&#10074;";
//             nextPlayButton.style.color = "white";
//             audioPlayer.src = nextAudioSrc;
//             audioPlayer.play();
//             currentPlaying = nextSlide;
//         });
//     });
// });





document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const audioPlayer = new Audio();
    let currentPlaying = null;
    let currentSlideIndex = -1;

    slides.forEach((slide, index) => {
        const playButton = slide.querySelector(".play-button");
        const audioSrc = slide.getAttribute("data-audio");

        playButton.addEventListener("click", function () {
            if (currentPlaying && currentPlaying !== slide) {
                currentPlaying.classList.remove("active");
                const currentPlayButton = currentPlaying.querySelector(".play-button");
                currentPlayButton.innerHTML = "&#9658;";
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            }

            if (slide.classList.contains("active")) {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    playButton.innerHTML = "&#10074;&#10074;";
                    playButton.style.color = "white";
                } else {
                    audioPlayer.pause();
                    playButton.innerHTML = "&#9658;";
                    playButton.style.color = "white";
                }
            } else {
                slide.classList.add("active");
                playButton.innerHTML = "&#10074;&#10074;";
                playButton.style.color = "white";
                audioPlayer.src = audioSrc;
                audioPlayer.play();
                currentPlaying = slide;
                currentSlideIndex = index;
            }
        });
    });

    audioPlayer.addEventListener("ended", function () {
        if (currentSlideIndex >= 0) {
            slides[currentSlideIndex].classList.remove("active");
            slides[currentSlideIndex].querySelector(".play-button").innerHTML = "&#9658;";
            slides[currentSlideIndex].querySelector(".play-button").style.color = "white";

            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            const nextSlide = slides[currentSlideIndex];
            const nextPlayButton = nextSlide.querySelector(".play-button");
            const nextAudioSrc = nextSlide.getAttribute("data-audio");

            nextSlide.classList.add("active");
            nextPlayButton.innerHTML = "&#10074;&#10074;";
            nextPlayButton.style.color = "white";
            audioPlayer.src = nextAudioSrc;
            audioPlayer.play();
            currentPlaying = nextSlide;
        }
    });
});
