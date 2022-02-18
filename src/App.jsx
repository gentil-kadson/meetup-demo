import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layouts/MainNavigation";

import { Route, Routes } from 'react-router-dom';
 
function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
        
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
