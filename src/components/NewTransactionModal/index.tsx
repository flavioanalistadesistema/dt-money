import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'


export function NewTransactionMOdal() {
    return (
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <Dialog.Title>Nova transação</Dialog.Title>

                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <TransactionType>
                        <TransactionTypeButton variant='income'>
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='outcome'>
                            <ArrowCircleDown size={24} />
                            Saida
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}