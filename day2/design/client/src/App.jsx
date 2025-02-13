import FlightList from './flight/FlightList'
import FlightCreate from './flight/FlightCreate'
import FlightView from './flight/FlightView'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<FlightList/>}/>
            <Route path="/flight/list" element={<FlightList/>}/>
            <Route path="/flight/create" element={<FlightCreate />}/>
            <Route path="/flight/view/:id" element={<FlightView/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;