const cardContacts = document.querySelector(".card__contacts");
const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector('.card__image');
const cardFrom = document.querySelector('.card__from');
const cardTo = document.querySelector('.card__to');
const cardMessage = document.querySelector('.card__message');

const rearrangeElement = () =>  {
    const screenWith = window.innerWidth;

    if (screenWith <= 580){
        card.after(cardContacts);
    } else {
        cardTitle.after(cardContacts);
    }
}

const init =() => {
    window.addEventListener("resize", rearrangeElement);
}

init();
