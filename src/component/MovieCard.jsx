import { IMG_CDN_URL } from "../../utils/mockedData";

const MovieCard = ({posterPath})=>{
    // console.log(posterPath);
    return(
        <div className="w-40  pr-1">
           
            <img alt="Movie Card" src={IMG_CDN_URL+ posterPath}/>

        </div>
    )
}
export default MovieCard;