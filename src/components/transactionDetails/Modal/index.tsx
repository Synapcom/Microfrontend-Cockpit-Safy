import React from 'react';
import { ModalInterface } from './interface';
import Container from './style';

const Modal: React.FC<ModalInterface> = ({ accepted = true, show, setShowModal }) => {
    return (
        <Container show={show}>
            <div>
                <h1>{accepted ? 'Aprovar' : 'Reprovar'}</h1>
                <form>
                    {
                        accepted ?
                        <></>
                        : (
                            <React.Fragment>
                                <label>Motivo</label>
                                <select required>
                                    <option>Selecione o motivo da reprovação</option>
                                    <option>Cancelado pelo cliente</option>
                                    <option>Fraude confirmada</option>
                                    <option>Reprovado</option>
                                    <option>Suspeita de fraude</option>
                                </select>
                            </React.Fragment>
                        )
                    }


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
