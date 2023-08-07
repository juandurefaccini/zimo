import Intake from '@/components/Intake'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'


function HomeWelcomeTitle() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center tracking-tight">
        🍼 Zimo 🍼
      </h1>
    </>

  )
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-5 w-screen'>
      <div className='flex-none'>
        <HomeWelcomeTitle />
      </div>
      <div className='w-full'>
        <Intake />
      </div>
    </main >
  )
}
