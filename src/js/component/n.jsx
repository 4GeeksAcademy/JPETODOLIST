import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Lista = () => {
    // Definimos dos estados: uno para almacenar la lista de tareas y otro para manejar el valor del input.
    const [tareas, setTareas] = useState([]);
    const [valorInput, setValorInput] = useState("");

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <h1>Lista de tareas</h1>
                <ul className="list-group w-50">
                    <li className="list-group-item">
                        {/* Input para añadir una nueva tarea */}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Añade tarea"
                            onKeyUp={(e) => {
                                // Si se presiona la tecla Enter, añadimos la tarea a la lista
                                if (e.key === "Enter" && valorInput.trim() !== "") {
                                    setTareas(tareas.concat(valorInput)); // Añadimos la nueva tarea a la lista
                                    setValorInput(""); // Limpiamos el input
                                }
                            }}
                            value={valorInput} // Valor del input controlado por el estado
                            onChange={(e) => setValorInput(e.target.value)} // Actualizamos el estado con el valor del input
                        />
                    </li>
                    {tareas.length === 0 ? (
                        <li className="list-group-item">No hay tareas</li> // Si no hay tareas, mostramos este mensaje
                    ) : (
                        <>
                            {tareas.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{item}</span> {/* Mostramos la tarea */}
                                    <button
                                        className="btn btn-danger btn-sm"
                                        // Botón para eliminar la tarea
                                        onClick={() => setTareas(tareas.filter((t, currentIndex) => index !== currentIndex))}
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                            <li className="list-group-item">Total de tareas: {tareas.length}</li> {/* Mostrar el número total de tareas */}
                        </>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Lista;
