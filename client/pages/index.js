import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'
import Title from '../components/Title'

export default function Home() {
  return (
    <div className='w-[80%] m-[auto]'>
       <div className="container">
         <Title/>
         <Slider/>
       </div>
    </div>
  )
}
