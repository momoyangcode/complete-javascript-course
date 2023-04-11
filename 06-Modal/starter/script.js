'use strict';

const showModal = document.querySelectorAll('.show-modal');

const modal = document.querySelector('.modal');

const btnCloseModal = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// console.log(showModal);
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
