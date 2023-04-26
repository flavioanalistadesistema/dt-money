import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobolStyle } from "./styles/global"
import { Transactions } from "./pages/Transactions"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobolStyle />
        <Transactions />
    </ThemeProvider>
  )
}

export default App
