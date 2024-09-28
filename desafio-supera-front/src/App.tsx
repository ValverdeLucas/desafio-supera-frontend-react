import { GlobalProvider } from "./Global/GlobalState";
import { GlobalStyled } from "./Global/GlobalStyled"
import Router from "./Routes/Router"

function App() {
  return (
    <>
      <GlobalProvider>
        <GlobalStyled />
        <Router />
      </GlobalProvider>
    </>
  );
}

export default App;
