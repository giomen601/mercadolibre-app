import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { GetbyId, GetDesciption } from '../utils/httpClient';

export function DetalleProducto(){
    const { itemId } = useParams();
    const [item, setItem] = useState();
    const [descripcion, setDescripcion] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        GetbyId(itemId)
            .then(resp => {
                setItem(resp);
                console.log(resp);
                setLoading(false);
            });
        GetDesciption(itemId)
            .then(resp => {
                setDescripcion(resp.plain_text);
            });
    }, [itemId])

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div className="detalle-producto">
            <div className="producto-container">
                <div className="producto-flex">
                    <img className="prod-img"
                         src={item.thumbnail} alt="" />
                    <div>
                        <p className="condicion">{ item.condition }</p>
                        <p className="titulo">{ item.title }</p>
                        <p className="precio">$ { item.price }</p>
                        <button className="btn">Comprar</button>
                    </div>
                </div>
                <div>
                    <h3 className="desc-title">Descripción del producto</h3>
                    <p className="descripcion">{ descripcion }</p>
                </div>
            </div>
        </div>
    );
}