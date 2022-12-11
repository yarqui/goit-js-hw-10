import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

  const markupOneCountry = `<div class="country-info__header-wrap"><img class="country-info__img" alt="Flag of ${
    name.official
  }" src="${flags.svg}" width="35px">
  <span class="country-info__name">${name.official}</span>
  </div>
  <ul>
  <li><span class="country-info__item-label">Capital:</span> ${capital}</li>
  <li><span class="country-info__item-label">Population:</span> ${population}</li>
  <li><span class="country-info__item-label">Languages:</span> ${Object.values(
    languages
  ).join(', ')}</li>
</ul>`;

  const markupCountryList = `<li class="country-list__item">
  <img class="country-list__img" alt="Flag of ${name.official}" src="${flags.svg}" width="35px" height="20px">
  <p class="country-list__name">${name.official}</p>
  </li>`;

  let countriesArrayLength = countries.length;

  if (countriesArrayLength > 10) {
    Notify.info('specify your search');
    return;
  }

  if (countriesArrayLength === 1) {
    refs.countryInfo.insertAdjacentHTML('beforeend', markupOneCountry);
    return;
  }

  refs.countryList.insertAdjacentHTML('beforeend', markupCountryList);
}

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

// ======================================
// МЕПНУТИ КАНТРІС ДЛЯ ВИВОДУ І СТВОРЕННЯ РОЗМІТКИ СПИСКУ
// ЗРОБИТИ СТИЛІ
// markupCountryList & markupOneCountry зробити окремими функціями і передати в кріейт
// ======================================
