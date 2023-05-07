import '../styles/App.css';
import '../styles/NavigationBar.css';
import { NavLink } from 'react-router-dom';
import FBicon from '../images/FB_icon.svg';
import IGicon from '../images/IG_icon.svg';

const NavigationBar = () => {
  return (
    <nav id='nav-bar'>
      <NavLink to='/'> 
        HOME
      </NavLink>
      <NavLink to='/campaign'> 
        GET INVOLVED
      </NavLink>
      <div style={{ marginLeft: 'auto' }}>
        <img id='nav-icon' src={IGicon} alt='Instagram logo icon'/>
        <img id='nav-icon' src={FBicon} alt='Facebook logo icon'/>
      </div>
    </nav>
  );
}

export default NavigationBar;
