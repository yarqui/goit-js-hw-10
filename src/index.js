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

  const markupOneCountry = `<li>
  <img class="list-item-img" alt="Flag of ${name.official}" src="${
    flags.svg
  }" width="100px">
  <p>${name.official}</p>
  <p>Capital: ${capital}</p>
  <p>Population: ${population}</p>
  <p>Languages: ${Object.values(languages)}</p>
  </li>`;

  // ======================================
  // ПРИСВОЇТИ КЛАСИ ДЛЯ ІНФО І ЛІСТА? ЧИ ПЕРЕГЛЯНУТИ, МОЖИЛВО, ЛИШЕ ДЛЯ ІНФО? ДЛЯ 1 КРАЇНИ ВСТАВЛЯТИ НЕ В ЛІСТ, А В ІНФО!!!!
  // МЕПНУТИ КАНТРІС ДЛЯ ВИВОДУ І СТВОРЕННЯ РОЗМІТКИ СПИСКУ
  // ПЕРЕРОБИТИ ІФИ, А БИ БУВ ІФ ДОВЖИНА БІЛЬШЕ 10, СПЕСІФАЙ!
  // ЗРОБИТИ СТИЛІ
  // ======================================

  const markupCountryList = `<li>
  <img class="list-item-img" alt="Flag of ${name.official}" src="${flags.svg}" width="100px">
  <p>${name.official}</p>
  </li>`;

  let countriesArrayLength = countries.length;

  if (countriesArrayLength < 10 || countriesArrayLength > 2) {
    console.log(countriesArrayLength);
    refs.countryList.insertAdjacentHTML('beforeend', markupCountryList);
    // return;
    // =========================================
    // ТУТ ТРЕБА РЕТЬОРН?
    // =========================================
  }

  if (countriesArrayLength === 1) {
    refs.countryInfo.insertAdjacentHTML('beforeend', markupOneCountry);
  }

  console.log('specify your search');
}

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
