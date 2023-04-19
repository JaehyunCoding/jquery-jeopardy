let gameBoard = document.querySelectorAll(`.parent .grid-item`)
let grid100 = document.querySelectorAll(`.parent #grid100`)
let grid200 = document.querySelectorAll(`.parent #grid200`)
let grid300 = document.querySelectorAll(`.parent #grid300`)
let grid400 = document.querySelectorAll(`.parent #grid400`)
let grid500 = document.querySelectorAll(`.parent #grid500`)

let questionBox = document.querySelector(`#question-box`)
let userInput = document.querySelector(`#text-input`)
let sub = document.querySelector(`#submit-button`)
let score = document.querySelector(`#score`)

let total = []
let numTrack = []
let price = []
let currentQuestion = {}
let globalVar = ``

gameBoard.forEach((i) => {

    if (i.style.background !== `#fda403`) {
        i.addEventListener(`mouseenter`, () => {
            if (i.style.backgroundColor === ``) {
                i.style.backgroundColor = `lightblue`
            }
        })
        i.addEventListener(`mouseout`, () => {
            if(i.style.backgroundColor === `lightblue`) {
                i.style.backgroundColor = ``
            }
        })
    }
})

grid100.forEach((i) => {
    i.addEventListener(`click`, () => {
        globalVar = i
        readJeopardyData(`$100`)
        randomNum()
        priceNum(100)
    })
})

grid200.forEach((i) => {
    i.addEventListener(`click`, () => {
        globalVar = i
        readJeopardyData(`$200`)
        randomNum()
        priceNum(200)
    })
})

grid300.forEach((i) => {
    i.addEventListener(`click`, () => {
        globalVar = i
        readJeopardyData(`$300`)
        randomNum()
        priceNum(300)
    })
})

grid400.forEach((i) => {
    i.addEventListener(`click`, () => {
        globalVar = i
        readJeopardyData(`$400`)
        randomNum()
        priceNum(400)
    })
})

grid500.forEach((i) => {
    i.addEventListener(`click`, () => {
        globalVar = i
        readJeopardyData(`$500`)
        randomNum()
        priceNum(500)
    })
})

let one = () => {}

sub.addEventListener(`click`, (event) => {
    event.preventDefault()

    if (userInput.value === currentQuestion.answer) {
        total.push(price[0])
        let sum = total.reduce((total, num) => {
            return total + num
        })
        score.innerText = `Your Score: $${sum}`
        questionBox.innerText = `Question`
        userInput.value = ``
        globalVar.style.backgroundColor = `#fda403`
    }   else {
        questionBox.innerText = `Wrong Answer.`
        userInput.value = ``
    }
})

let readJeopardyData = async(num) => {

    let rawJeopardyData = await fetch(`jeopardy.json`)
    let data = await rawJeopardyData.json()
    let groupedData = _.groupBy(data, `value`)

    currentQuestion = groupedData[num][numTrack[0]]
    questionBox.innerText = groupedData[num][numTrack[0]].question
}

let randomNum = () => {
    if (numTrack.length === 0){
        numTrack.push(Math.floor(Math.random()*5))
    }   else if (price.length === 1) {
        price.pop()
        numTrack.push(Math.floor(Math.random()*5))
    }
}

let priceNum = (num) => {
    if (price.length === 0) {
        price.push(num)
    }   else if (price.length === 1) {
        price.pop()
        price.push(num)
    }
}

let colorback = () => {
    globalVar.style.backgroundColor = `blue`
}

// readJeopardyData()


//이미 주어진 함수

/*
let readJeopardyData = async() => {

    let rawJeopardyData = await fetch(`jeopardy.json`)
    let data = await rawJeopardyData.json()
    
    //_groupBy(array, waht to group our data by)
    let groupedData = _.groupBy(data, `value`)
    console.log(groupedData)
    console.log(groupedData[`$1,000`])
}

readJeopardyData()
*/

