let gifArray = [
  'https://media3.giphy.com/media/t6wDh943iDjhHVtBMz/200w.webp',
  'https://media0.giphy.com/media/l49K0pPIf3YYv5yMg/200.webp',
  'https://media2.giphy.com/media/RK6Ga7IuUmPcPTkYs1/200w.webp',
  'https://media1.giphy.com/media/WNltuMDL7Nv2LeCtnc/200w.webp',
  'https://media2.giphy.com/media/18Qwa1YNmsllU2vpPl/200w.webp',
  'https://media1.giphy.com/media/8Pmh8rTmPhKsTVH4oM/200w.webp',
  'https://media3.giphy.com/media/t6wDh943iDjhHVtBMz/200w.webp',
  'https://media0.giphy.com/media/l49K0pPIf3YYv5yMg/200.webp',
  'https://media2.giphy.com/media/RK6Ga7IuUmPcPTkYs1/200w.webp',
  'https://media1.giphy.com/media/WNltuMDL7Nv2LeCtnc/200w.webp',
  'https://media2.giphy.com/media/18Qwa1YNmsllU2vpPl/200w.webp',
  'https://media1.giphy.com/media/8Pmh8rTmPhKsTVH4oM/200w.webp'
];

let totalClicks = 0;
let firstCard = '';
let firstId;
let cardsOpen = 0;
let waiting = false;

function shuffle() {
  let current = gifArray.length - 1;
  while (current >= 0) {
    let randomIdx = Math.floor(Math.random() * gifArray.length);
    [gifArray[current], gifArray[randomIdx]] = [
      gifArray[randomIdx],
      gifArray[current]
    ];
    current--;
  }
}

function giveIdsToCards() {
  // give every card an ID
  $('.card').each(function(idx, card) {
    card.id = idx;
  });
}

// How do you know if and when to use the $?

// this function runs when the page loads
$(function() {
  shuffle();
  giveIdsToCards();

  // an event listener
  $('.container').on('click', function(event) {
    let clicked = $(event.target);

    //add up the clicks
    let clickedId = clicked.attr('id');

    if (clicked.attr('class') !== 'card' || clickedId === firstId || waiting) {
      // || //how come I dont have to $('.card')
      //cardsOpen === 2
      return;

      // ||
      // clicked.attr('class') !== clicked.css('backgroundColor')
      //why put card in '' and why arent we returning from other funtions, whereare the cb being called
      // if you didn't click on a card, get out of this function
    }

    clicked.css('backgroundImage', `url(${gifArray[clickedId]})`);
    totalClicks++;
    //cardsOpen++;
    $('#clicks').text(`${totalClicks}`);

    if (!firstCard) {
      firstCard = clicked;
      firstId = clickedId;
    } else {
      waiting = true;
      setTimeout(function() {
        if (
          firstCard.css('backgroundImage') === clicked.css('backgroundImage') // firstCard is not a fn?
        ) {
          cardsOpen += 2;

          $('#open').text(`${cardsOpen}`);
        } else {
          firstCard.css('backgroundImage', '');
          clicked.css('backgroundImage', '');
        }
        firstCard = '';
        firstId = null;
        waiting = false;
        // cardsOpen = 0;
      }, 500);
    }

    $('#startButton').on('click', function() {
      location.reload();
    });
  });
});
