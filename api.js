let inputValue=document.getElementById('inputArea')
let button=document.getElementById('button')


button.addEventListener('click',()=>{
const url=(`https://restcountries.eu/rest/v2/all/${inputValue.value}`)
fetch(url)
.then(res=>res.json())
.then(data=>countryName(data))
})

const divSection=document.getElementById('country-container')
const countryName=countries=>{

countries.forEach(country => {
    const createDiv=document.createElement('div')
    createDiv.classList='class-design'
    const InnerHtml=`
     <h4 class='edit'>${country.name}</h4>

     <h5 class='edits'> ${country.capital}</h5>
     <button  onclick="functionForDetails('${country.name}')"   > details </button>
    ` 
    
    createDiv.innerHTML=InnerHtml
     
    divSection.appendChild(createDiv)   
    
})
}

const functionForDetails=name=>{
    const url=(`https://restcountries.eu/rest/v2/name/${name}`)
    fetch(url)
    .then(res=>res.json())
    .then(data=>showDetails(data[0]))
}

const showDetails =country=>{
const detailsDiv=document.getElementById("divDetails")
detailsDiv.innerHTML=`

<h4>Country-Name: - ${country.name} </h4>
<h5>Country-symbol: - ${country.topLevelDomain} </h5>
<h6>Country-population: - ${country.population} </h6>
<img src="${country.flag}" alt="">


`
}













// 