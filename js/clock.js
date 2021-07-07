const clock = document.querySelector('.clock');

function paintClock() {
    const date = new Date();
    const originalHours = date.getHours();
    const noonFlag = originalHours > 12 ? 'PM' : 'AM';
    const hours = String(noonFlag === 'PM' ? originalHours - 12 : originalHours).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    clock.innerText = `${noonFlag} ${hours}:${minutes}:${seconds}`;
}

function init() {
    paintClock();
    setInterval(paintClock, 1000);
}

init();