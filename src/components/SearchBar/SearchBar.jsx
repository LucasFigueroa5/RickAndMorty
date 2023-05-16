import './SearchBar.css';

export default function SearchBar(props) {
   return (
      <div className='search-cont'>
         <input className='searcher' type='search' placeholder='Buscar...' />
         <button className='btnAdd' onClick={props.onSearch}>+</button>         
      </div>
   );
}
