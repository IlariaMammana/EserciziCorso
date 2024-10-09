const fetchData = async () => {
    try {
        const response = await fetch("http://client.cors-api.appspot.com/client");    
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        console.log(result);        
    } catch (error) {
        console.log(error);
    }
}

fetchData()