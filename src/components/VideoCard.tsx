import React from 'react'

const VideoCard = (props:any) => {
  return (
    <div className='cursor-pointer rounded-lg hover:bg-gray-800'>
        <img src="/photo.png" className='rounded-xl mx-auto w-full object-cover' alt='img' />
        <div className='grid grid-cols-12 p-2 '>
            
            <div className='col-span-1'>
                <img className='rounded-full w-15 h-15 mt-1' 
                    src="/thumb.jpg" alt='img'></img>
            </div>

            <div className='col-span-11 pl-3'>
                <div className='col-span-11'>
                    {props.title}
                </div>
                <div className='col-span-11 text-gray-400 text-sm'>
                    {props.author}
                </div>
                <div className='col-span-11 text-gray-400 text-sm'>
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard;
