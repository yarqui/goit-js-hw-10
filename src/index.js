import './css/styles.css';
import 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  clearMarkup();

  let inputValue = e.target.value.trim();

  if (inputValue === '') {
    return;
  }

  fetchCountries(inputValue).then(createCountryList);
}

function createCountryList(countries) {
  const [{ name, flags, capital, population, languages }] = countries;

  console.log(languages);
  const markup = `<li>
  <img class="list-item-img" alt="Flag of ${name.official}" src="${
    flags.svg
  }" width="100px">
  <p>${name.official}</p>
  <p>Capital: ${capital}</p>
  <p>Population: ${population}</p>
  <p>Languages: ${Object.values(languages)}</p>
  </li>`;

  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
