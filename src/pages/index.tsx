import Image from 'next/image'
import { Inter } from 'next/font/google'
import { VideoGrid } from '@/components/VideoGrid'
import { AppBar } from '@/components/AppBar'

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

      {/* Video grid */}
      <VideoGrid 
      videosArr={VIDEOS}
      />
    </div>
  )
}
