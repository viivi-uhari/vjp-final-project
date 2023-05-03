import '../styles/App.css';
import Video from './Video';
import logo from '../images/logo.svg';

const FrontPage = () => {
  return (
    <div className="App">
      <img src={logo} alt='The logo of the campaign that depicts a heart bench' />
      <h1>Inclusive Helsinki</h1>
      <Video/>
    </div>
  );
}

export default FrontPage;
