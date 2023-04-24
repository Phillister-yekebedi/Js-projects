//create an array with items
let groceryItems= ["bread","dairy","legumes","sugar","flour","rice","nuts","cake","pasta","vegetables"]
  //create an array with corresponding quanruty
  let quantity=[23,45,60,24,57,87,13,67,86,56]
  let stock_inventory={}
  groceryItems.forEach((element,index)=>{
    stock_inventory[element]=quantity[index]
  })
  console.log(stock_inventory)
  //adding new item to inventory
  function addingItem(){
    stock_inventory["pineapple"]=100
    console.log(stock_inventory)
  }
  addingItem()
  //take two
//update stock quantity of existing item
function updating(){
  stock_inventory["Fruits"]=200
  console.log(stock_inventory);
}
updating()

function update(){
  let check = inventory.indexOf(item);
  if (check > -1){
    quantity[check] = 200

    console.log()
  }
}
//total number of items in the inentory
function total(){
  let sum=0
  for(let i=0;i<quantity.length;i++){
    sum+=quantity[i]
  }
  console.log(sum);
}
total()
//getting the lowest quantity
function minquantity(){
  let quantityMin=Math.min(...quantity)
  console.log(quantityMin);
}
minquantity()