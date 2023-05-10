import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceRighlight, TransactionTable, TransactionsContainer } from "./styles";

interface TransactionProps{
    id: string;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {

    const [transaction, setTransaction] = useState<TransactionProps[]>([])

    async function getTransaction() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
        setTransaction(data)
    }

    useEffect(() => {
        getTransaction()
    }, [])

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
            <SearchForm />
                <TransactionTable>
                    <tbody>
                        {transaction.map(transaction => {
                            return(
                                <tr>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceRighlight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceRighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    )
}