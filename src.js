const req = new XMLHttpRequest()
req.open("GET", "https://restcountries.eu/rest/v2/all", true)
req.onload = function(){
    const data = JSON.parse(this.response)
    console.log(data)

    const asia = data.filter((el)=> el.region === 'Asia')
    console.log(asia)

    // const usdCountries = data.filter((el)=> {
    //     for(let )
    // })
    // console.log(usdCountries)

    const populat = data
        .map((el) => el.population)
        .reduce((total , population) => total+=population, 0)
    console.log(populat)


}
req.send()

