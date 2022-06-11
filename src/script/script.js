const recupValues = document.querySelectorAll('.main__buttons-op')
const recupEnter = document.querySelector('.buttons-enter')
const recupScreen = document.querySelector('.main__op')
const recupHistory = document.querySelector('.main__history')


for(let recupValue of recupValues){

function clickButton(){

    let createOp = document.createTextNode(recupValue.value)
    let createHistory = document.createTextNode(recupValue.value)
    recupHistory.appendChild(createHistory)
    recupScreen.appendChild(createOp)
    let calculate = recupScreen.innerText
    
    if(recupValue.value === '='){

        let removeEgal = calculate.slice(0, -1)

        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)
    }else if(recupValue.value === 'AC'){
        recupScreen.innerHTML = ""
        recupHistory.innerHTML = ""
    }

}

recupValue.addEventListener('click', clickButton)

}

