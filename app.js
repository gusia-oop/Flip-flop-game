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

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId.name])
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].name)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  function createBoard() {
  for(let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipcard)
    grid.appendChild(card)
    }
  }

  createBoard()
})