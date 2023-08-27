import Image from 'next/image'
import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'

const inter = Inter({ subsets: ['latin'] })

const VIDEOS = [{}]

export default function Home() {
  return (
    <div>
      <VideoCard 
      title="Volvo XC40 Recharge"
      author="Autocar India"
      timestamp="13 days ago"
      views="40k"
      />
    </div>
  )
}
