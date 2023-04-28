import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceRighlight, TransactionTable, TransactionsContainer } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
            <SearchForm />
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceRighlight variant="income">
                                    R$ 12.000,00
                                </PriceRighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceRighlight variant="oncome">
                                    - 59,00
                                </PriceRighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2023</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionsContainer>
        </div>
    )
}