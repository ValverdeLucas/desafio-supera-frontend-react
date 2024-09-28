import { GlobalProvider } from "./Global/GlobalState";
import { GlobalStyled } from "./Global/GlobalStyled"
import { ToastProvider } from "./Global/ToastContext";
import Router from "./Routes/Router"

function App() {
  return (
    <>
      <ToastProvider>
        <GlobalProvider>
          <GlobalStyled />
          <Router />
        </GlobalProvider>
      </ToastProvider>
    </>
  );
}

export default App;
