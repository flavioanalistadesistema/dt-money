import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceRighlight, TransactionTable, TransactionsContainer } from "./styles";
import { TransactionContext } from "../../context/TransactionsContext";



export function Transactions() {

    const { transactions } = useContext(TransactionContext)

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
            <SearchForm />
                <TransactionTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
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