const KEY = "order"

function checkStorage() {
    return typeof(Storage) !== undefined
}

function putHistory(data) {
    if(checkStorage()) {
        let historyData = null
        if(localStorage.getItem(KEY) === null) {
            historyData = []
        } else {
            historyData = JSON.parse(localStorage.getItem(KEY))
        }

        historyData.unshift(data)

        if(historyData.length > 5) {
            historyData.pop()
        }

        localStorage.setItem(KEY, JSON.stringify(historyData))
    }
}

function showHistory() {
    if (checkStorage()) {
        return JSON.parse(localStorage.getItem(KEY)) || [];
    } else {
        return [];
    }
}

function renderHistory() {
    const historyData = showHistory()
    let historyList = document.querySelector("#historyList");
    historyList.innerHTML = ""
  
    for (let history of historyData) {
        let row = document.createElement('tr')
        row.innerHTML = "<td>" + history.type + "</td>"
        row.innerHTML += "<td>" + history.flavor + "</td>"
        row.innerHTML += "<td>" + history.topping + "</td>"
        row.innerHTML += "<td>" + history.amount + "</td>"
        row.innerHTML += "<td>" + "Rp " + history.price + "</td>"
  
        historyList.appendChild(row);
    }
 }
  
 renderHistory();