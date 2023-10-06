
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Admin from './Components/Admin'
import Add from './Components/Add'
import Edit from './Components/Edit'
import View from './Components/View'
import Pagenotfound from './Components/Pagenotfound'

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Admin - localHost://3000  */}
        <Route path='' element={<Admin />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='*' element={<Pagenotfound />} />
        

      </Routes>

    </div>
  );
}

export default App;
