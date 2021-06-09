import { useState, useEffect } from 'react';

import {SearchBar} from '../Components/SearchBar';
import { useQuery } from '../hooks/useQuery';
import { GetbyText } from '../utils/httpClient';
import { ProductoCard } from '../Components/ProductoCard';

export function Home(){
    const [producto, setProducto] = useState([]);
    const query = useQuery();
    const search = query.get("search");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        GetbyText(search)
        .then((data) => {
            
            setProducto(data)
            console.log(data);
            setLoading(false);
        })
    }, [search]);

    if(isLoading){
        return <p>Loading...</p>
    }

    return( 
        <div className="home-container">
            <SearchBar />
            <p className="filter">{ producto.available_filters[0].values.slice(0, 5).map(filtro => filtro.name).join(" > ") }</p>
            <div className="objs-container">
                { producto.results.map((data) => (
                    <ProductoCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    )
}