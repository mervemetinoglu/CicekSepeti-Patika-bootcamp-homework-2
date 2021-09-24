import Dog from './Dog';
import Duck from './Duck';

const dogImgSrc = 'https://source.unsplash.com/collection/2109136/500x700?sig=';
const duckImgSrc = 'https://source.unsplash.com/collection/4502239/500x700?sig=';

// creating instances from Dog and Duck classes
const animalsList = [
  new Dog('Oliver', dogImgSrc, 6),
  new Dog('Blue', dogImgSrc, 4),
  new Dog('Ace', dogImgSrc, 2),
  new Dog('Buddy', dogImgSrc, 1),
  new Dog('Archie', dogImgSrc, 2),
  new Dog('Leo', dogImgSrc, 3),
  new Duck('Waddles', duckImgSrc, 1),
  new Duck('Grey', duckImgSrc, 1.5),
  new Duck('Rocky', duckImgSrc, 2),
  new Duck('Daisy', duckImgSrc, 2),
  new Duck('Puddle', duckImgSrc, 1),
  new Duck('Daffy', duckImgSrc, 3),
];

// creating and displaying grid layout with animals instances into the html
function displayCards() {
  const containerDOM = document.querySelector('.container');
  const gridDOM = document.querySelector('.grid');

  const htmlStringCard = animalsList
  .map((item, index) => {
      let random = Math.random();
      random += index;

      return `<div class="grid__item">
                <div class="grid__item-img">
                    <img src="${item.image + random}"/>
                </div>
                <div class="grid__item-body">
                    <h2>${item.name}</h2>
                    <p>Age: ${item.age}</p>
                    <p>Number of legs: ${item.numberOfLegs}</p>
                </div>
              </div>`;
    }).join('');

  gridDOM.innerHTML = htmlStringCard;
  containerDOM.appendChild(gridDOM);
}

export default displayCards;
