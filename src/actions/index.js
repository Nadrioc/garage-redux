export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

export function fetchCars() {
  //AJAX REQUEST
  const promise = fetch("https://wagon-garage-api.herokuapp.com/bond-garage/cars")
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_CAR,
    payload: promise
  }
}
