const images = [];

for(let i = 0; i <= 10; i++) {
    images.push(`${String(i).padStart(3, 0)}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

function init() {
    const bgImage = document.createElement('img');
    bgImage.src = `img/${chosenImage}`;
    bgImage.classList.add('background-image');
    document.body.appendChild(bgImage);
}

init();