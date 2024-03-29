import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Card from './Components/Card/Card';

function App() {
  const router=createBrowserRouter([
    {path:'/',
    element:<Main></Main>,children:[
      {path:'/', element: <Home></Home>},
      {path:'/Home', element: <Home></Home>},
      {path:'/About', element: <About></About>},
      {path:'/Service', element: <Card></Card>},
    ]},
  ])
  return (
    <div className="App">
      <RouterProvider
      router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
