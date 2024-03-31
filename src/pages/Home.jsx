import React, { useEffect, useState } from 'react'
import {getAllMeme} from "../api/MemeApi"
import Meme from '../componets/Meme'
function Home() {
    let [data,setData]=useState()
    useEffect(()=>{
        getAllMeme().then((e)=>setData(e.data.memes))
    },[])
  return (
    <div className='row'>
        {
            data&&data.map((res)=><Meme url={res.url} name={res.name}/>)
        }
    </div>
  )
}

export default Home
