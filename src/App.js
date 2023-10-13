import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomeLayout from './Layout/HomeLayout';
import Blogs from './Pages/Blogs';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Blogs/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
