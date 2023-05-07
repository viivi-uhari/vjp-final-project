import React, { useState } from 'react';
import CampaignHeader from './campaign-page/CampaignHeader';
import ProgressBar from './campaign-page/ProgressBar';
import Comment from './campaign-page/Comment';
import PetitionFormContent from './campaign-page/PetitionFormContent';
import Popup from 'reactjs-popup';
import '../styles/App.css';
import '../styles/CampaignPage.css';

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
    currentUser: false
  },
  {
    name: 'Another Example',
    email: 'example.email@email.com',
    reason: 'Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, '
      + 'lorem velit accumsan velit vel mattis libero nisl et sem. '
      + 'Proin interdum maecenas massa turpis sagittis in, '
      + 'interdum non lobortis vitae massa.',
    agree: true,
    likes: 3,
    currentUser: false
  }]);

  const [currentSigningResponse, setSigningResponse] = useState({
    name: '',
    email: '',
    reason: '',
    agree: false,
    likes: 0,
    currentUser: true
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
      <div id="campaign-page-body">
        <div className='info'>
          <div className='info-text' >
            <h2>Fight for an Inclusive Helsinki</h2>
            <p>
              Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, 
              lorem velit accumsan velit vel mattis libero nisl et sem. 
              Proin interdum maecenas massa turpis sagittis in, 
              interdum non lobortis vitae massa.
            </p>
          </div>
          <ProgressBar newSignatures={reasonsForSinging} />
        </div>
        <Popup trigger=
          { <button id='signing-btn' className='btn-primary-contained' >Sign the Petition</button> }
            modal nested>
          { close => (
            <div className='modal'>
              <div className='content'>
              <form>
                <PetitionFormContent response={currentSigningResponse} setResponse={setSigningResponse} errors={errors} />
                <button style={{ marginTop: 20, marginRight: 10 }}
                  className='btn-primary-contained' type='submit' onClick={(event) => {
                    const currentErrors = handleSubmit(event);
                    if (currentErrors.length === 0) close();
                  }} >
                  Confirm
                </button>
                <button
                  className='btn-primary' onClick={(event) => {
                    event.preventDefault();
                    close();
                  }}>
                  Cancel
                </button>
              </form>
              </div>
            </div>
          )}
        </Popup>
        <h2 id='reasons-for-signing' >Reasons for Signing</h2>
        { reasonsForSinging.map((reasonObject, index) => {
          return (reasonObject.agree && 
            <Comment reasonObject={reasonObject} index={index} reasonsForSinging={reasonsForSinging} setReasons={setReasons} key={index}/>)
        }) }
      </div>
    </div>
  );
}

export default CampaignPage;
