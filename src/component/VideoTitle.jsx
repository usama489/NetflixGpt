import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const VideoTitle = ({title,overview})=>{
    return(
        <div className=" inset-0 bg-gradient-to-r from-black via-transparent to-transparent absolute text-white w-[30%] aspect-video mt-36  pl-2 pb-2 ml-11 ">
            <h1 className="font-bold text-5xl drop-shadow-lg">{title}</h1>
                <p className="mt-2 text-lg leading-relaxed drop-shadow-md">{overview}</p>
           
            <div className="flex mt-2 space-x-4">
                
          
            
                <button className="bg-white text-black flex  items-center font-bold hover:bg-opacity-80 px-4 py-2  rounded-lg"><PlayArrowIcon/>Play</button>
                <button className="bg-gray-400  w-28 h-12 text-lg mr-2 bg-opacity-60 rounded-lg flex items-center"><InfoOutlinedIcon/>More Info</button>
            </div>
         
        </div>
    )
}
export default VideoTitle;