import '../styles/App.css';
import '../styles/CampaignPage.css'
import React, {useState} from 'react';
import CampaignHeader from './campaign-page/CampaignHeader';
import ProgressBar from './campaign-page/ProgressBar';
import Comment from './campaign-page/Comment';
import FormContent from './campaign-page/FormContent';
import Popup from 'reactjs-popup';

const CampaignPage = () => {

  // Name and reason
  const [reasonsForSinging, setReasons] = useState([{
    name: 'Example Person',
    email: 'example@email.com',
    reason: 'Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, '
      + 'lorem velit accumsan velit vel mattis libero nisl et sem. '
      + 'Proin interdum maecenas massa turpis sagittis in, '
      + 'interdum non lobortis vitae massa.',
    agree: true
  }]);

  const [currentSigningResponse, setSigningResponse] = useState({
    name: '',
    email: '',
    reason: '',
    agree: false
  });

  const handleSubmit = () => {
    const responseObject = JSON.parse(JSON.stringify(currentSigningResponse));
    setReasons([...reasonsForSinging, responseObject]);
    console.log(responseObject);
  };

  return (
    <div>
      <CampaignHeader/>
      <div style={{ margin: '3% 10% 10% 10%' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignContent: 'flex-start', 
          alignItems: 'center',
        }}>
          <div style={{ width: '50%' }}>
            <h2>Fight for an Inclusive Helsinki</h2>
            <p>
              Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, 
              lorem velit accumsan velit vel mattis libero nisl et sem. 
              Proin interdum maecenas massa turpis sagittis in, 
              interdum non lobortis vitae massa.
            </p>
          </div>
          <div style={{ width: '50%' }}>
            <ProgressBar newSignatures={reasonsForSinging} />
          </div>
        </div>
        <Popup trigger=
          { <button className='btn-primary-contained' style={{ marginTop: 20 }}>Sign the Petition</button> }
            modal nested>
          { close => (
            <div className='modal'>
              <div className='content'>
              <form>
                <FormContent response={currentSigningResponse} setResponse={setSigningResponse}/>
                <button style={{ marginTop: 20, marginRight: 10 }}
                  className='btn-primary-contained' type='submit' onClick={() => {
                    handleSubmit();
                    close();
                  }} >
                  Confirm
                </button>
                <button
                  className='btn-primary' onClick={() => close()}>
                  Cancel
                </button>
              </form>
              </div>
            </div>
          )}
        </Popup>
        <h2 style={{ marginTop: 85 }}>Reasons for Signing</h2>
        { reasonsForSinging.map((reasonObject, index) => {
          return (reasonObject.agree && 
            <Comment name={reasonObject.name} reason={reasonObject.reason} key={index}/>)
        }) }
      </div>
    </div>
  );
}

export default CampaignPage;
