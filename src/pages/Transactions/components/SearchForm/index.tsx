import { SearchFormcontainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export function SearchForm() {
    const SearchFormSchema = z.object({
        query: z.string().min(5, {message: 'required'})
    })

    type SeachFormInputs = z.infer<typeof SearchFormSchema>

    const {
            register,
            handleSubmit,
            formState: {isSubmitting}
        } = useForm<SeachFormInputs>({
        resolver: zodResolver(SearchFormSchema)
    })


    async function handleSearchTransactions(data: SeachFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 3000))
        console.log({data});
    }

    return (
        <SearchFormcontainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}
            />
             <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
             </button>
             
        </SearchFormcontainer>
    )
}