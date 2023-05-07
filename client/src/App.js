import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import CampaignPage from './components/CampaignPage';
import NavigationBar from './components/NavigationBar';

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
