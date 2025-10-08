import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import AddContact from './pages/AddContact/AddContact';
import EditContact from './pages/EditContact/EditContact';
import ContactList from './pages/ContactList/ContactList';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/contact" element={<ContactList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
