import { SearchFormcontainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from "react";
import { TransactionContext } from "../../../../context/TransactionsContext";


export function SearchForm() {

    const { fetchTransactions } = useContext(TransactionContext)

    const SearchFormSchema = zod.object({
        query: zod.string()
    })

    type SearchFormData = zod.infer<typeof SearchFormSchema>

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<SearchFormData>({
        resolver: zodResolver(SearchFormSchema)
    })

    async function handleSearch(data: SearchFormData) {
        await fetchTransactions(data.query)
        reset()
    }

    return (
        <SearchFormcontainer onSubmit={handleSubmit(handleSearch)}>
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