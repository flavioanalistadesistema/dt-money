import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export function NewTransactionMOdal() {

    const newTransactionFormSchema = z.object({
        description: z.string(),
        price: z.number(),
        category: z.string(),
        type: z.enum(['income', 'outcome'])
    })

    type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

    const {
            control,
            register,
            handleSubmit,
            formState: {isSubmitting}
        } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: "income"
        }

    })


    async function handleNewTransactionForm(data: NewTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 3000))
        console.log({data});
    }

    return (
        <Dialog.Portal>
            <Overlay/>
            <Content>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <Dialog.Title>Nova transação</Dialog.Title>

                <form onSubmit={handleSubmit(handleNewTransactionForm)}>
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
                        {...register('price', {valueAsNumber: true})}
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
                        render={({ field }) => {
                            console.log({field});

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