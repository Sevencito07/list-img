import React from 'react'
import { addImage, deleteImage} from '../testSlice/testSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './styles/styles.css'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function ImageList() {
 
    const test= useSelector((state)=> state.test)
    const  dispatch = useDispatch()
    const [url, setUrl] = useState({
      newImageURl:''
    })

    const handelChange =(e)=>{
      setUrl({
        ...url, [e.target.name]: e.target.value
      })
      
    }
    const handelSubmit=(e)=>{
      e.preventDefault()
      dispatch(addImage({...url, id:uuid()}))
      
    }
    const handelDelete=(id)=>{
      dispatch(deleteImage(id))
    }
  return (
    
      <div className='conteiner-form' >
         <form onSubmit={handelSubmit}>
         <input placeholder='https://example/th/id/O/hbdfttt8833gddhhhd77' type="text" name="newImageURl"onChange={handelChange} ></input>
           <button  >list image</button>
         </form>
         <h1>list a URl image</h1>
        <div className='conteiner-general'>
         {test.map((test)=>(
              <div key={test.id} className="counter-picture">
               <img src={test.newImageURl} />
               <p>`ID:{test.id}`</p>
               <button onClick={()=>handelDelete(test.id)} >delete</button>
              </div>
            ))
              
            }
        </div>
      </div >
    
      
      
  )

}



          
        