const backendUrl = 'http://localhost:5555/'
function fetchDeparture(){
    return fetch(backendUrl+'departures').then(res=>res.json())
}

export {fetchDeparture}