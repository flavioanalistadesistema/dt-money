import { SearchFormcontainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'


export function SearchForm() {
    const SearchFormSchema = zod.object({
        query: zod.string()
    })

    type SearchFormData = zod.infer<typeof SearchFormSchema>

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormData>({
        resolver: zodResolver(SearchFormSchema)
    })

    async function handleSearch(data: any) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
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