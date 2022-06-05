import React, { useState } from 'react'
import './App.css'
import TopNavbar from './components/Navbar'
import PageHeader from './components/Header'
import CardList from './components/Card'
import Footer from './components/Footer'

function App () {
  const [item, setItem] = useState(0)
  const decrement = () => {
    if (item > 0) {
      setItem(item - 1)
    }
  }
  const increment = () => {
    return setItem(item + 1)
  }
  return (
    <div className='App'>
      {/* Navabar */}

      <TopNavbar item={item} setItem={setItem} />
      {/*  Header */}

      <PageHeader />

      {/* Cards */}

      <CardList increment={increment} decrement={decrement} />

      {/* Footer */}

      <Footer />

    </div>
  )
}

export default App
