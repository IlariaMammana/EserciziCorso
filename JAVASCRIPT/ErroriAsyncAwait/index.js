const state = {
    data: [],
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
        });
        const result = await response.json();
        state.data = result;
        console.log(result); 
    } catch (error) {
        console.log(error);
    }
}

fetchData()