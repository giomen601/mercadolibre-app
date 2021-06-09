import { Link } from 'react-router-dom';

export function ProductoCard({ data }){
    return (
        <Link to={"/items/" + data.id}
              style={{ textDecoration: 'none' }}>
        <div className="producto-cont">
            
                <div className="producto-img">
                    <img className="img"
                        src={data.thumbnail} alt="" />
                </div>
                <div className="data-cont">
                    <p className="precio">$ { data.price }</p>
                    <p>{ data.title }</p>
                </div>
            
        </div>
        </Link>
    )
}