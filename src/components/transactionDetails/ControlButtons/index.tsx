import React from 'react';
import Container from './styled';
import { ControlButtonInterface } from './interface';

const ControlButtons: React.FC<ControlButtonInterface> = ({ showModal, setShowModal, setAccepted }) => {

    const handleApprovedModal = () => {
        setAccepted(true);
        setShowModal(!showModal);
    };

    const handleReprovedModal = () => {
        setAccepted(false);
        setShowModal(!showModal);
    };

    return (
        <Container>
            <button
                type='button'
                className='btnSchedule'>
                    Agendar
            </button>
            <button
                type='button'
                onClick={() => handleApprovedModal()}
                className='btnApproved'>
                    Aprovar
            </button>
            <button
                type='button'
                onClick={() => handleReprovedModal()}
                className='btnReproved'>
                    Reprovar
            </button>
        </Container>
    );
};

export default ControlButtons;
