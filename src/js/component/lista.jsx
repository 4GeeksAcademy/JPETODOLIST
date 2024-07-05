import React, { useState } from "react";

const Lista = () => {
    const [tareas, setTareas] = useState([]);
    const [valorInput, setValorInput] = useState("");

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <h1 className="mt-5">Lista de tareas</h1>
                <div className="inline">
                    <ul className="list-group">
                        
                        <input
                            type="text"
                            placeholder="añade tarea"
                            onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    setTareas(tareas.concat(valorInput));
                                    setValorInput("");
                                }
                            }}
                            value={valorInput}
                            onChange={(e) => setValorInput(e.target.value)}
                        />
                    </ul>
                    {tareas.length === 0 ? (
                        <p className="text-center">
                            No hay tareas
                        </p>
                    ) : (
                            <>
                                {tareas.map((item, index) => (
                                    <ul key={index} className="nuevatarea">
                                        {item}
                                        <button
                                            className="btn btn-danger eliminar-btn"
                                            onClick={() => setTareas(tareas.filter((t, currentIndex) => index !== currentIndex))}
                                        >
                                            Eliminar
                                        </button>
                                    </ul>
                                ))}
                                {/* Mostrar el número total de tareas */}
                                <ul className="text-center">
                                    Total de tareas: {tareas.length}
                                </ul> 
    
                            </>
                        
                        )}
                </div>
            </div>
        </>
    );
};

export default Lista;

