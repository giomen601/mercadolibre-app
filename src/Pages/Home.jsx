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
    const composedata = {
        "author": {
            "name": "Giovany",
            "lastname": "Ariza"
        },
        "data": {}
    }

    useEffect(() => {
        setLoading(true);

        GetbyText(search)
        .then((data) => {
            composedata.data = data;
            
            setProducto(composedata)
            console.log(composedata);
            setLoading(false);
        })
    }, [search]);

    if(isLoading){
        return <p>Loading...</p>
    }

    return( 
        <div className="home-container">
            
            {producto.data.results.length > 0 &&
             <p className="filter">{ producto.data.available_filters[0].values.slice(0, 5).map(filtro => filtro.name).join(" > ") }</p> }
            <div className="objs-container">
                { producto.data.results.map((data) => (
                    <ProductoCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    )
}