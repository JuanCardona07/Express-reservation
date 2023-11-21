import React from 'react';
import MesaStates from './MesaStates';

const Mesa = ({ mesa, onReservar, onLiberar }) => {
    return (
        <tr>
            <td>{mesa.numero}</td>
            <td>{mesa.capacidad}</td>
            <td>{mesa.estado}</td>
            <td>
                <button
                    className={mesa.estado === MesaStates.DISPONIBLE ? 'reservar' : 'liberar'}
                    onClick={() => {
                        mesa.estado === MesaStates.DISPONIBLE
                            ? onReservar(mesa.numero)
                            : onLiberar(mesa.numero);
                    }}
                >
                    {mesa.estado === MesaStates.DISPONIBLE ? 'Reservar' : 'Liberar'}
                </button>
            </td>
        </tr>
    );
};

export default Mesa;