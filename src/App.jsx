import Appointment from './components/Appointment'
import Doctor from './components/Doctor'
import LibraryBooks from './components/LibraryBooks'
import LibraryHeader from './components/LibraryHeader'
import LibraryLogin from './components/LibraryLogin'
import Office from './components/Office'
import LibraryOffices from './components/LibraryOffices'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <div className="text-center">
      <LibraryHeader />
        

        <Routes>
          {/* <Route path="/" element={<LibraryLogin />} /> */}
          <Route path="/office" element={<Office />} />
          <Route path="/offices" element={<LibraryOffices />} />
          <Route path="/books" element={<LibraryBooks />} />
          <Route path="/doctors" element={<Doctor />}/>
          <Route path="/appointment" element={<Appointment />}/>
          <Route path="*" element={<LibraryLogin />} />
        </Routes>
    </div>
  );
}

export default App
