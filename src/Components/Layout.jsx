import { SearchBar } from './SearchBar';

export function Layout(props){
    return (
        <div>
            <SearchBar />
            { props.children }
        </div>
    );
}