import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        // const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
        // const json = await response.json();
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    
    useEffect(()=>{
        // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        // .then((response)=>response.json())
        // .then((json)=> {
        //   setMovies(json.data.movies)
        //   setLoading(false);
        // });
        getMovies();
        }, []);
    console.log(movies);
    return (
        <div className={style.container}>
            {loading ? <div className={style.loader}><span>Loading ...</span></div> : <div className={style.movies}>{movies.map((movie) => 
            <Movie
                key={movie.id}  // key는 react에서 map을 통해 component를 render할 때 필요 (아래는 props를 넘기는 코드)
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
            />
            )}</div>}
        </div>
        );
}

export default Home;