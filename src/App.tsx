import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobolStyle } from "./styles/global"
import { Transactions } from "./pages/Transactions"
import { TransactionProvider } from "./context/TransactionsContext"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobolStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
