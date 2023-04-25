import '../styles/App.css';
import logo from '../images/logo.svg';

const CampaignPage = () => {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        position: 'relative',
        marginTop: '170px', 
      }}>
      <div style={{ 
        backgroundColor: '#C1EDBB', 
        width: '100%', 
        height: '170px',
        position: 'fixed',
      }}/>
      <img src={logo} alt='The logo of the campaign that depicts a heart bench' style={{
        position: 'fixed',
        top: 100
      }}/>
      <h1 style={{ position: 'fixed', top: 180 }}>Get Involved</h1>
    </div>
  );
}

export default CampaignPage;
