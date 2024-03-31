import React, { useState,createRef } from 'react'
import {useSearchParams} from "react-router-dom"
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import Text from "../componets/Text"
function Edit() {
    const [params]=useSearchParams()
    const [count,setCount]=useState(0)
    const memeRef=createRef()
    const addText=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h2 style={{marginLeft:"200px" }}>Meme Edit</h2>
    <div ref={memeRef} className='edit_image'style={{marginLeft:"200px",width:"700px", border:"1px solid black" }}>
      <img src={params.get("url")} alt='' width="350px" />
      {
        Array(count).fill(0).map((e)=><Text/>)
      } 
    </div><br/>
    <button onClick={addText} style={{display:"flex",marginLeft:"220px"}}>Add test</button>
    <div style={{display:"flex", justifyContent:"space-evenly",  marginTop:"30px", width:"500px"}}>
   
    <button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>
         Export As JPEG
       </button>
       <button variant="success" onClick={() => exportComponentAsPDF(memeRef)}>
         Export As PDF
       </button>
       <button variant="success" onClick={() => exportComponentAsPNG(memeRef)}>
         Export As PNG
       </button>
       </div>
    </div>

  )
}   

export default Edit
