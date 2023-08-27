import React from 'react'

const VideoCard = (props:any) => {
  return (
    <div className='p-3'>
        <img src="/photo.png" className='rounded-xl' alt='img'></img>
        <div className='grid grid-cols-12 p-2 '>
            
            <div className='col-span-1'>
                <img className='rounded-full w-12 h-12' 
                src="/photo.png" alt='img'></img>
            </div>

            <div className='col-span-11 pl-1'>
                <div className='col-span-11'>
                    {props.title}
                </div>
                <div className='col-span-11 text-gray-400 text-base'>
                    {props.author}
                </div>
                <div className='col-span-11 text-gray-400 text-base'>
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard;
