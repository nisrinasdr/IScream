const order = {
    type: 'Cone',
    flavor: 'Chocolate',
    topping: 'None',
    amount: '0',
    price: '0'
}

const submitDisable = true

function displayPrice(newPrice){
    order.price = newPrice
    document.getElementById('price').innerHTML = `Rp ${newPrice}`
}

const checkPrice = document.getElementsByClassName('check-btn')[0]

checkPrice.addEventListener("click", function(e){
    e.preventDefault()
    let newPrice = 0
    
    const type = document.getElementById('type').value
    switch(type) {
        case 'cone': newPrice += 5000; break;
        case 'sandwich': newPrice += 7000; break;
        case 'sundae': newPrice += 10000; break;
        default: newPrice += 5000; break;
    }
    
    const flavor = document.getElementById('flavor').value
    switch(flavor) {
        case 'chocolate': newPrice += 10000; break;
        case 'matcha': newPrice += 20000; break;
        case 'mintchoco': newPrice += 15000; break;
        case 'strawberry': newPrice += 10000; break;
        case 'vanilla': newPrice += 10000; break;
        default: newPrice += 10000;
    }
    
    const topping = document.getElementById('topping').value
    switch(topping) {
        case 'none': newPrice; break;
        case 'blueberry': newPrice += 2000; break;
        case 'chocochips': newPrice += 4000; break;
        case 'pocky': newPrice += 3000; break;
        default: newPrice;
    }
 
    let amount = document.getElementById('amount').value
    newPrice *= amount
    
    displayPrice(newPrice)
})

const submit = document.getElementsByClassName('submit-btn')[0]
submit.addEventListener("click", function(e){
    e.preventDefault()
    if(order.price == 0) {
        const total = document.getElementsByClassName('total-price')[0]
        const alert = document.createElement("P")
        alert.style.fontSize = "0.8em"
        alert.style.color = "red"
        alert.innerHTML = 'Please check the price first!'
        total.appendChild(alert)
        setTimeout(function(){
           alert.remove();
        }, 3000)
    } else {
        const history = {
            type: type.value,
            flavor: flavor.value,
            topping: topping.value,
            amount: amount.value,
            price: order.price  
        }

        putHistory(history)
        renderHistory()
        document.getElementById("form-container").reset();
        document.getElementById('price').innerHTML = `Rp 0`
        alert('Order success!')
    }
    
})

const clear = document.getElementsByClassName('clear-btn')[0]
console.log(clear)
clear.addEventListener("click", function(e){
    e.preventDefault()
    localStorage.removeItem("order")
    alert('History deleted')
    renderHistory()
})
