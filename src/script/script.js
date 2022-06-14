const selectMain = document.querySelector('main')
let allButtonValues = ['Rad', 'Deg', 'x!', '(', ')', '%', 'AC', 'Inv', 'Sin', 'In', '7', '8','9', '/', 'π', 'cos', 'log', '4', '5', '6', '*', 'e', 'tan', '√', '1', '2', '3', '-', 'Ans', 'EXP', 'Xy', '0', '.', '=', '+']
const selectInputs = document.querySelectorAll('.main__buttons-op')


for(let i = 0; i < 4; i++){
let createScreen = document.createElement('div')
selectMain.appendChild(createScreen)
}

const selectDiv = document.querySelectorAll('div')
selectDiv[0].setAttribute('class', 'main__screen')
selectDiv[1].setAttribute('class', 'main__history')
selectDiv[2].setAttribute('class', 'main__op')
selectDiv[3].setAttribute('class', 'main__buttons')

selectDiv[0].appendChild(selectDiv[1])
selectDiv[0].appendChild(selectDiv[2])

for(let i = 0; i < allButtonValues.length; i++){
    let createButton = document.createElement('input')
    createButton.setAttribute('type', 'button')

    if(allButtonValues[i] == '0' || allButtonValues[i] == '1' || allButtonValues[i] == '2' || allButtonValues[i] == '3' || allButtonValues[i] == '4' || allButtonValues[i] == '5' || allButtonValues[i] == '6' || allButtonValues[i] == '7' || allButtonValues[i] == '8' || allButtonValues[i] == '9' || allButtonValues[i] == '.'){
        createButton.setAttribute('class', 'main__buttons-op buttons-nb')
    }else if (allButtonValues[i] == '='){
        createButton.setAttribute('class', 'main__buttons-op buttons-enter')
    }else{
        createButton.setAttribute('class', 'main__buttons-op')
    }

    createButton.setAttribute('value', allButtonValues[i])

    selectDiv[3].appendChild(createButton)

    }

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
    const pi = Math.PI
    
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
    }else if (recupValue.value === 'cos'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.cos(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'Deg'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = removeEgal * (180 / pi)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'Rad'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = removeEgal * ( pi / 180)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'x!'){

        function sFact(num)
        {
            let rval=1;
            for (let i = 2; i <= num; i++)
                rval = rval * i;
            return rval;
        }


        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = sFact(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'Sin'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.sin(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'tan'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.tan(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'π'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = pi * (removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'e'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.E * (removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === '√'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.sqrt(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'In'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.log(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'log'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.LOG10E*(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'EXP'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.exp(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }else if (recupValue.value === 'Xy'){

        let removeEgal = calculate.slice(0, -1)
        removeEgal = parseFloat(removeEgal)
        removeEgal = Math.pow(removeEgal)
        function computeResult(str){
            return Function('return ' + str)()
          }
        
        let result = computeResult(removeEgal)
        let createResult = document.createTextNode(result)
        recupScreen.innerHTML = ""
        recupScreen.appendChild(createResult)

    }
    

}

recupValue.addEventListener('click', clickButton)

}

