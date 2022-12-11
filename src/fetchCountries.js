const endPoint = 'https://restcountries.com/v3.1/name/';
const filter = '?fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${endPoint}${name}${filter}`).then(r => {
    if (!r.ok) {
      throw new Error(r.status);
    }
    return r.json();
  });
}
