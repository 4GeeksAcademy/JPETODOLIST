import React, {useState} from "react";


const Lista = () => {
    
    const [tareas, setTareas] = useState([]);
    const [valorInput, setValorInput] = useState ("")

    
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <h1>Lista de tareas</h1>
                <ul className="inline">
                    <li>
                        <input 
                        type="text" 
                        placeholder="añade tarea"
                        onKeyUp= {(e)=>{if(e.key==="Enter"){setTareas(tareas.concat(valorInput)); setValorInput("")}}}
                        value = {valorInput}
                        onChange={(e) => setValorInput(e.target.value)}
                        />
                    </li>
                    {tareas.map((item, index)=> (
                        <li>
                            {item}
                            <button
                                className="btn btn-danger"
                                onClick={() => setTareas(tareas.filter((t,currentIndex)=> index != currentIndex)) }
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    {tareas.length} tareas
                </div>
            </div>
        </>
        
                    
                   
                            
                            
         
    )
}


export default Lista