import { Link } from "@reach/router";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/context";

import "./Overview.scss";


function Overview() {

    var {value} = useContext(SearchContext);

    var[content, setContent] = useState({});

    useEffect(() => {

      const options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {s: value, page: '1', r: 'json'},
        headers: {
          'x-rapidapi-key': 'cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a',
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
        }
      };
      
      axios.request(options).then( (response) =>  {
        console.log(response.data)
        setContent(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    },[value])
  

  

    return (
      <div className="overview">
        {content?.Search?.map(item => {
          return (
           <Link key={item.imdbID} to={`/singleview/${item.imdbID}`}><img className="overview__picture" src={item.Poster} alt="poster" /></Link>
          )
        })}



        {/* {content?.Search?.[0].Title}
        <img src={content?.Search?.[0].Poster} alt=""/> */}
      </div>
    );
  }
  export default Overview;
  