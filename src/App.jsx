import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Print from './index.jsx'
import React from 'react';
// import './index.jsx'
import History from './History.jsx'
import ExpenseForm from './ExpenseForm.jsx'
import ExpenseContainer from './ExpenseContainer.jsx'
import Newc from './Newc.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (<>
   <div className='outside'>
{/* <ExpenseContainer /> */}
{/* <Newc /> */}
<ExpenseContainer />
   </div>

   
    </>
)}

export default App
