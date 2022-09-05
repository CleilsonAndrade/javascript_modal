const openModalButton = document.querySelector('#open-modal')
const closeModalButton = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

const toggleModal = () => {
  [modal, fade].forEach((element) => {
    element.classList.toggle('hide')
  })
}

[openModalButton, closeModalButton, fade].forEach(element => {
  element.addEventListener('click', () => {
    toggleModal()
  })
});