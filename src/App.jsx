import React, { useState } from 'react';
import ListaDeMesas from './ListaDeMesas';
import MesaStates from './MesaStates';
import mesaRestaurante from './Images/mesaRestaurante.jpg'
import './App.css'

const App = () => {
    const [mesas, setMesas] = useState([
        { numero: 1, capacidad: 4, estado: MesaStates.DISPONIBLE },
        { numero: 2, capacidad: 6, estado: MesaStates.DISPONIBLE },
        { numero: 3, capacidad: 2, estado: MesaStates.DISPONIBLE },
        { numero: 4, capacidad: 3, estado: MesaStates.DISPONIBLE },
        { numero: 5, capacidad: 8, estado: MesaStates.DISPONIBLE },
    ]);

    const [listaDeEspera, setListaDeEspera] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newClientName, setNewClientName] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const reservarMesa = (numeroMesa) => {
        const mesa = mesas.find((m) => m.numero === numeroMesa);

        if (mesa && mesa.estado === MesaStates.DISPONIBLE) {
            setMesas(
                mesas.map((m) =>
                    m.numero === numeroMesa ? { ...m, estado: MesaStates.RESERVADA } : m
                )
            );
        } else {
            setListaDeEspera([...listaDeEspera, { nombre: newClientName }]);
            setNewClientName('');
            setShowForm(false);
        }
    };

    const liberarMesa = (numeroMesa) => {
        setMesas(
            mesas.map((m) =>
                m.numero === numeroMesa ? { ...m, estado: MesaStates.DISPONIBLE } : m
            )
        );

        if (EliminarDeListaEspera && listaDeEspera.length > 0) {
            setListaDeEspera(listaDeEspera.slice(1));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newClientName.trim() === '') {
            setShowMessage(true);
            return;
        }

        setListaDeEspera([...listaDeEspera, { nombre: newClientName }]);
        setNewClientName('');
        setShowForm(false);
        setShowMessage(false);
    };

    const EliminarDeListaEspera = (index) => {
        const updatedListaEspera = [...listaDeEspera];
        updatedListaEspera.splice(index, 1);
        setListaDeEspera(updatedListaEspera);
    };

    return (
        <div className='App'>
            <div className='titulo-container'>
                {/* <img src={mesaRestaurante} alt='Gestión de reservas' className='titulo-imagen' /> */}
                <h1 className='titulo'>Gestion de reservas</h1>
            </div>
            <ListaDeMesas
                mesas={mesas}
                onReservar={reservarMesa}
                onLiberar={liberarMesa}
                listaDeEspera={listaDeEspera}
                showForm={showForm}
                newClientName={newClientName}
                setShowForm={setShowForm}
                setNewClientName={setNewClientName}
                handleSubmit={handleSubmit}
                showMessage={showMessage}
                EliminarDeListaEspera={EliminarDeListaEspera}
            />
        </div>
    );
};

export default App;