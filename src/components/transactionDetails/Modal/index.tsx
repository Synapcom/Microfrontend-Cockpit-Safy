import React from 'react';
import { ModalInterface } from './interface';
import Container from './style';

const Modal: React.FC<ModalInterface> = ({ accepted = true, show, setShowModal }) => {
    return (
        <Container show={show}>
            <div>
                <h1>{accepted ? 'Aprovar' : 'Reprovar'}</h1>
                <form>
                    <label>Motivo</label>
                    <select required>
                        <option>Selecione o motivo da {accepted ? 'aprovação' : 'reprovação'}</option>
                        {/* TODO - fix options */}
                    </select>

                    <label>Observações</label>
                    <textarea></textarea>

                    <span>
                        <button
                            className='btnCancel'
                            type='button'
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </button>
                        <button className={accepted ? 'btnAccept' : 'btnReproved'} type='button'>{accepted ? 'Aprovar' : 'Reprovar'}</button>
                    </span>
                </form>
            </div>
        </Container>
    );
};

export default Modal;
