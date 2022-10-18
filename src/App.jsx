import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import BookPage from './pages/book-page/book-page';
import HomePage from './pages/home-page/home-page';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage /> }/>
        <Route path='/book' element={<BookPage /> }/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
