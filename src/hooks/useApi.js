import { useEffect, useState } from "react";
import api from '../services/api';

export const useApi = (path, method = 'get') => {

    const [response, setResponse] = useState({
        data: null,
        status: null,
        statusText: null,
        loading: true
    })
    
    useEffect(() => {
        const fetchApi = async () => {
            try {
                await api[method](path)
                .then(resp => setResponse({
                    data: resp.data.data,
                    status: resp.status,
                    statusText: resp.statusText,
                    loading: false
                }))
            } catch(error) {
                console.error(error);
            }
        };

        fetchApi();
    }, [method, path])
    

    return response;
}