import '../../styles/App.css';
import logo from '../../images/logo.svg';

const CampaignHeader = () => {
  return (
    <div style={{ 
        height: '340px',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        position: 'relative',
      }}>
      <div style={{ 
        backgroundColor: '#C1EDBB', 
        width: '100%', 
        height: '170px',
        position: 'absolute',
        top: '170px',
      }}/>
      <img src={logo} alt='The logo of the campaign that depicts a heart bench' style={{
        position: 'absolute',
        top: 100
      }}/>
      <h1 style={{ position: 'absolute', top: 180 }}>Get Involved</h1>
    </div>
  );
}

export default CampaignHeader;
