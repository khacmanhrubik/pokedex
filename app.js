const inputSearch = document.getElementById('input-search')
const name = document.getElementById('name-pokemon')
const otherName = document.getElementById('name')
const otherType = document.getElementById('othertype')
const type = document.getElementById('type')
const Id = document.getElementById('id')
const height = document.getElementById('height')
const weight = document.getElementById('weight')


inputSearch.addEventListener('change', (event) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
        .then(res => res.json())
        .then((data) =>{
            let id = data.id
            console.log(data.name)
            console.log(data.types[0].type)

            //Changing Variables
            name.innerHTML = data.name
            type.innerHTML = data.types[0].type.name
            Id.innerHTML = id
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            otherName.innerHTML = data.name
            otherType.innerHTML = data.types[0].type.name
            height.innerHTML = data.height
            weight.innerHTML = data.weight
            
        })
})
