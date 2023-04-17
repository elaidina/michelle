document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'modrá + žlutá'
    },
    {
      name: '1',
      img: 'zelená'
    },
    {
      name: '2',
      img: 'bílá + červená'
    },
    {
      name: '2',
      img: 'růžová'
    },
    {
      name: '3',
      img: 'bílá + černá'
    },
    {
      name: '3',
      img: 'šedá'
    },
    {
      name: '4',
      img: 'červená + modrá'
    },
    {
      name: '4',
      img: 'fialová'
    },
    {
      name: '5',
      img: 'žlutá + zelená'
    },
    {
      name: '5',
      img: 'limetková'
    },
    {
      name: '6',
      img: 'zelená + modrá'
    },
    {
      name: '6',
      img: 'tyrkysová'
    },
    {
      name: '7',
      img: 'žlutá + červená'
    },
    {
      name: '7',
      img: 'oranžová'
    },
    {
      name: '8',
      img: 'oranžová + zelená'
    },
    {
      name: '8',
      img: 'hnedá'
    },
    {
      name: '9',
      img: 'oranžová + bílá'
    },
    {
      name: '9',
      img: 'tělová'
    },
    {
      name: '10',
      img: 'hnědá + červená'
    },
    {
      name: '10',
      img: 'bordó'
    },
    {
      name: '11',
      img: 'zelená + bílá'
    },
    {
      name: '11',
      img: 'pistáciová'
    },
    {
      name: '12',
      img: 'červená + růžová'
    },
    {
      name: '12',
      img: 'fuchsiová'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 7 completed!</h2><a href='https://elaidina.github.io/michelle/level8.html'> Continue to Level 8</a>";


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
