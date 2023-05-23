import React, { useLayoutEffect, useState } from 'react';
import '../Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { ADDTONOTE, REMOVETONOTE } from '../Redux/Action/index'



function Home() {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = Mode === 'Enable Dark Mode' ? 'white' : '#4d4e4f'
    })

    const addNote = useSelector(state => state.modifyNotes.list)
    const dispatch = useDispatch()
    const [getNotes, setNotes] = useState('')

    const Mode = useSelector(state => state.swtichMode)
    const [displayAlert,setAlert]= useState(false)

    const HandleClick = () => {
        if(getNotes===' '){
            setAlert(true)
            setTimeout(() => {
                setAlert(false) 
            }, 3000);
        }else{
        setAlert(false)
        dispatch(ADDTONOTE(getNotes))
        setNotes(' ')}
    }

    const handleDelete = (id) => {
        dispatch(REMOVETONOTE(id))
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            setNotes(e.target.value);
        }
    };

    return (
        <>
            {displayAlert && 
            <div class="alert alert-warning" role="alert">
                Please enter some task to add it in your Todo list
            </div>
}

            <div className='conatiner my-3' style={{ backgroundColor: Mode === 'Enable Dark Mode' ? '#04597d' : '#4d4e4f', color: 'white', height: "100px" }}>
                <h1 className='text-center my-2' style={{ top: '15%', position: 'relative', color: Mode === 'Enable Dark Mode' ? 'black' : 'white' }} >ToDo  App</h1>
            </div>



            <div>
                <input onChange={(e) => setNotes(e.target.value)} onKeyDown={(e) => onEnter(e)} value={getNotes} style={{ border: '2px solid', height: '100px', width: '100%', maxWidth: "600px", left: '50%', position: 'relative', transform: 'translate(-50%)' }} />
            </div>



            <div className='my-2 mx-3' style={{ display: 'flex', justifyContent: 'center' }}>
                <button className='mx-3' style={{ width: '250px', borderRadius: '10px', border: 'none', height: '50px' }} onClick={HandleClick} >Add Task </button>
            </div>



            <h3 className='taskText text-center' style={{ color: Mode === 'Enable Dark Mode' ? 'black' : 'white' }}>Total Number of Task = {addNote.length}</h3>

            <>
                <div className='container my-5' style={{ backgroundColor: Mode === 'Enable Dark Mode' ? 'white' : '#4d4e4f', padding: '10px', borderRadius: '5px' }}>
                    {
                        addNote.map((ele) => (
                            <div className='d-flex justify-content-between my-3 innerDiv' key={ele.id}>
                                <h3 className='text-center mx-4 my-2' >
                                    {ele.note}
                                </h3>
                                <i class="fa fa-trash-o my-1 mx-2" aria-hidden="true" style={{ fontSize: '40px' }} onClick={() => handleDelete(ele.id)}></i>
                            </div>
                        ))}
                </div>

            </>

        </>
    )
}

export default Home