import './index.css'

// ROTAS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Footer } from './components/footer/footer'
import { FormRecipe } from './pages/form/formRecipe'
import { Recipes } from './pages/recipes/recipes'
import { Search } from './pages/search/search'
import { Details } from './pages/details'

function App() {
  return (    
      <Router>
        <div className="container">
        <Routes>
          <Route path='/' element={<Recipes />} />
          <Route path='/details/:name' element={<Details />} />
          <Route path='/addRecipe' element={<FormRecipe />} />
          <Route path='/search/:name' element={<Search />} />
        </Routes>
        </div>
        {/* <Footer className="footer"/> */}
      </Router>    
  )
}

export default App
