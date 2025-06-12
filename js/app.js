const formElement = document.getElementById('form-preventivo')
const selezioneLavoro = formElement.querySelector('#lavoro')
const inputCodice = formElement.querySelector('#codicepromozionale')

const codiciPromozionaliValidi = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

formElement.addEventListener('submit' , function(event){
    event.preventDefault()
    
    const lavoro = selezioneLavoro.value

    const codicePromozionale = inputCodice.value



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
    
    let sconto = 0

    if(codiciPromozionaliValidi.includes(codicePromozionale)){
        sconto = (prezzo * 25) / 100
    }
    else if (codicePromozionale !== ''){
        alert ('CODICE PROMOZIONALE NON VALIDO, IL PREZZO VIENE CALCOLATO SENZA SCONTO')

    }
    
    const prezzoFinale = (prezzo - sconto).toFixed(2) + '€'



    const prezzoOutput = formElement.querySelector('.prezzo')

    prezzoOutput.innerHTML = prezzoFinale
})