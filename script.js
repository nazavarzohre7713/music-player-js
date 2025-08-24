"use strict";
class Canvas {
    constructor(parent) {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
    }
}
class SVG {
    constructor(parent) {
        this.SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.SVG.setAttribute("viewBox", "0 0 1600 900");
        this.SVG.setAttribute("preserveAspectRatio", "xMidYMid slice");
        this.Base = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.SVG.appendChild(this.Base);
        parent.appendChild(this.SVG);
    }
    clear() {
        while (this.Base.firstChild) {
            this.Base.removeChild(this.Base.firstChild);
        }
    }
}
class Color {
    median() {
        return ((this.R + this.G + this.B) / 3) | 0;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const NS = "http://www.w3.org/2000/svg";
    let sw = new SVG(document.querySelector("#faux-bg"));
    let cw = new Canvas(document.body);
    let imageEl = new Image();
    imageEl.src = "data:image/png;base64,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";
    imageEl.onload = function () {
        cw.context.drawImage(imageEl, 0, 0, imageEl.width, imageEl.height);
        let iData = cw.context.getImageData(0, 0, imageEl.width, imageEl.height);
        let pixel = new Color();
        let colorRGBA;
        for (let row = 0; row < iData.height; row++) {
            for (let col = 0; col < iData.width; col++) {
                let index = (row * iData.width + col) * 4;
                pixel.R = iData.data[index];
                pixel.G = iData.data[index + 1];
                pixel.B = iData.data[index + 2];
                pixel.A = iData.data[index + 3];
                colorRGBA = `RGBA(${pixel.R}, ${pixel.G}, ${pixel.B}, 1)`;
                if (row % 2) {
                    if (col % 2) {
                        sw.Base.appendChild(triangleU((col * 10 + 5), (row * 10 + 5), 5.4, colorRGBA));
                    }
                    else {
                        sw.Base.appendChild(triangleD((col * 10 + 5), (row * 10 + 5), 5.4, colorRGBA));
                    }
                }
                else {
                    if (col % 2) {
                        sw.Base.appendChild(triangleD((col * 10 + 5), (row * 10 + 5), 5.4, colorRGBA));
                    }
                    else {
                        sw.Base.appendChild(triangleU((col * 10 + 5), (row * 10 + 5), 5.4, colorRGBA));
                    }
                }
            }
        }
    };
    let triangleU = (x, y, r, m) => {
        let polygon = document.createElementNS(NS, "polygon");
        let points = `${x}, ${(y - r).toFixed(2)} ${(x - r * 2).toFixed(2)}, ${(y + r).toFixed(2)} ${(x + r * 2).toFixed(2)}, ${(y + r).toFixed(2)}`;
        polygon.setAttribute("points", points);
        polygon.setAttribute("fill", m);
        return polygon;
    };
    let triangleD = (x, y, r, m) => {
        let polygon = document.createElementNS(NS, "polygon");
        let points = `${x}, ${(y + r).toFixed(2)} ${(x - r * 2).toFixed(2)}, ${(y - r).toFixed(2)} ${(x + r * 2).toFixed(2)}, ${(y - r).toFixed(2)}`;
        polygon.setAttribute("points", points);
        polygon.setAttribute("fill", m);
        return polygon;
    };
});



// *************
//start
window.addEventListener("load", () => {
    const add = document.getElementById("add");
    const fileInput = document.getElementById("fileInput");
    const playlist = document.querySelector(".playlist");
    const playbtn = document.getElementById("play");
    const nextbtn = document.getElementById("next");
    const prevbtn = document.getElementById("prev");
    const fileAudio = document.getElementById("audio");
    const coverImg = document.getElementById("cover");
    const progressContainer = document.getElementById("progress-container");
    const progress = document.getElementById("progress");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");

    let files = [];
    let currentIndex = 1;

    add.addEventListener("click", () => {
        const file = fileInput.files[0];
        if (!file) return alert("Please select a file!");

        const url = URL.createObjectURL(file);
        files.push({ file, url });
        currentIndex = files.length - 1;

        const li = document.createElement("li");
        li.classList.add("lilist");
        li.textContent = file.name;
        li.dataset.index = currentIndex;
        playlist.appendChild(li);
        fileInput.value = "";

        li.addEventListener("click", () => {
            currentIndex = parseInt(li.dataset.index);
            play();
        });

        play();
    });

    function loadCover(file) {
        if (!window.jsmediatags) {
            coverImg.src = "img/1.avif";
            return;
        }

        window.jsmediatags.read(file, {
            onSuccess: function (tag) {
                const picture = tag.tags.picture;
                if (picture) {
                    const byteArray = new Uint8Array(picture.data);
                    const blob = new Blob([byteArray], { type: picture.format });
                    coverImg.src = URL.createObjectURL(blob);
                } else {
                    coverImg.src = "img/1.avif";
                }
            },
            onError: function (error) {
                console.log(error);
                coverImg.src = "img/1.avif";
            }
        });
    }

    function play() {
        if (currentIndex < 0 || !files[currentIndex]) return;

        fileAudio.src = files[currentIndex].url;
        fileAudio.play();
        playbtn.querySelector("i.fas").classList.remove("fa-play");
        playbtn.querySelector("i.fas").classList.add("fa-pause");

        document.querySelectorAll(".lilist").forEach(li => li.classList.remove("active"));
        const activeLi = document.querySelector(`.lilist[data-index='${currentIndex}']`);
        if (activeLi) activeLi.classList.add("active");

        loadCover(files[currentIndex].file);
    }

    function pause() {
        fileAudio.pause();
        playbtn.querySelector("i.fas").classList.add("fa-play");
        playbtn.querySelector("i.fas").classList.remove("fa-pause");
    }

    function next() {
        if (files.length === 0) return;
        currentIndex++;
        if (currentIndex >= files.length) currentIndex = 0;
        play();
    }

    function prev() {
        if (files.length === 0) return;
        currentIndex--;
        if (currentIndex < 0) currentIndex = files.length - 1;
        play();
    }

    playbtn.addEventListener("click", () => fileAudio.paused ? play() : pause());
    nextbtn.addEventListener("click", next);
    prevbtn.addEventListener("click", prev);

    fileAudio.addEventListener("timeupdate", () => {
        const { currentTime, duration } = fileAudio;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    });

    progressContainer.addEventListener("click", (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = fileAudio.duration;
        fileAudio.currentTime = (clickX / width) * duration;
    });

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
});
