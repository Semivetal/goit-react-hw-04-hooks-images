const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "23157065-e1d5c0e7ddd229ceec096f468";

export default function fetchPicture(request, page) {
  return fetch(
    `${BASE_URL}?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There are no pictures with ${request}`));
  });
}
