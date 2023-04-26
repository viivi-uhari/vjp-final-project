import '../../styles/App.css';

const ProgressBar = () => {

  const neededSignatures = 10000;
  const gottenSignatures = 7109;

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
        height: 25,
        borderRadius: 15,
        marginBottom: 15
      }}>
        <div style={{ 
            background: 'linear-gradient(270deg, #FF1F1F 0%, #FFCE1F 100%, #FF1F1F 100%)',
            width: `${gottenSignatures / neededSignatures * 100}%`, 
            height: 25,
            borderRadius: '15px 0px 0px 15px',
            marginBottom: 15
        }}/>
      </div>
      <h3 style={{ margin: 10 }}>{gottenSignatures} signatures</h3>
      <p style={{ margin: 5 }}>{neededSignatures - gottenSignatures} remaining</p>
    </div>
  );
}

export default ProgressBar;
