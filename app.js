document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray =  [
    {
      name: '1',
      img: 'kočka'
    },
    {
      name: '1',
      img: "kotě"
    },
    {
      name: '2',
      img: 'slepice'
    },
    {
      name: '2',
      img: "kuře"
    },
    {
      name: '3',
      img: 'kůň'
    },
    {
      name: '3',
      img: "hříbě"
    },
    {
      name: '4',
      img: 'kráva'
    },
    {
      name: '4',
      img: "tele"
    },
    {
      name: '5',
      img: 'ovce'
    },
    {
      name: '5',
      img: "jehně"
    },
    {
      name: '6',
      img: 'koza'
    },
    {
      name: '6',
      img: "kůzle"
    },
    {
      name: '7',
      img: 'husa'
    },
    {
      name: '7',
      img: "housátko"
    },
    {
      name: '8',
      img: 'kachna'
    },
    {
      name: '8',
      img: "kačátko"
    },
    {
      name: '9',
      img: 'krůta'
    },
    {
      name: '9',
      img: "krůtě"
    },
    {
      name: '10',
      img: "pes"
    },
    {
      name: '10',
      img: 'štěně'
    },
    {
      name: '11',
      img: 'prase'
    },
    {
      name: '11',
      img: "sele"
    },
    {
      name: '12',
      img: 'králík'
    },
    {
      name: '12',
      img: "králíče"
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 1 completed!</h2><a href="https://elaidina.github.io/michelle/level2.html"> Continue to Level 2</a>'


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
