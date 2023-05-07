import '../../styles/PetitionFormContent.css';
import React from 'react';

const PetitionFormContent = ({ response, setResponse, errors }) => {

  const setValue = (event, property) => {
    let oldObject = JSON.parse(JSON.stringify(response));
    if (property === 'agree') {
      oldObject[property] = !response.agree;
    } else {
      oldObject[property] = event.target.value;
    }
    const newObject = oldObject;
    setResponse(newObject);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start',
      alignContent: 'center',
      gap: 10
    }}>
      <h2 style={{ marginTop: 10 }}>Sign the Petition</h2>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name'
          value={response.name} 
          onChange={(event) => setValue(event, 'name')}/>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email'
          value={response.email}
          onChange={(event) => setValue(event, 'email')}/>
        <label htmlFor='comment'>Comment</label>
        <textarea type='text' id='comment' name='comment' style={{ width: '98%' }}
          value={response.reason}
          onChange={(event) => setValue(event, 'reason')}/>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row',
          margin: '20px 0'
        }}>
          <input style={{ marginRight: 15 }} type='checkbox' id='agree' name='agree' 
            checked={response.agree}
            onChange={(event) => setValue(event, 'agree')}/>
          <label htmlFor='agree' id='checkbox-label'>
            I agree that my name and comment can be displayed publicly
          </label>
        </div>
        { errors.map((error, index) => { return (
          <div key={index}>
            <p className='error-message'>{error}</p>
          </div>
        )}) }
    </div>
  )
};

export default PetitionFormContent;
