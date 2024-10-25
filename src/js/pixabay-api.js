// We need to export function that create http search on backend
export function fetchPhotos(searchParams) {
  // function name with parameters
  const url = `https://pixabay.com/api/?${searchParams}`; //url from library plus const from library we need (in main)

  return fetch(url).then(response => {
    //return fetch (promise) with result
    if (!response.ok) {
      //if result not good: meant respons.ok is false we change to true and it is mean error and return error
      throw new Error(response.status); //throw new... sending this to .catch in main.js
    }
    return response.json(); // everything great and we change JSON into JS and return
  });
}
