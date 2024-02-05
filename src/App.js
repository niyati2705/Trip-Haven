import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/HomePage.jsx";
import Hotel from "./pages/hotel/HotelPage.jsx";
import List from "./pages/list/ListPage.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element= {<Home/>}/>
      <Route path = "/hotels" element= {<List/>}/>
      <Route path = "/hotels/:id" element= {<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
