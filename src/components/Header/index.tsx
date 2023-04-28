import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import Logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';


export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação </NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay/>

                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>

                            <Dialog.Description>
                                <p>
                                    Crie uma nova transação para você.
                                </p>
                            </Dialog.Description>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}