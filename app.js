document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'cat',
      img: 'images/cat.png'
    },
    {
      name: 'ghost',
      img: 'images/ghost.png'
    },
    {
      name: 'hamster',
      img: 'images/hamster.png'
    },
    {
      name: 'ironman',
      img: 'images/ironman.png'
    },
    {
      name: 'rainbow',
      img: 'images/rainbow.png'
    },
    {
      name: 'minion',
      img: 'images/minion.png'
    }
  ]

  const grid = document.querySelector('.grid')
  var cardsChosen = []
  var cardsChosenId = []

  function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId.name])
    cardsChosenId.push(cardId)
    
  }

  function createBoard() {
  for(let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    //card.addEventListener('click', flipcard)
    grid.appendChild(card)
    }
  }

  createBoard()
})