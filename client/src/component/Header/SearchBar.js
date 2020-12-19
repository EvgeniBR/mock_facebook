import React, { useState ,useEffect } from "react";
//import DataService from '../../db-connection/DataService';
import {  withRouter } from "react-router-dom";
import CircleDivWithIcon from '../circle-div/CircleDivWithIcon'
import * as StyleHeader from "./Header.style";


// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

const SearchBar = ({backgroundInput , color}) => {
  const [searchResults, setSearchResults] = useState("");
  const [searchTitles, setSearchTitles] = useState([]);
  const size = useWindowSize();

  useEffect(() => {
    // const searchFacebook = async () => {
    //   const data = await DataService.get(``);
    //   const searchList = data.data.results.slice(0 ,5).map((item) => {
    //     return (
    //       <div className="search-container" key={item._id}>
    //         <div className="search-result" onClick={()=>handleClickOnTitle(item.id)}>
    //          <span className="poster-span">{item.first_Name}</span> 
    //          <span className="title-span">{item.last_Name}</span>  
    //           </div>
    //       </div>
    //     );
    //   });

    //   setSearchTitles(searchList);
    // };

    // searchFacebook();
    // eslint-disable-next-line
  }, [searchResults ]);

  const handleClickOnTitle = (id) =>{
    
    setSearchResults("")
    setSearchTitles([])
  }

  const onInputChange = (event) => {
    setSearchResults(event.target.value);
  };

  const fullSearchBar = () => {
    return <StyleHeader.Search
      value={searchResults}
      onChange={(e) => onInputChange(e)}
      type="text"
      placeholder="&#xf002; Search Facebook"
    />
  }

  const miniSearchBar = () => {
    return <CircleDivWithIcon
        icon="fas fa-search"
        backgroundColor={backgroundInput}
        color={color}
        size="40px"
      />  
  }

  return (
    <>
      <div>
        {size.width > 1200 ? fullSearchBar() : miniSearchBar()} 
      </div>
      <div>{searchTitles}</div>
    </>
  );
};

export default withRouter(SearchBar);
