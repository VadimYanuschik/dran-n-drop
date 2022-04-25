import React from 'react';
import WalletsGrid from "./components/WalletsGrid/WalletsGrid";
import {
    Routes,
    Route,
} from "react-router-dom";
import Transaction from "./pages/Transaction/Transaction";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/transaction" element={<Transaction/>}/>
            </Routes>
        </div>
    );
}

export default App;
