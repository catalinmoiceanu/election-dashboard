onmessage = function(event) {
    let options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    fetch(event.data, options)
        .then((response) => { return response.json() })
        .then((data) => { postMessage(data); })
        .catch(error => console.error(error));
};