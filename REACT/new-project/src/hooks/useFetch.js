import { useEffect, useState } from "react"

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: {},
};

export const useFetch = (url, options = DEFAULT_OPTIONS) => {
    options = { ...DEFAULT_OPTIONS, ...options };

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    if (error) setError(false);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error during fetch data.');
            }
            const result = await response.json();

            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            if (loading) setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url])

    return {
        data,
        error,
        loading,
        reload: fetchData,
    }
};