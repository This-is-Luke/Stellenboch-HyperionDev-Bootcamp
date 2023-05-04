// set a arrow function for async await.
// await a response from the json, I used a async function so it would listen for the pokemon call later rateher than simply changing the url name.
const getPokemonData = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    const data = await response.json()
//   set variables for name, weight and ability.
    const name = data.name
    const weight = data.weight
    //  this part of the code was unexpectantly hard and I had to use guides to help solve it.
    // I understand it now but it wasnt apparent to me at writing, we had to use a map to get through the object,
    // assing it a new onject name, not just call the names from the ability object, then create a seperate console.log using foreach, this was really difficult and is where I also needed to use a guide.
    const abilities = data.abilities.map((abilityObj) => ({
        name: abilityObj.ability.name,
        url: abilityObj.ability.url,
        is_hidden: abilityObj.is_hidden,
        slot: abilityObj.slot,
      }))
      
// console.log with a template litteral and a foreach arraow function to set the abilities object to display closer to what was in the task discription.
    console.log(`Name: \n${name}\nWeight: \n${weight}\nAbilities:`)
    abilities.forEach((ability) => {
        console.log(`\nName: ${ability.name}\nURL: ${ability.url}\nIs hidden: ${ability.is_hidden}\nSlot: ${ability.slot}`)
      });
  };
  
  getPokemonData('pikachu')
  