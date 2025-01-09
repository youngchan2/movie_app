import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();   //useParams: url에서 변하는 부분 확인함 (동적 할당된 주소) => 딕셔너리의 키에 해당하는 값 가져올 수 있음 (id)
    const getMovie = async ()=>{
        const json = (await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
        console.log(json);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>;
}

export default Detail;