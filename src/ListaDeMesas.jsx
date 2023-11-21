import React from 'react';
import Mesa from './Mesa';

const ListaDeMesas = ({
    mesas,
    onReservar,
    onLiberar,
    listaDeEspera,
    showForm,
    newClientName,
    setShowForm,
    setNewClientName,
    handleSubmit,
    showMessage,
    EliminarDeListaEspera,
}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Número de Mesa</th>
                        <th>Capacidad comensales</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mesas.map((mesa) => (
                        <Mesa
                            key={mesa.numero}
                            mesa={mesa}
                            onReservar={onReservar}
                            onLiberar={(numeroMesa) => onLiberar(numeroMesa, true)}
                        />
                    ))}
                </tbody>
            </table>

            <div>
                <button onClick={() => setShowForm(true)}>Lista de espera</button>
                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            value={newClientName}
                            onChange={(e) => setNewClientName(e.target.value)}
                            placeholder='Ingrese su nombre'
                        />
                        <button type='submit'>Agregar</button>
                    </form>
                )}
                {showMessage && newClientName.trim() === '' && (
                    <p>Por favor, ingrese un nombre a la lista de espera</p>
                )}
                {!showMessage && listaDeEspera.length > 0 && (
                    <ul>
                        {listaDeEspera.map((cliente, index) => (
                            <li key={index}>
                                {cliente.nombre}
                                <button onClick={() => EliminarDeListaEspera(index)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ListaDeMesas;