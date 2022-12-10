// 1. он інпут
// 2. в онІнпуті спочатку фетч
// 3. функція створення списку країн

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

refs.input.addEventListener(
  'input',
  debounce(() => onInput(refs.input.value.trim()), DEBOUNCE_DELAY)
);

function onInput(inputValue) {
  if (inputValue === '') {
    return;
  }

  fetchCountries(inputValue)
    .then(r => {
      if (!r.ok) {
        throw new Error(r.status);
      }
      return r.json();
    })
    .then(console.log);
}

function createCountryList({ name, flags }) {
  const markup = `<li><img alt=";${name}" src="${flags}" width="100px"></li>`;
  console.log(markup);
}
