import Modal from 'react-modal';
import { Container, TransactionTypeContainer, Radiobox } from './styles';
import  closeImg  from '../../assets/close.svg';
import incomeIgm from '../../assets/income.svg';
import outcomeIgm from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
// import { api } from '../../services/api';

interface INewTransactionProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionProps) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        // await createTransaction({
        //     title,
        //     amount,
        //     category,
        //     type,
        // });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content" >

            <button type="button"
                    onClick={onRequestClose}
                    className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}/>

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}/>

                <TransactionTypeContainer>
                    <Radiobox
                        type="button"
                        activeColor="green"
                        isActive={type === 'deposit'}
                        onClick={() => { setType('deposit') }}>
                        <img src={incomeIgm} alt="Entrada" />
                        <span>Entrada</span>
                    </Radiobox>

                    <Radiobox
                        type="button"
                        activeColor="red"
                        isActive={type === 'withdraw'}
                        onClick={() => { setType('withdraw') }}>
                        <img src={outcomeIgm} alt="Saída" />
                        <span>Saída</span>
                    </Radiobox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)} />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}