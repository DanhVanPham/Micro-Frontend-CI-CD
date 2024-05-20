import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Pricing from './components/Pricing'
import Landing from './components/Landing'

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route index element={<Landing />} />
                <Route path='/pricing' element={<Pricing />} />
            </Routes>
        </div>
    )
}

export default App