import '../../styles/App.css';
import '../../styles/Comment.css';
import React, { useState } from 'react';
import heartWhite from '../../images/heart_white.svg';
import heartPink from '../../images/heart_pink.svg';

// A component that displays the comment left by a signee

const Comment = ({ reasonObject, index, reasonsForSinging, setReasons }) => {

  const [isHovering, setIsHovering] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const [canEdit, setEdit] = useState(false);

  // Functions to check whether the mouse is hovering over a certain component.
  // In this component these functions are used for the 'like' button (heart icon)
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // Change the like count: if the reason had been liked and the heart icon is clicked, 
  // minus the like. If the reason hadn't been liked, add one like when the heart icon is clicked.
  const changeLike = (index) => {
    let oldReasons = JSON.parse(JSON.stringify(reasonsForSinging));
    isLiked ? oldReasons[index].likes -= 1 : oldReasons[index].likes += 1;
    const newReasons = oldReasons;
    setLiked(!isLiked);
    setReasons([...newReasons]);
  };

  // Function for setting the value of the comment text. 
  // This function is used when the comment is being edited.
  const setValue = (event) => {
    let oldReasons = JSON.parse(JSON.stringify(reasonsForSinging));
    let oldObject = JSON.parse(JSON.stringify(reasonObject));
    oldObject.reason = event.target.value;
    const newObject = oldObject;
    oldReasons[index] = newObject;
    setReasons(oldReasons);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start',
      alignContent: 'center',
      width: '100%',
    }}>
      <h4 style={{ margin: '5px 0px' }}>{reasonObject.name}</h4>
      { /* If the comment is not being edited, display text */
        !canEdit && <p>{reasonObject.reason}</p> }
      { /* If the comment is being edited, display a text area */
        canEdit && <textarea type='text' id='existing-comment' name='existing-comment' 
          style={{ width: '98%', margin: '20px 0px' }}
          value={reasonObject.reason}
          onChange={(event) => setValue(event)}/> }
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 15
      }}>
        { /* A button for liking or unliking the comment */ }
        <button className='btn-icon'
          onClick={() => changeLike(index)}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          { (!isHovering && !isLiked) && <img className='white-heart-icon' src={heartWhite} 
            alt='A white heart which means you have not liked this comment'/> }
          { (isHovering || isLiked) && <img className='pink-heart-icon' src={heartPink} 
            alt='A pink heart which means you have liked this comment'/> }
        </button>
        <p className='likes-count'>{reasonObject.likes}</p>
        { /* The 'dot' and Edit button are only displayed for comments left by the current user */
          reasonObject.currentUser && <div className='dot'/> }
        { reasonObject.currentUser && !canEdit && 
          <button className='btn-small'
            onClick={() => setEdit(!canEdit) }>
            Edit
          </button> }
        { reasonObject.currentUser && canEdit && 
          <button className='btn-small'
            onClick={() => setEdit(!canEdit) }>
            Confirm
          </button> }
      </div>
      <div style={{ 
        backgroundColor: '#959595',
        width: '100%',
        height: 1,
        marginBottom: 15
      }}/>
    </div>
  );
}

export default Comment;
