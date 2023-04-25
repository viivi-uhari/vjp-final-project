import '../../styles/App.css';
import logo from '../../images/logo.svg';

const ProgressBar = () => {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <div style={{
        backgroundColor: '#EFECEC', 
        width: '80%', 
        height: '25px',
        borderRadius: '15px',
        marginBottom: '15px'
      }}>
        <div style={{ 
            background: 'linear-gradient(270deg, #FF1F1F 0%, #FFCE1F 100%, #FF1F1F 100%)',
            width: '80%', 
            height: '25px',
            borderRadius: '15px 0px 0px 15px',
            marginBottom: '15px'
        }}/>
      </div>
      <h3 style={{ margin: '10px' }}>7 109 signatures</h3>
      <p style={{ margin: '5px' }}>2 891 remaining</p>
    </div>
  );
}

export default ProgressBar;
