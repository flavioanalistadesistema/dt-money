import { SearchFormcontainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

export function SearchForm() {
  const { feacthTransaction } = useContext(TransactionsContext)
  const SearchFormSchema = z.object({
    query: z.string(),
  })

  type SeachFormInputs = z.infer<typeof SearchFormSchema>

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SeachFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchTransactions(data: SeachFormInputs) {
    await feacthTransaction(data.query)
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
