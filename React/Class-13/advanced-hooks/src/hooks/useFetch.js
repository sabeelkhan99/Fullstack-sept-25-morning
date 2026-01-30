import React, { useState } from 'react'

const useFetch = (endpointUrl, headers={}) => {
    if (!endpointUrl) {
        throw new Error('endpoint cannot be empty');
    }

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(endpointUrl, {headers: {...headers}});
            const parsedData = await res.json();
            setData(() => parsedData);
            setIsLoading(false);
        }
        catch (err) {
            setError(err.message || 'something went wrong in fetch')
            setIsLoading(false);
        }
    }

    return { data, isLoading, error, sendRequest }
}

export default useFetch
