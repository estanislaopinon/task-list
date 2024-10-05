export const Requerimiento = ({ requerimiento, eliminarRequerimiento }) => {
    const { proyecto, tipo, personaAsignada, storyPoints, prioridad, fechaCreacion, resumen } = requerimiento;

    const handleEliminar = () => {
        eliminarRequerimiento(proyecto); // Llama a la función con el identificador del requerimiento
    };

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Proyecto: {''}
                <span className="font-normal normal-case">{proyecto}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Tipo de tarea: {''}
                <span className="font-normal normal-case">{tipo}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Persona asignada: {''}
                <span className="font-normal normal-case">{personaAsignada}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
                <span className="font-normal normal-case">{storyPoints}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
                <span className="font-normal normal-case">{prioridad}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Creación: {''}
                <span className="font-normal normal-case">{fechaCreacion}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
                <span className="font-normal normal-case">{resumen}</span>
            </p>

            <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleEliminar}
            >
                Eliminar
            </button>
        </div>
    );
};
