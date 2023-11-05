import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SorterPage from "./Pages/SorterPage";
import Root from "./Components/Root";


const router = createBrowserRouter(
  [

    {path : "/", 
    element: <Root/>,
    children:[
      {index:true, element:<HomePage/> },
      {path: "algo/:id", element:<SorterPage/> },
    ]}

  ]
)

function App() {
  return (
    <RouterProvider router={router}/>  );
}

export default App;
