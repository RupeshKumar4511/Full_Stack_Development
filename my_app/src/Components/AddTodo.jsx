import React, { useState } from 'react'

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();  
        if(!title || !desc){
            alert("Title and Description cannot be blank") ;
        }else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    
    }
    
    return (
        <div className='container my-3'>
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo title</label>
                    <input type="text" class="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo description</label>
                    <input type="text" value ={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc" />
                </div>

                <button type="submit" class="btn btn-sm btn-success"> ADD Todo</button>
            </form>
        </div>
    )
}
