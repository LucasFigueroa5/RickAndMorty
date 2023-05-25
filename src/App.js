import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx';
import FormUser from './components/FormUser/FormUser.jsx'
import Scroll from './components/Scroll/Scroll';


function App() {

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);
   const username = 'lucas@gmail.com'
   const password = 'lucas123'
   const navigate = useNavigate();   
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   function login(userData) {
      if (userData.username === username && userData.password === password) {
         setAccess(true);
         navigate('/home')
   }}
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.id) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         })
         .catch(() => {
            window.alert(`¡No existe un personaje ${id} !`);
         })
   }

   function onClose(id) {
      setCharacters(characters.filter(character => character.id !== Number(id)))
   }

   const location = useLocation();



   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} /> }
         {/* <Scroll /> */}
         <Routes>            
            <Route exact path='/' element={<FormUser login={login} />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;
