import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobolStyle } from "./styles/global"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobolStyle />
      <h1>APP - start new project</h1>
    </ThemeProvider>
  )
}

export default App
