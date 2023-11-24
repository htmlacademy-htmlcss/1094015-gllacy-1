const modalOpenButton = document.querySelector('.button-form');
const modalCloseButton = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-windows');

if (modal && modalOpenButton) {
  modalOpenButton.addEventListener('click', () => {
    modal.classList.remove('modal-off');
  });
}

if (modal && modalCloseButton) {
  modalCloseButton.addEventListener('click', () => {
    modal.classList.add('modal-off');
  });
}
