import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { TransactionContext } from '../../context/TransactionsContext'


export function NewTransactionMOdal() { 
    const { createTransaction } = useContext(TransactionContext)
    const NewTransactionSchema = zod.object({
        description: zod.string(),
        price: zod.number(),
        category: zod.string(),
        type: zod.enum(['income', 'outcome'])
    })

    type NewTransactionFormData = zod.infer<typeof NewTransactionSchema>

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewTransactionFormData>({
        resolver: zodResolver(NewTransactionSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateadTransaction(data: NewTransactionFormData) {
        await createTransaction(data)
        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <Dialog.Title>Nova transação</Dialog.Title>

                <form action="" onSubmit={handleSubmit(handleCreateadTransaction)}>
                    <input 
                        type="text" 
                        placeholder='Descrição' 
                        required
                        {...register('description')}
                    />
                    <input 
                        type="number" 
                        placeholder='Preço' 
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input 
                        type="text" 
                        placeholder='Categoria' 
                        required
                        {...register('category')}
                    />
                    <Controller 
                        control={control}
                        name='type'
                        render={({field}) => {                            
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant='income' value='income'>
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant='outcome' value='outcome'>
                                        <ArrowCircleDown size={24} />
                                        Saida
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />
                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}