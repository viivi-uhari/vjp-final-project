import '../../styles/FrontPage.css';

const MissionFrame = ({ image, header, text }) => {
  return (
    <div id='mission-frame'>
      <img style={{ margin: '0px' }} src={image} width='160px' alt='Mission statement logo'/>
      <h4 sx={{ textAlign: 'center', alignSelf: 'center' }}>{header}</h4>
      <p>{text}</p>
    </div>
  );
}

export default MissionFrame;
