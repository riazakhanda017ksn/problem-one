
document.getElementById("inputArea")
.addEventListener("keyup", function(event) {

if (event.key === 'Enter') {
    document.getElementById("button").click();
}
});




//---------------->////---------------->>>>>.
let button = document.getElementById('button')

let inputValue = document.getElementById('inputArea')
button.addEventListener('click', () => {
    Spinners()
    const url = (`https://restcountries.eu/rest/v2/name/${inputValue.value}`)
    fetch(url)
        .then(res => res.json())
        .then(data => countryName(data))
        .catch(error => showErrorMessage('Hey uer, something went wrong please try again letter'))
})

const divSection = document.getElementById('country-container')
const countryName = countries => {

    countries.forEach(country => {
        const createDiv = document.createElement('div')
        createDiv.classList = 'class-design'
        const InnerHtml = `
    <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
      <h4 class='edit'>${country.name}</h4>

      <h5  class='edits'> ${country.capital}</h5>
      <a class='ancor' onclick="functionForDetails('${country.name}')" > Read more -> </a>
      </div>
      
    </div>
  </div>
     


    `

        createDiv.innerHTML = InnerHtml

        divSection.appendChild(createDiv)

    })
    Spinners()
}

const functionForDetails = name => {
    try {
        const url = (`https://restcountries.eu/rest/v2/name/${name}`)
        fetch(url)
            .then(res => res.json())
            .then(data => showDetails(data[0]))

    } catch (error) {
        showErrorMessage('sorry i cant load your details data !! please try again letter !!!!')

    }
}

const showDetails = country => {
    const detailsDiv = document.getElementById("divDetails")
    detailsDiv.innerHTML = `
<div class="container">
<div class="row">
  <div class="col-lg-6 col-md-6">
  <div class='showDetails'>
<a href=""><img src="${country.flag}" alt=""></a>

<strong>Country Name :  ${country.name} </strong>
<p> Short Name : ${country.topLevelDomain} </p>
<p>Countries Populations : ${country.population} </p>
<P class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti officia,
 ullam minus obcaecati error fugit aperiam. Eligendi pariatur quisquam rem magnam iste illo ab nobis, 
 neque, sunt minus qui. Ut, ullam! Harum nihil eveniet nobis ex praesentium sit voluptates facere quaerat esse numquam,
ipsa ad earum dolorum ab. Quidem possimus qui ipsum neque accusamus sequi error ex eum
quibusdam maxime voluptas quam minima tenetur veniam, veritatis vitae quas mollitia eligendi laudantium iste.
Fugit expedita dolorum distinctio? Cumque officiis nihil qui mollitia voluptatum sed fugit quidem autem doloremque quos, 
quia reprehenderit enim a est
 aliquam tenetur commodi nulla soluta cupiditate?</p>
</div>

  </div>
  <div class="col-lg-6 col-md-6"></div>
</div>
</div>

`
}


const showErrorMessage = error => {
    const errorMessage = document.getElementById('something')
    errorMessage.innerText = error
}




/////spinner///

const Spinners=()=>{

    const spinner=document.getElementById('spinner')
   const detailsDiv = document.getElementById("divDetails")
   spinner.classList.toggle('d-none')
   detailsDiv.classList.toggle('divDetails')
}





// 