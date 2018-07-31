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
  $('.card').each(function(idx, element) {
    element.id = idx;
  });
}

// this function runs when the page loads
$(function() {
  shuffle();
  giveIdsToCards();

  // an event listener
  $('.container').on('click', function(event) {
    let clicked = $(event.target);
    if (clicked.attr('class') !== 'card') {
      // if you didn't click on a card, get out of this function
      return;
    }
    let totalClicks = 0;
    //add up the clicks
    // select the p tag and set the innerText
    let clickedId = clicked.attr('id');
    clicked.css('backgroundImage', `url(${gifArray[clickedId]})`);
    totalClicks++;
    $('p').text = totalClicks;

    //if the images are the same , match, cards stay flipped up
    //if not stay for 1 second and turn back over
    //only have click on two cards at a time.
  });
});
