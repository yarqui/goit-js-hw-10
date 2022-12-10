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
console.log(refs.input);
console.log(refs.countryList);
console.log(refs.countryInfo);

refs.input.addEventListener(
  'input',
  debounce(() => {
    onInput(refs.input.value);
  }, DEBOUNCE_DELAY)
);

function onInput(inputValue) {
  fetchCountries(inputValue);
}
