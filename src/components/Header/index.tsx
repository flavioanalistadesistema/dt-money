import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import Logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionMOdal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionMOdal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
