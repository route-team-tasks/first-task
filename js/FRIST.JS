let inp= document.getElementById('inp')
let addBtn=document.getElementById(`addBtn`)
let itemsArea=document.getElementById('itemsArea')
addBtn.addEventListener(`click`,()=>{
    addItem()
    clearInp()
    displayItem()
})
let items=[]
function addItem()
{
    let inpVal =
{
    itemName:inp.value,
}
items.push(inpVal)
}
function clearInp() 
{
    inp.value=""
}

function displayItem() {
  
    container=``
    for (let i = 0; i < items.length; i++) {
        container+=`    <div class="row justify-content-center my-5" >
 <span class="mr-5">${items[i].itemName}</span>
        <button onclick='deleteItem(${i})' class="ml-5 btn btn-outline-danger">delete</button>    
        </div>  `
        
    }
    itemsArea.innerHTML=container
}

function deleteItem(deletedItem)
{
items.splice(deletedItem,1)
displayItem()
}

