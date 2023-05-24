const API_KEY = 'a686d213ab81438bb98169f1bae1d56a';

export async function getTopHeadlines() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles;
}
export const newapi =  {getTopHeadlines};