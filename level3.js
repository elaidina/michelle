 document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'pošta'
    },
    {
      name: '1',
      img: "dopis"
    },
    {
      name: '2',
      img: 'banka'
    },
    {
      name: '2',
      img: "peníze"
    },
    {
      name: '3',
      img: 'knihovna'
    },
    {
      name: '3',
      img: "encyklopedie"
    },
    {
      name: '4',
      img: 'potraviny'
    },
    {
      name: '4',
      img: "máslo"
    },
    {
      name: '5',
      img: 'radnice'
    },
    {
      name: '5',
      img: "úředníci"
    },
    {
      name: '6',
      img: 'ZOO'
    },
    {
      name: '6',
      img: "medvěd"
    },
    {
      name: '7',
      img: 'čerpací stanice'
    },
    {
      name: '7',
      img: 'benzín'
    },
    {
      name: '8',
      img: 'kostel'
    },
    {
      name: '8',
      img: "modlitba"
    },
    {
      name: '9',
      img: 'hřbitov'
    },
    {
      name: '9',
      img: 'pohřeb'
    },
    {
      name: '10',
      img: 'restaurace'
    },
    {
      name: '10',
      img: 'menu'
    },
    {
      name: '11',
      img: 'park'
    },
    {
      name: '11',
      img: "fontána"
    },
    {
      name: '12',
      img: 'kino'
    },
    {
      name: '12',
      img: "film"
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 3 completed!</h2><a href="https://elaidina.github.io/michelle/level4.html"> Continue to Level 4</a>';


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
