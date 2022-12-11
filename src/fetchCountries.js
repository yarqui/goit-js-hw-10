import { Notify } from 'notiflix/build/notiflix-notify-aio';

const endPoint = 'https://restcountries.com/v3.1/name/';
const filter = '?fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${endPoint}${name}${filter}`)
    .then(r => {
      if (!r.ok) {
        throw new Error(r.status);
      }
      return r.json();
    })
    .catch(() => Notify.failure('Oops, there is no country with that name'));
}
