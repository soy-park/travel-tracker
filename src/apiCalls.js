function fetchData(type) {
    return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(res => res.json())
    .catch(err => {
        throw new Error(err)
    })
}

function fetchDataById(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(res => res.json())
    .catch(err => {
        throw new Error(err)
    })
}


function postNewTrip(inputObject) {
    return fetch('http://localhost:3001/api/v1/trips',
    {
        method: 'POST', 
        body: JSON.stringify(inputObject),
        headers: {
            "Content-Type": "application/JSON"
        }
    })
    .then(res => {
        if(!res.ok && res.status === 422) {
            throw new Error('Please fill out all input fields in the correct format')
        } else if (!res.ok) {
            throw new Error('Error:' + res.statusText)
        }   
        return res.json()
    })
    .catch(err => {
        throw new Error(err)
    })
} 
export { fetchData, fetchDataById, postNewTrip }