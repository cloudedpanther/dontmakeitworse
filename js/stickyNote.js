const noteOpenBtn = document.querySelector("footer .sticky-note-button");
const note = document.querySelector("footer .sticky-note");
const noteCloseBtn = document.querySelector("footer .sticky-note .note-header .note-close-button");
const realNote = note.querySelector('textarea');

const NOTES_KEY = 'notes';
const BTN_APPEAR = 'magic-appear';

function handleCloseBtnClick() {
    note.classList.add(HIDDEN);
    noteOpenBtn.classList.remove(HIDDEN);
    noteOpenBtn.classList.add(BTN_APPEAR);
    setTimeout(() => {
        noteOpenBtn.classList.remove(BTN_APPEAR);
    }, 500);
}

function handleOpenBtnClick() {
    noteOpenBtn.classList.add(HIDDEN);
    note.classList.remove(HIDDEN);
    note.classList.add(BTN_APPEAR);
    setTimeout(() => {
        note.classList.remove(BTN_APPEAR);
    }, 500);
}

function loadNotes() {
    const loadedNotes = localStorage.getItem(NOTES_KEY);
    realNote.value = loadedNotes;
}

function handleNoteInput() {
    const notes = realNote.value;
    localStorage.setItem(NOTES_KEY, notes);
}

function init() {
    noteOpenBtn.addEventListener('click', handleOpenBtnClick);
    noteCloseBtn.addEventListener('click', handleCloseBtnClick);
    loadNotes();
    realNote.addEventListener('input', handleNoteInput);
}

init();