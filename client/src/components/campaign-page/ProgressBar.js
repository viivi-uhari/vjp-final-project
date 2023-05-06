import '../../styles/App.css';
import '../../styles/ProgressBar.css';

const neededSignatures = 10000;
const oldSignatures = 7108;

const ProgressBar = ({ newSignatures }) => {

  const gottenSignatures = newSignatures.length;
  const totalGottenSignatures = oldSignatures + gottenSignatures;

  return (
    <div className='progress-bar-template'>
      <div className='progress-bar' style={{
        backgroundColor: '#E3DEDE', 
        borderRadius: 15,
        width: '80%',
      }}>
        <div className='actual-progress-bar' style={{ 
            background: 'linear-gradient(270deg, #FF1F1F 0%, #FFCE1F 100%, #FF1F1F 100%)',
            width: `${ (totalGottenSignatures) / neededSignatures * 100 }%`, 
            borderRadius: '15px 0px 0px 15px',
        }}/>
      </div>
      <h3 id='total-signatures' >{totalGottenSignatures} signatures</h3>
      <p id='remaining-signatures' >{neededSignatures - totalGottenSignatures} remaining</p>
    </div>
  );
}

export default ProgressBar;
