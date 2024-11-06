const VideoTitle = ({title,overview})=>{
    return(
        <div className="border-solid border-2 border-red-400  mt-36 ml-8">
            <h1 className="font-bold text-2xl">{title}</h1>
                <p className="w-1/2 ">{overview}</p>
           
            <div className="flex ">
                <button className="bg-gray-400  w-28 text-lg mr-2 bg-opacity-50 rounded-lg">▶Play</button>
                <button className="bg-gray-400  w-28 h-12 text-lg mr-2 bg-opacity-50 rounded-l">More Info</button>
            </div>
         
        </div>
    )
}
export default VideoTitle;