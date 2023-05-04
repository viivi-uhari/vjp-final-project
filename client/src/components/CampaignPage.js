import '../styles/App.css';
import '../styles/CampaignPage.css'
import React, { useState } from 'react';
import CampaignHeader from './campaign-page/CampaignHeader';
import ProgressBar from './campaign-page/ProgressBar';
import Comment from './campaign-page/Comment';
import PetitionFormContent from './campaign-page/PetitionFormContent';
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
    agree: true,
    likes: 8,
  }]);

  const [currentSigningResponse, setSigningResponse] = useState({
    name: '',
    email: '',
    reason: '',
    agree: false,
    likes: 0,
  });

  let [errors, setErrors] = useState([]);

  const validateInputs = (responseObject) => {
    const currentErrors = [];
    if (responseObject.name === '' || !responseObject.name.match(/^[a-zA-Z\s]+$/)) {
      currentErrors.push('You should provide a valid name');
    };
    if (responseObject.email === '' || !responseObject.email.match(/^\S+@\S+/)) {
      currentErrors.push('You should provide a valid email address');
    };
    return currentErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const responseObject = JSON.parse(JSON.stringify(currentSigningResponse));
    const currentErrors = validateInputs(responseObject);
    setErrors(currentErrors);
    if (currentErrors.length === 0) {
      console.log(responseObject);
      setSigningResponse({
        name: '',
        email: '',
        reason: '',
        agree: false,
        likes: 0,
      });
      setReasons([...reasonsForSinging, responseObject]);
      setErrors([]);
    };
    return currentErrors;
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
                <PetitionFormContent response={currentSigningResponse} setResponse={setSigningResponse} />
                { errors.map((error, index) => { return (
                  <div key={index} >
                    <p style={{ fontSize: 16, margin: 0, color: '#FF1F1F' }} >{error}</p><br/>
                  </div>
                )}) }
                <button style={{ marginTop: 20, marginRight: 10 }}
                  className='btn-primary-contained' type='submit' onClick={(event) => {
                    const currentErrors = handleSubmit(event);
                    if (currentErrors.length === 0) close();
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
            <Comment reasonObject={reasonObject} index={index} reasonsForSinging={reasonsForSinging} setReasons={setReasons} key={index}/>)
        }) }
      </div>
    </div>
  );
}

export default CampaignPage;
