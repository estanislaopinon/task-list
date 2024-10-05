import { Requerimiento } from "./Requerimiento";

export const ListadoRequerimientos = ({ requerimientos, eliminarRequerimiento }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            <h2 className="font-black text-3xl text-center">Listado de Requerimientos</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
                <span className="text-indigo-600 font-bold">requerimientos</span> aquí
            </p>

            {requerimientos.length ? (
                requerimientos.map(requerimiento => (
                    <Requerimiento
                        key={requerimiento.proyecto}
                        requerimiento={requerimiento}
                        eliminarRequerimiento={eliminarRequerimiento}  // Nueva función de eliminación
                    />
                ))
            ) : (
                <p className="text-center">No hay requerimientos aún</p>
            )}
        </div>
    );
};
