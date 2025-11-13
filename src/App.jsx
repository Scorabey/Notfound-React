import './App.css'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import AddContact from './pages/AddContact/AddContact';
import EditContact from './pages/EditContact/EditContact';
import ContactList from './pages/ContactList/ContactList';
import Header from './components/header/header';
import Example from './components/example/Example';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState ([
    {
      id: uuidv4(), 
      firstName: 'Danijl',
      lastName: 'Shatilov',
      phone: '0973435734',
      email: 'satlovdanijl@gmail.com',
      avatar: 'avatar.com',
      gender: 'male',
      status: 'work',
      adress: {
        street: 'Zdolbuniv',
        city: 'Rivne',
        zipCode: '35001',
        country: 'Ukraine'
      },
      favorite: false
    }
  ]
  );

  const handleAddContact = (newcontact) => {
    setUser(prevUser => [...prevUser, newcontact]);
  }

  return (
    <>
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/add" element={<AddContact addNewContact={handleAddContact} />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/contact" element={<ContactList user={user} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

