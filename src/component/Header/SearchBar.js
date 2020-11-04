import React, { useState ,useEffect } from "react";
import './Header.css'
import DataService from '../../db-connection/DataService';
import {  withRouter } from "react-router-dom";

const SearchBar = (props) => {
  const [searchResults, setSearchResults] = useState("");
  const [searchTitles, setSearchTitles] = useState([]);

  useEffect(() => {
    const searchFacebook = async () => {
      const data = await DataService.get(``);
      const searchList = data.data.results.slice(0 ,5).map((item) => {
        return (
          <div className="search-container" key={item._id}>
            <div className="search-result" onClick={()=>handleClickOnTitle(item.id)}>
             <span className="poster-span">{item.first_Name}</span> 
             <span className="title-span">{item.last_Name}</span>  
              </div>
          </div>
        );
      });

      setSearchTitles(searchList);
    };

    searchFacebook();
    // eslint-disable-next-line
  }, [searchResults ]);

  const handleClickOnTitle = (id) =>{
    
    setSearchResults("")
    setSearchTitles([])
  }

  const onInputChange = (event) => {
    setSearchResults(event.target.value);
  };

  return (
    <div>
      <div className="search-div">
        <input
          className="search-input"
          value={searchResults}
          onChange={(e) => onInputChange(e)}
          type="text"
          placeholder="&#xf002; Search Facebook"
        />
      </div>
      <div className="search-render-container">
      <div className="search-render-results" >{searchTitles}</div>
      </div>
    </div>
  );
};

export default withRouter(SearchBar);
