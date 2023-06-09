document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'dcera'
    },
    {
      name: '1',
      img: "moje díťe"
    },
    {
      name: '2',
      img: 'sestřenice'
    },
    {
      name: '2',
      img: "dcera mé tety"
    },
    {
      name: '3',
      img: 'tchýně'
    },
    {
      name: '3',
      img: "manželova máma"
    },
    {
      name: '4',
      img: 'snacha'
    },
    {
      name: '4',
      img: 'nevěsta mého syna'
    },
    {
      name: '5',
      img: 'zeť'
    },
    {
      name: '5',
      img: 'manžel mojí dcery'
    },
    {
      name: '6',
      img: 'švagrová'
    },
    {
      name: '6',
      img: 'manželka mého bratra'
    },
    {
      name: '7',
      img: 'teta'
    },
    {
      name: '7',
      img: 'sestra mojí mámy'
    },
    {
      name: '8',
      img: 'babička'
    },
    {
      name: '8',
      img: 'máma mojí mámy'
    },
    {
      name: '9',
      img: 'vnuk'
    },
    {
      name: '9',
      img: 'syn mojí dcery'
    },
    {
      name: '10',
      img: "neteř"
    },
    {
      name: '10',
      img: 'dcera mé sestry'
    },
    {
      name: '11',
      img: "synovec"
    },
    {
      name: '11',
      img: 'syn mého bratra'
    },
    {
      name: '12',
      img: 'pradědeček'
    },
    {
      name: '12',
      img: 'táta mého dědy'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 9 completed!</h2><a href="https://elaidina.github.io/michelle/level10.html"> Continue to Level 10</a>'


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
