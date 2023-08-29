import Image from 'next/image'
import { Inter } from 'next/font/google'
import { VideoGrid } from '@/components/VideoGrid'
import { AppBar } from '@/components/AppBar'
import { SideBar } from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

const VIDEOS = [
  {
    title:"Volvo XC40 Recharge",
    author:"Autocar India",
    timestamp:"13 days ago",
    views:"40k"
  },
  
  {
    title:"Volvo XC40 Recharge",
    author:"Autocar India",
    timestamp:"13 days ago",
    views:"40k"
  },
  {
    title:"Volvo XC40 Recharge",
    author:"Autocar India",
    timestamp:"13 days ago",
    views:"40k"
  },
  {
    title:"Volvo XC40 Recharge",
    author:"Autocar India",
    timestamp:"13 days ago",
    views:"40k"
  },
  {
    title:"Volvo XC40 Recharge",
    author:"Autocar India",
    timestamp:"13 days ago",
    views:"40k"
  }
]

export default function Home() {
  return (
    <div>

      {/* App Bar */}
      <AppBar />

      {/* Sidebar and Video Grid */}
      <div className="grid grid-cols-10 lg:grid-cols-12">
        
        <div className='block hidden lg:block col-span-2 mt-4'>
          <SideBar />
        </div>
        {/* Video grid */}
        <div className='col-span-10'>
          <VideoGrid 
          videosArr={VIDEOS}
          />
        </div>
      </div>
    </div>
  )
}
