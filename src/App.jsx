import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, PageNotFound, Rooms } from './components';
import { Home, RoomDetails } from './pages';

const App = () => {
  return (

    <main className=''>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path={'/room/:id'} element={<RoomDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </main>
  );
};

export default App;