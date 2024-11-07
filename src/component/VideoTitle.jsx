import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const VideoTitle = ({title,overview})=>{
    return(
        <div className=" inset-0 bg-gradient-to-r  from-slate-900 absolute text-white w-[30%] aspect-video mt-36  pl-10 ml-16 ">
            <h1 className="font-bold text-5xl">{title}</h1>
                <p className="mt-2">{overview}</p>
           
            <div className="flex mt-2">
                
          
            
                <button className="bg-white text-black flex justify-center items-center font-bold hover:bg-opacity-50  w-28 text-lg mr-2  rounded-lg"><PlayArrowIcon/>Play</button>
                <button className="bg-gray-400  w-28 h-12 text-lg mr-2 bg-opacity-50 rounded-lg flex justify-center items-center"><InfoOutlinedIcon/>More Info</button>
            </div>
         
        </div>
    )
}
export default VideoTitle;