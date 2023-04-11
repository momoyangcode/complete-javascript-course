'use strict';

//Select Elements
const showModalBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');

//Function-- open hidden modal
const openModal = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

//Function-- close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

//Open Modal-- click show modal button
for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', openModal);
}

//Close Modal--Three Ways

//click ✖️ button to close modal
closeModalBtn.addEventListener('click', closeModal);

//click overlay part to close modal
overLay.addEventListener('click', closeModal);

//press esc to close modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
