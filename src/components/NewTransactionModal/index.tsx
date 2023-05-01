import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'


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

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}