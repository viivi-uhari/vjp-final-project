import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import CampaignPage from './components/CampaignPage';
import NavigationBar from './components/NavigationBar';

// This application is divided into two pages: 
// the front page that displays general information,
// and the campaign page where a user can sign the campaign's petition

const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path='/campaign' element={<CampaignPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
