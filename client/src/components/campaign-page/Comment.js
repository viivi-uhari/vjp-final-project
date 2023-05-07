import '../../styles/App.css';
import '../../styles/Comment.css';
import React, { useState } from 'react';
import heartWhite from '../../images/heart_white.svg';
import heartPink from '../../images/heart_pink.svg';

const Comment = ({ reasonObject, index, reasonsForSinging, setReasons }) => {

  const [isHovering, setIsHovering] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const [canEdit, setEdit] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const changeLike = (index) => {
    let oldReasons = JSON.parse(JSON.stringify(reasonsForSinging));
    isLiked ? oldReasons[index].likes -= 1 : oldReasons[index].likes += 1;
    const newReasons = oldReasons;
    setLiked(!isLiked);
    setReasons([...newReasons]);
  };

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
      { !canEdit && <p>{reasonObject.reason}</p> }
      { canEdit && <textarea type='text' id='existing-comment' name='existing-comment' 
        style={{ width: '98%', margin: '20px 0px' }}
        value={reasonObject.reason}
        onChange={(event) => setValue(event)}/> }
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 15
      }}>
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
        { reasonObject.currentUser && <div className='dot'/> }
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
