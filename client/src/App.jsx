import Main from "./components/Main.jsx";
import Header from "./components/header/Header.jsx";
import GlobalStyles from "./styles/globalStyles.js";
import { PokemonsProvider } from "./hooks/useCustomContext.jsx";
function App() {
  return (
    <PokemonsProvider>
      <GlobalStyles />
      <Header />
      <Main />
    </PokemonsProvider>
  );
}

export default App;
