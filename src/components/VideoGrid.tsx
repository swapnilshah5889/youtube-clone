import React from 'react'
import VideoCard from './VideoCard'


export const VideoGrid = (props:any) => {
  return (
    <div className='grid gap-5 p-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {props.videosArr.map((videoJson:any) => {

            return (
            <VideoCard 
            title={videoJson.title}
            author={videoJson.author}
            timestamp={videoJson.timestamp}
            views={videoJson.views}/>
            );
        })}
    </div>
  )
}
