
import Header from "./components/Header"
import Balance from "./components/Balance";
import IncomeExxpenses from "./components/IncomeExxpenses";
import TransactionList from "./components/TransactionList";

import './index.css';
function App()
{
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExxpenses />
        <TransactionList />
      </div>

    </>
  )
}

export default App
