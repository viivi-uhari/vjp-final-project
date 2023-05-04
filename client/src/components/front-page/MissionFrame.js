import '../../styles/FrontPage.css';

const MissionFrame = ({ image, header, text }) => {
  return (
    <div id='missionFrame'>
      <img src={image} width='160px' alt='Mission statement logo'/>
      <h4 sx={{ textAlign: 'center', alignSelf: "center" }}>{header}</h4>
      <p>{text}</p>
    </div>
  );
}

export default MissionFrame;