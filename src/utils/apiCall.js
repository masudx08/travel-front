const backendUrl = 'http://localhost:5555/'
function fetchDeparture(){
    return fetch(backendUrl+'departures').then(res=>res.json())
}
function fetchCities(){
    return fetch(backendUrl+'cities').then(res=>res.json())
}
function fetchFlights(){
    return fetch(backendUrl+'flights').then(res=>res.json())
}
// function fetchHotels(){
//     return fetch(backendUrl+'hotels').then(res=>res.json())
// }

export {fetchDeparture, fetchCities, fetchFlights}