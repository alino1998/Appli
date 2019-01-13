
 export async function getCountryFromAPI() {
  try {
    const url = 'https://restcountries.eu/rest/v2/all'
    const reponse=await fetch(url)
    const result= await reponse.json()
    const aRendre=await result.map(countrydata)
    return aRendre
  } catch (error) {
    console.error(error)
  }
}

export async function getCountryFromAPiWhenReseacrch(text) {
  try {
    const url = 'https://restcountries.eu/rest/v2/name/'+text+'?fullText=true'
    const reponse=await fetch(url)
    const result= await reponse.json()
    const aRendre=await result.map(countrydata)
    return aRendre
  } catch (error) {
    console.error(error)
  }
}

function countrydata(country){
  return({
  name: country.name,
  capital: country.capital,
  population: country.population,
  area:country.area,
  monnaie:country.currencies[0].code,
  drapeau:country.flag,
})
}