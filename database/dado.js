const jsonData = fetch("database/date.json").then(response => {
    return response.json()
})
console.log(jsonData.cor)