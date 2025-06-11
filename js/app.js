const formElement = document.getElementById('form-preventivo')
console.log(formElement)
const selezioneLavoro = formElement.querySelector('#lavoro')
const inputCodice = formElement.querySelector('#codicepromozionale')
console.log(selezioneLavoro, inputCodice)

const codiciPromozionaliValidi = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

formElement.addEventListener('submit' , function(event){
    event.preventDefault()
    
    const lavoro = selezioneLavoro.value

    const codicePromozionale = inputCodice.value

    console.log(lavoro, codicePromozionale)

    const ore = 10

    let prezzoOrario


    if (lavoro == 1){
        prezzoOrario = 20.50
    }
    else if (lavoro == 2){
        prezzoOrario = 15.30
    }
    else if (lavoro== 3){
        prezzoOrario = 33.60
    }
    else{
        console.error('selezione non valida')
        return
    }

    const prezzo = ore * prezzoOrario
    
    let sconto

    if(codiciPromozionaliValidi.includes(codicePromozionale)){
        sconto = (prezzo * 25) / 100
    }
    else {
        sconto = 0 
        alert ('CODICE PROMOZIONALE NON VALIDO, IL PREZZO VIENE CALCOLATO SENZA SCONTO')
    }

    const prezzoFinale = (prezzo - sconto).toFixed + '&euro'
})