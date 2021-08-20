import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/context";
import "./Singleview.scss";



function Singleview({id}) {

  var[ content , setContent ] = useState({});
  var emptyStar = <svg viewBox="0 0 24 24"><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"></path></svg>;
  var fullStar = <svg viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>;
  
  var[ star1, setStar1] = useState(emptyStar);
  var[ star2, setStar2] = useState(emptyStar);
  var[ star3, setStar3] = useState(emptyStar);
  var[ star4, setStar4] = useState(emptyStar);
  var[ star5, setStar5] = useState(emptyStar);


  var {db,setPictoggle} = useContext(SearchContext);

    useEffect(() => {
      setPictoggle(false);
    },[])

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
      // console.log(response.data);
      setContent(response.data)
    }).catch(function (error) {
      console.error(error);
    });


  },[id])

  useEffect(() => {
    if (db.name) {
      console.log(db)
      getStar()
      }
  },[db])

    function getStar() {
      var transaction = db.transaction(["movies"], "readwrite");
      var objectStore = transaction.objectStore("movies");
      var index = objectStore.index("id")
      var objStoreRequest = index.get(id)


      objStoreRequest.onsuccess = (event) => {
        var etargetR = event.target.result
        if (etargetR !== undefined) {
          scoreCheck(etargetR.point);
        }
      }
      objStoreRequest.onerror = () => {
        console.log("Error")
      }
    }

      function scoreCheck(score) {
        if (score === 1) {
          setStar1(fullStar);
          setStar2(emptyStar);
          setStar3(emptyStar);
          setStar4(emptyStar);
          setStar5(emptyStar);
        }
        
      if (score === 2) {
          setStar1(fullStar);
          setStar2(fullStar);
          setStar3(emptyStar);
          setStar4(emptyStar);
          setStar5(emptyStar);
        }
  
      if (score === 3) {
          setStar1(fullStar);
          setStar2(fullStar);
          setStar3(fullStar);
          setStar4(emptyStar);
          setStar5(emptyStar);
        }
        if (score === 4) {
          setStar1(fullStar);
          setStar2(fullStar);
          setStar3(fullStar);
          setStar4(fullStar);
          setStar5(emptyStar);
        }
        if (score === 5) {
          setStar1(fullStar);
          setStar2(fullStar);
          setStar3(fullStar);
          setStar4(fullStar);
          setStar5(fullStar);
        }
      }
    // console.log(id)

    function addStar(score) {
      var transaction = db.transaction(["movies"], "readwrite");
      var objectStore = transaction.objectStore("movies");
      var index = objectStore.index("id")
      var objStoreRequest = index.get(id)
      console.log(score)

      scoreCheck(score);

      objStoreRequest.onsuccess = (event) => {
        var etargetR = event.target.result
        if (etargetR === undefined) {
          objectStore.add({id:id,point:score})
          return 
        }
        etargetR.point = score;
        console.log(etargetR)
        var updateRequest = objectStore.put(etargetR)
        updateRequest.onsuccess = (event) => {
          console.log(event.target.result)
        } 
        updateRequest.onerror = (event) => {
          console.log(event)
        }
      }
      objStoreRequest.onerror = () => {
        console.log("nope")
      }
   
    }


    return (
      <div className="singleview">
        <h1>{content.Title}</h1>
        <img src={content.Poster} alt="poster" />
        <div>
          <button  onClick={() => addStar(1)} className="singleview__ratingbutton">{star1}</button>
          <button  onClick={() => addStar(2)} className="singleview__ratingbutton">{star2}</button>
          <button  onClick={() => addStar(3)} className="singleview__ratingbutton">{star3}</button>
          <button  onClick={() => addStar(4)} className="singleview__ratingbutton">{star4}</button>
          <button  onClick={() => addStar(5)} className="singleview__ratingbutton">{star5}</button>
          
        </div>
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
  