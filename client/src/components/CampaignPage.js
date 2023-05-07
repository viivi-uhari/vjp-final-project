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
    name: 'Jane Doe',
    email: 'example@email.com',
    reason: 'Public spaces are meant to be shared by everyone, '
      + 'and hostile architecture creates an environment of hostility and exclusion. '
      + 'By promoting more inclusive designs, '
      + 'we can foster a sense of community and belonging in our public spaces.',
    agree: true,
    likes: 8,
    currentUser: false
  },
  {
    name: 'Joe Citizen',
    email: 'example.email@email.com',
    reason: 'Elements of hostile architecture, such as metal spikes and bars '
      + 'are both unattractive and may cause harm to people. '
      + 'Removing these features will create safer public spaces for everyone.',
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
              Hostile architecture disproportionately affects marginalized communities,
              including those who are homeless, disabled, or living in poverty.
              By signing this petition to end hostile architecture in Helsinki,
              we can help advocate for social justice and equity in our city. 
              
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
