const API_KEY = 'aaa846b6309da643bcad0af759a6c669';
const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const HASH = '3ba0753ef3e09bbb435dc5692482aa06';
export const baseExtensionImage = '/portrait_uncanny.jpg';
// export const baseExtensionImage = '/standard_fantastic.jpg';


// https://gateway.marvel.com/v1/public/comics?ts=1&apikey=aaa846b6309da643bcad0af759a6c669&hash=3ba0753ef3e09bbb435dc5692482aa06

const baseUrl = (endpoint) => {
  return `${BASE_URL}${endpoint}?ts=1&apikey=${API_KEY}&hash=${HASH}`; 
}

export const charactersUrl = baseUrl('characters');
export const comicsUrl = baseUrl('comics');
export const eventsUrl = baseUrl('events');
export const seriesUrl = baseUrl('series');
export const storiesUrl = baseUrl('stories');