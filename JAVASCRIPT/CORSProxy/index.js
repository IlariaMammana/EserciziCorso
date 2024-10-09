/*  URL dell'API per GET
http://client.cors-api.appspot.com/client */

/*  Servizio proxy
https://cors-anywhere.herokuapp.com/ 
per aprire momentaneamente l'accesso andare qui
https://cors-anywhere.herokuapp.com/corsdemo */

const fetchData = async () => {
    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/http://client.cors-api.appspot.com/client");    
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        console.log(result);        
    } catch (error) {
        console.log(error);
    }
}

fetchData();