import '../../styles/App.css';

const neededSignatures = 10000;
const oldSignatures = 7108;

const ProgressBar = ({ newSignatures }) => {

  const gottenSignatures = newSignatures.length;
  const totalGottenSignatures = oldSignatures + gottenSignatures;

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <div style={{
        backgroundColor: '#E3DEDE', 
        width: '80%', 
        height: 20,
        borderRadius: 15,
        marginBottom: 15
      }}>
        <div style={{ 
            background: 'linear-gradient(270deg, #FF1F1F 0%, #FFCE1F 100%, #FF1F1F 100%)',
            width: `${ (totalGottenSignatures) / neededSignatures * 100 }%`, 
            height: 20,
            borderRadius: '15px 0px 0px 15px',
            marginBottom: 15
        }}/>
      </div>
      <h3 style={{ margin: 10 }}>{totalGottenSignatures} signatures</h3>
      <p style={{ margin: 5 }}>{neededSignatures - totalGottenSignatures} remaining</p>
    </div>
  );
}

export default ProgressBar;
