import { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
    
  };

  return (
    <div className="search-cont">
      <form onSubmit={(e) => {
        e.preventDefault()
          onSearch(id);
          setId('')
        }}>
      <input
        value={id}
        onChange={handleChange}
        className="searcher"
        type="search"
        placeholder="Buscar..."
      />
      
      <button
      type="submit"
        className="btnAdd"
      >
        <FontAwesomeIcon
          className="btn-add"
          icon={faCirclePlus}
          beatFade
          style={{
            color: 'black',
            fontSize: "2em",
          }}
        />
      </button>

      </form>
    </div>
  );
}
