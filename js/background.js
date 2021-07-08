const images = [];

for(let i = 0; i <= 14; i++) {
    images.push(`${i}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

function init() {
    const bgImage = document.createElement('img');
    bgImage.src = `img/${chosenImage}`;
    bgImage.classList.add('background-image');
    console.log(bgImage);
    document.body.appendChild(bgImage);
}

init();