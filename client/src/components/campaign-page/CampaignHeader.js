import '../../styles/App.css';
import '../../styles/CampaignHeader.css';
import logo from '../../images/logo.svg';

const CampaignHeader = () => {
  return (
    <div id='campaign-header' style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        position: 'relative',
      }}>
      <div id='green-background' style={{ 
        backgroundColor: '#C1EDBB', 
        width: '100%',
        position: 'absolute',
      }}/>
      <img id='logo' src={logo} alt='The logo of the campaign that depicts a heart bench' style={{
        position: 'absolute'
      }}/>
      <h1 id='heading' style={{ position: 'absolute' }}>Get Involved</h1>
    </div>
  );
}

export default CampaignHeader;
