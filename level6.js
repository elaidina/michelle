document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Cipísek'
    },
    {
      name: '1',
      img: "Václav Čtvrtek"
    },
    {
      name: '2',
      img: 'Božena Němcová'
    },
    {
      name: '2',
      img: "Babička"
    },
    {
      name: '3',
      img: 'Mach a Šebestová'
    },
    {
      name: '3',
      img: 'Adolf Born'
    },
    {
      name: '4',
      img: 'Karel Čapek'
    },
    {
      name: '4',
      img: 'Dášenka'
    },
    {
      name: '5',
      img: 'Slabikář'
    },
    {
      name: '5',
      img: "Helena Zmatlíková"
    },
    {
      name: '6',
      img: 'Malá čarodejnice'
    },
    {
      name: '6',
      img: 'Zdeněk Smetana'
    },
    {
      name: '7',
      img: 'O chytré kmotře lišce'
    },
    {
      name: '7',
      img: 'Jozef Lada'
    },
    {
      name: '8',
      img: 'Krteček'
    },
    {
      name: '8',
      img: 'Zdeněk Miller'
    },
    {
      name: '9',
      img: 'Romeo a Julie'
    },
    {
      name: '9',
      img: 'Wiliam Shakespeare'
    },
    {
      name: '10',
      img: 'Harry Potter'
    },
    {
      name: '10',
      img: 'J.K. Rowlingová'
    },
    {
      name: '11',
      img: 'Astrid Lindgrenová'
    },
    {
      name: '11',
      img: 'Pipi, dlouhá punčocha'
    },
    {
      name: '12',
      img: 'Lucy Maud Montgomeryová'
    },
    {
      name: '12',
      img: "Anna ze Zeleného domu"
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

cards[optionOneId].parentElement.classList.remove("green")
      

      

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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 6 completed!</h2><a href='https://elaidina.github.io/michelle/level7.html'> Continue to Level 7</a>";


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
