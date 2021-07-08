const noteOpenBtn = document.querySelector("footer .sticky-note-button");
const note = document.querySelector("footer .sticky-note");
const noteCloseBtn = document.querySelector("footer .sticky-note .note-header .note-close-button");

function handleCloseBtnClick() {
    note.classList.add(HIDDEN);
    noteOpenBtn.classList.remove(HIDDEN), 500;
}

function handleOpenBtnClick() {
    noteOpenBtn.classList.add(HIDDEN);
    note.classList.remove(HIDDEN), 1000;
}

function init() {
    noteOpenBtn.addEventListener('click', handleOpenBtnClick);
    noteCloseBtn.addEventListener('click', handleCloseBtnClick);
}

init();