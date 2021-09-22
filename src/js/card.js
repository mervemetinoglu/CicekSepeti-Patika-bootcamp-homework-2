import Dog from './Dog';
import Duck from './Duck';

// creating instances from Dog and Duck classes
const animalsList = [
  new Dog('Oliver', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 6),
  new Dog('Blue', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 4),
  new Dog('Ace', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 2),
  new Dog('Buddy', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 1),
  new Dog('Archie', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 2),
  new Dog('Leo', 'https://source.unsplash.com/collection/2109136/500x700?sig=', 4, 3),
  new Duck('Waddles', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 1),
  new Duck('Grey', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 1.5),
  new Duck('Rocky', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 2),
  new Duck('Daisy', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 2),
  new Duck('Puddle', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 1),
  new Duck('Daffy', 'https://source.unsplash.com/collection/4502239/500x700?sig=', 2, 3),
];

// creating and displaying grid layout with animals instances into the html
function displayCards() {
  const containerDOM = document.querySelector('.container');
  const gridDOM = document.querySelector('.grid');

  const htmlStringCard = animalsList
    .map((item, index) => {
      let random = Math.random();
      random += index;

      return `
          <div class="grid__item">
              <div class="grid__item-img">
                  <img
                  src="${item.image + random}
                  "/>
              </div>
              <div class="grid__item-body">
                  <h2>${item.name}</h2>
                  <p>Age: ${item.age}</p>
              </div>
        </div>
  `;
    })
    .join('');

  gridDOM.innerHTML = htmlStringCard;
  containerDOM.appendChild(gridDOM);
}

export default displayCards;
