import { useReducer } from "react";

const httpReducer = (state, action) => {
    if (action.type === 'PENDING') {
        return {
            data: null,
            isLoading: true,
            error: null
        }
    }

    if (action.type === 'SUCCESS') {
        return {
            data: action.payload,
            error: null,
            isLoading: false
        }
    }

    if (action.type === 'ERROR') {
        return {
            data: null,
            error: action.error,
            isLoading: false
        }
    }

    throw new Error('Invalid Event');
}

const useHttp = (requestFunction, startsWithPending = false) => {
    const [httpState, dispatch] = useReducer(httpReducer, {
        data: null,
        isLoading: startsWithPending,
        error: null
    });

    const sendRequest = async (...requestData) => {
        try {
            dispatch({ type: 'PENDING' });
            const data = await requestFunction(...requestData);
            dispatch({type: 'SUCCESS', payload: data.payload})
        }
        catch (err) {
            console.log(err);
            dispatch({ type: 'ERROR', error: err.message || 'something went wrong' });
        }
    }

    return { ...httpState, sendRequest };
}

export default useHttp;