
//********************* Select fields

function fetchSelect(url,label,value){
    fetch(url)
    .then( res => res.json() )
    .then( list => {
        if(value == 'id'){
            for(const one of list){
                label.innerHTML += `<option value='${one.id}'>${one.nome}</option>`
            }
        }
        else{
            for(const one of list){
                label.innerHTML += `<option value='${one.nome}'>${one.nome}</option>`
            }
        }
    } )
}

function getUF(){
    const ufs = document.querySelector('select[name=uf]')
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

    fetchSelect(url,ufs,'id')

}
getUF()

function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`
    let stateInput = document.querySelector('input[name=state]')
    
    stateInput.value = event.target.options[event.target.selectedIndex].text


    citySelect.innerHTML = '<option value>Selecione a Cidade</option>'
    
    if(event.target.value != 'null')
        citySelect.disabled = false
    else{
        citySelect.disabled = true;

    }
    fetchSelect(url,citySelect,'nome')
    
}

document.querySelector('select[name=uf]').addEventListener('change', getCities)

//************************** 'Ítems de coleta' list 

const itemsToCollect = document.querySelectorAll('.items-grid li')
const items = document.querySelector('input[name=items]')

let selectedItems = []

function handleSelectedItem(event){
    let itemLi = event.target
    let itemID = itemLi.dataset.id

    //toggle css style
    itemLi.classList.toggle('selected')

    //Check if item is alredy selected
    let alredySelected = selectedItems.findIndex(item => item==itemID)

    if(alredySelected>=0){//If item is alredy selected,
        //Filter item from array
        selectedItems = selectedItems.filter(item => item!=itemID) 
    }
    else{// If not alredy selected
        //Add item do array
        selectedItems.push(itemID)
    }
    //Add items to hidden input
    items.value = selectedItems
}

for( item of itemsToCollect){
    item.addEventListener('click', handleSelectedItem)
}




