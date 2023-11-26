// App.js
import React from 'react';
//import './App.css';
import './styles/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingListsOverview from './pages/ShoppingListsOverview';
import ShoppingListDetail from './components/ShoppingListDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Shopping App</h1>
        </header>
        <Routes>
          <Route path="/" element={<ShoppingListsOverview />} />
          <Route path="/shopping-list/:listId" element={<ShoppingListDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
