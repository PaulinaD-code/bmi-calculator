const form = document.querySelector('.container-calculator')
const userHeight = document.querySelector('.container-calculator #user-height')
const userWeight = document.querySelector('.container-calculator #user-weight')
const button = document.querySelector('.container-calculator .bmi-btn')
const diagnosis = document.querySelector('.container-calculator .user-diagnosis')

button.addEventListener('click', calculatorBMI)

function calculatorBMI(){
    const height = userHeight.value / 100
    const weight = userWeight.value
    const hSquare = height * height
    let BMI = (weight / hSquare).toFixed(2)
    let result
   

    if(BMI < 0) {
        result = ` ,że podano nieprawidłowe dane`
    } else if(BMI > 1 && BMI < 16){
        result = 'wygłodzenie'
    } else if( BMI > 16 && BMI <= 16.99 ){
        result = 'wychudzenie'
    } else if( BMI  >= 17 && BMI <= 18.49 ){
        result = 'niedowagę'
    } else if( BMI >= 18.50 && BMI <= 24.99 ){
        result = 'optymalną wagę'
    } else if( BMI >= 25 && BMI <= 29.99){
        result = 'nadwagę'
    } else if( BMI >= 30 && BMI <= 34.99){
        result = 'otyłość I stopnia'
    } else if( BMI >= 35 && BMI <= 39.99) {
        result = 'otyłość II stopnia'
    } else if (BMI > 40){
        result = 'otyłość III stopnia'
    } else {
        result = ',że podano nieprawidłowe dane'
    }

    if(!userHeight.value || !userWeight.value){
        diagnosis.textContent = 'Dane muszą byc wyrażone w liczbach';
    } else {
        diagnosis.textContent = `Twoje BMI wynosi ${BMI}, co oznacza ${result}`
    }
    

    userHeight.value = " "
    userWeight.value = " "
/*
    diagnosis.textContent = `Twoje BMI wynosi ${BMI}, co oznacza ${result}`
    */
    
    container-calculator.append(diagnosis)
}

function keyEventCheck(event){
    if(event.key === 'Enter'){
        calculatorBMI()
    }
}


/*button.addEventListener('click', () => {
    const height = userHeight.value / 100
    const weight = userWeight.value
    BMI = weight / (height * height)
    const result = ''
    
    if(BMI < 16){
        result = 'wygłodzenie'
    } else if( BMI <= 16.99 ){
        result = 'wychudzenie'
    } else if( BMI <= 18.49 ){
        result = 'niedowagę'
    } else if( BMI <=  24.99 ){
        result = 'optymalną wagę'
    } else if( BMI <= 29.99){
        result = 'nadwagę'
    } else if( BMI <= 34.99){
        result = 'otyłość I stopnia'
    } else if( BMI <= 39.99) {
        result = 'otyłość II stopnia'
    } else {
        result = 'otyłość III stopnia'
    }

    diagnosis.textContent = `Twoje BMI wynosi${BMI}, co oznacza ${result}`

})*/







