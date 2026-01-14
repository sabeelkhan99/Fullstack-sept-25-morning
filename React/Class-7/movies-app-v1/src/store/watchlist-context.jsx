import React, { createContext, useEffect, useState } from 'react';

// This is a context object created by react using 'createContext'
const WatchListContext = createContext({
    watchList: [],
    addToWatchList: ()=> {}
});

// This provider component is used to passed down the context in child elements
export const WatchListContextProvider = (props) => {

    const initialWatchList = JSON.parse(window.localStorage.getItem('watchList') || '[]')

    const [watchList, setWatchList] = useState(initialWatchList);

    const addToWatchList = (movie) => {
        // Please look out why use prevState variable not watchList directly.
        setWatchList((prevState) => [...prevState, movie]);
    }

    useEffect(() => {
        window.localStorage.setItem('watchList', JSON.stringify(watchList));
    }, [watchList]);

    const context = {
        watchList: watchList,
        addToWatchList: addToWatchList
    }

    return (
        <WatchListContext.Provider value={context}>
            {props.children}
        </WatchListContext.Provider>
  )
}

export default WatchListContext
