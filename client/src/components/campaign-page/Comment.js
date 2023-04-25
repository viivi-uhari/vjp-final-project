import '../../styles/App.css';
import heart from '../../images/heart.svg';

const Comment = ({ name, reason }) => {
  console.log("test");
  console.log(name);
  console.log(reason);

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start',
        alignContent: 'center',
      }}>
      <h4 style={{ margin: '5px 0px' }}>{name}</h4>
      <p>{reason}</p>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <img src={heart} alt='A heart image'/>
        <p style={{ margin: '0 12px' }}>8</p>
        <div style={{ 
          borderRadius: '100%', 
          height: '5px', 
          width: '5px', 
          backgroundColor: '#3C3C3C' 
        }}/>
        <p style={{ margin: '0 12px' }}>Edit</p>
      </div>
      <div style={{ 
        backgroundColor: '#959595',
        width: '100%',
        height: '1px' 
      }}/>
    </div>
  );
}

export default Comment;
