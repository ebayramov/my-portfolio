import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider }  from "styled-components"
import { GlobalStyles, Theme } from './style'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles/>
    <App />
  </ThemeProvider>
)
