import axios from "axios";
import { useEffect, useState } from "react";


function Singleview({id}) {

  var[ content , setContent ] = useState({});

  useEffect( () => {
    const options = {
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: {i: id, r: 'json'},
      headers: {
        'x-rapidapi-key': 'cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a',
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setContent(response.data)
    }).catch(function (error) {
      console.error(error);
    });


  },[id])

    console.log(id)

    return (
      <div className="Overview">
        <h1>{content.Title}</h1>
        <img src={content.Poster} alt="poster" />
        <h3>Year</h3>
        <p>{content.Year}</p>
        <h3>Run Time</h3>
        <p>{content.Runtime}</p>
        <h3>Imdb Rating</h3>
        <p>{content.imdbRating}</p>
        <h3>Plot</h3>
        <p>{content.Plot}</p>
      </div>
    );
  }
  export default Singleview;
  