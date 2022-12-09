import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
console.log(refs.input);
console.log(refs.countryList);
console.log(refs.countryInfo);

function fetchCountries(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(r => r.json())
    .then(console.log);
}

console.log(fetchCountries(Ukraine));
