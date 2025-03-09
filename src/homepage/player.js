const video = document.querySelector("#player");

const playVideo = () => {
    const player = video.querySelector("video");
    player.classList.add("playing");
    player.play();
    player.setAttribute("controls", "");
};

video.addEventListener("click", playVideo);
