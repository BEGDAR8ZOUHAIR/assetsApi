
import Header from "./components/Header"
import Balance from "./components/Balance";
import IncomeExxpenses from "./components/IncomeExxpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

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
        <AddTransaction />
      </div>

    </>
  )
}

export default App
