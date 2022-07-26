import {Routes,Route} from 'react-router-dom'
import Home from './components/shared/home/Home'
import About from './components/shared/about/About'
import Nomatch from './components/shared/Nomatch'
import Navbar from './components/shared/Navbar'
import Lists from './components/lists/Lists'
import Todos from './components/todos/Todos'
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/lists' element={<Lists />}/>
    <Route path='/:listId/todos' element={<Todos/>}/>
    <Route path='/*' element={<Nomatch />}/>
   </Routes>
   </>
  );
}

export default App;
