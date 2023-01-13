
import Header from "./components/Header"
import Balance from "./components/Balance";
import IncomeExxpenses from "./components/IncomeExxpenses";

import './index.css';
function App()
{
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExxpenses />

      </div>

    </>
  )
}

export default App
