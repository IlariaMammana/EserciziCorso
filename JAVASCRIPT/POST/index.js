const user = {
    name: "Bob",
    age: 30,
    city: "New York",
}

const postRequest = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers:
            {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        });
        const data = await response.json()
        console.log(data);    
    } catch (error) {
        console.error(error)
    }
}

postRequest()

