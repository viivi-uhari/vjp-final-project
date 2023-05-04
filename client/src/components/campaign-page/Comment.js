import '../../styles/App.css';
import '../../styles/Comment.css';
import React, {useState} from 'react';
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
      }}>
      <h4 style={{ margin: '5px 0px' }}>{reasonObject.name}</h4>
      { !canEdit && <p>{reasonObject.reason}</p> }
      { canEdit && <textarea type='text' id='comment' name='comment' 
        style={{ width: '98%', margin: '20px 0px' }}
        value={reasonObject.reason}
        onChange={(event) => setValue(event)} /> }
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 15
      }}>
        <button className='btn-icon' disabled={canEdit}
          onClick={() => changeLike(index) }
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} >
          { (!isHovering && !isLiked) && <img src={heartWhite} alt='A white heart which means you have not liked this comment' /> }
          { ((isHovering && !canEdit) || (isLiked && !canEdit)) && <img src={heartPink} alt='A pink heart which means you have liked this comment' /> }
          { (isHovering && canEdit && !isLiked) && <img src={heartWhite} alt='A white heart which means you have not liked this comment' /> }
          { ((isHovering && canEdit && isLiked) || (!isHovering && canEdit && isLiked)) && <img src={heartPink} alt='A pink heart which means you have liked this comment' /> }
        </button>
        <p style={{ margin: '0 12px' }}>{reasonObject.likes}</p>
        <div style={{ 
          borderRadius: '100%', 
          height: 5, 
          width: 5, 
          backgroundColor: '#3C3C3C' 
        }}/>
        { !canEdit && 
          <button className='btn-small' style={{ margin: '0 12px' }} 
            onClick={() => setEdit(!canEdit) }>
            Edit
          </button> }
        { canEdit && 
          <button className='btn-small' style={{ margin: '0 12px' }} 
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
