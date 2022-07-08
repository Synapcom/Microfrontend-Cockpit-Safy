import React, { useState } from 'react';
import Container from './style';
import { GrClose } from 'react-icons/gr';
import { StoresInterface } from '../../../global/interface/stores';
import api from '../../../api/api';
import { FilterInterface } from './interface';

const Filter: React.FC<FilterInterface> = ({ showFilterModal, setShowFilterModal, setDateStoreFilter, setIdStore, }) => {
    const [ stores, setStores ] = useState<StoresInterface[]>([]);
    const [ selectedStore, setSelectedStore ] = useState(0);
    const [ selectedDate, setSelectedDate ] = useState('');

    const getStores = async () => {
        const response = await api.get('/stores');

        setStores(response.data);
    };

    const handleClick = () => {
        setDateStoreFilter(selectedDate);
        setIdStore(selectedStore);
        setShowFilterModal(!showFilterModal);
    };

    React.useEffect(() => {
        getStores();
    }, []);

    return (
        <Container showModalBox={showFilterModal}>
            <span onClick={() => setShowFilterModal(!showFilterModal)}></span>
            <div>
                <header>
                    <div className='close' onClick={() => setShowFilterModal(!showFilterModal)}>
                        <p onClick={() => setShowFilterModal(!showFilterModal)}><GrClose /></p>
                        <p>Filtro</p>
                    </div>
                    <div className='buttonActions'>
                        <button
                            className='btnCancel'
                            type='button'
                            onClick={() => setShowFilterModal(!showFilterModal)}
                            >Cancelar</button>
                        <button
                            className='btnSave'
                            type='button'
                            onClick={() => handleClick()}
                        >
                            Salvar
                        </button>
                    </div>
                </header>
                <section>
                    <label>Data</label>
                    <input type='date'
                        value={selectedDate}
                        onChange={event => setSelectedDate(event.target.value)} />

                    <label>Loja</label>
                    <select
                        value={selectedStore}
                        onChange={e => setSelectedStore(Number(e.target.value))}
                    >
                        <option></option>
                        {stores.map(store => (
                            <option
                                value={store.id}
                                key={`${store.id} - ${store.name}`}>
                                    {store.name}
                            </option>
                            )
                        )}
                    </select>
                </section>
            </div>
        </Container>
    );
};

export default Filter;

