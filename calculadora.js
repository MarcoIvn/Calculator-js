
let screenEl = document.getElementById("screen")
let num1 = ""
let num2 = ""
let opValue = ""
let resultNum = 0
let num1Pressed = false
let num2Pressed = false
let opPressed = false
let resultPressed = false
let minusPressed = false
let sqrtPressed = false
let powPressed = false

function reset(){
  screenEl.textContent = ""
  num1 = ""
  num2 = ""
  opValue = ""
  resultNum = 0
  opPressed = false
  resultPressed = false
  minusPressed = false
  num1Pressed = false
  num2Pressed = false
  sqrtPressed = false
  powPressed = false
}

function setNum(numbtn){
  if(resultPressed == false){
    if(opPressed == false){
      let numEl = document.getElementById(numbtn)
      let numPressed = numEl.textContent
      screenEl.textContent += numPressed
      num1 += numPressed
      num1Pressed = true
    }else{
      let numEl = document.getElementById(numbtn)
      let numPressed = numEl.textContent
      screenEl.textContent += numPressed
      num2 += numPressed
      num2Pressed = true
    }
  }else if(opPressed == true){
    let numEl = document.getElementById(numbtn)
    let numPressed = numEl.textContent
    screenEl.textContent += numPressed
    num2 += numPressed
    num2Pressed = true
  }
}   

function setOperation(opbtn){
  let opEl = document.getElementById(opbtn)

  if(opPressed == false && opEl.textContent == "-" && minusPressed == false &&num1Pressed == false){
    screenEl.textContent += "-"
    num1 = "-"
    minusPressed = true
  }else if(opPressed == true && opEl.textContent == "-" && minusPressed == false){
    screenEl.textContent += "-"
    num2 = "-"
    minusPressed = true
  }else if(opPressed == "true" && (opbtn == "opPow" || opbtn == "opSqrt")){
    if(opbtn == "opPow"){
      screenEl.textContent = "test"
    }else if(opbtn == "opSqrt"){
      screenEl.textContent = "test"
    }
  }else if(opPressed == false){
    if(opbtn == "opPow"){
      screenEl.textContent = "test"
      opPressed = true
    }else if(opbtn == "opSqrt"){
      screenEl.textContent = "test"
      opPressed = true
    }else{
      opValue = opEl.textContent
      screenEl.textContent += " " + opValue + " "
      opPressed = true
      minusPressed = false
    }
  }
}

function sum(x,y){
  return x+y
}

function subs(x,y){
  return x-y
}

function mpy(x,y){
  return x*y
}

function div(x,y){
  return x/y
}


function result(){
  if(opPressed == true){
    if(opValue == "+"){
      resultNum = sum(+num1,+num2)
      screenEl.textContent = " = " + resultNum
    }else if(opValue == "-"){
      resultNum = subs(+num1,+num2)
      screenEl.textContent = " = " + resultNum
    }else if(opValue == "*"){
      resultNum = mpy(+num1,+num2)
      screenEl.textContent = " = " + resultNum
    }else{
      resultNum = div(+num1,+num2)
      screenEl.textContent = " = " + resultNum
    }
    minusPressed = true
    resultPressed = true
    opPressed = false
    num1 = resultNum
    num2 = ""
    num1Pressed = false
    num2Pressed = false
  }
}





