import React, { createContext, useContext, useState } from 'react';
const StateContext = createContext();
const baseUrl = '"https://google-search3.p.rapidapi.com/api/v1/';

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /videos, /search, /images
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': '/IN',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '05255d51c5msh5ff7b3c6fb93705p17b7a7jsn89866c363142'
            }
        })

        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);
    }

    return (
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);