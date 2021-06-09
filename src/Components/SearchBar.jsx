import logo from '../images/Logo_ML.png';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { useQuery } from '../hooks/useQuery';

export function SearchBar(){
    const query = useQuery();
    const search = query.get("search");

    
    const [searchTxt, setSearchTxt] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchTxt(search || "");
    }, [search])

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTxt);
        history.push("/?search=" + searchTxt);
    }

    return (
        <div className="searchbar-cont">
            <img src={logo} alt=""
                 className="logo"/>
            <form onSubmit={HandleSubmit}
                  className="searchForm">
                <div className="searchBox">
                    <input type="text"
                        className="searchInput"
                        value={searchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)} />
                    <button type="submit"
                            className="searchBtn">
                            <BsSearch />
                    </button>
                </div>
            </form>
        </div>
    );
}