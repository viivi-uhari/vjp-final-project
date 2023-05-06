import '../styles/App.css';
import '../styles/FrontPage.css'
import Video from './Video';
import MissionFrame from './front-page/MissionFrame';
import mission_img_1 from '../images/mission_img_1.png';
import mission_img_2 from '../images/mission_img_2.png';
import mission_img_3 from '../images/mission_img_3.png';
import logo from '../images/logo.svg';


const missionData = [
  {
    image: mission_img_1,
    header: 'Raise Awareness',
    text: 'Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.'
  },
  {
    image: mission_img_2,
    header: 'Take Action',
    text: 'Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.'
  },
  {
    image: mission_img_3,
    header: 'Create Change',
    text: 'Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.'
  }
];

const FrontPage = () => {
  return (
    <div style={{ margin: '3% 10% 10% 10%' }}>
      <div id='headerContainer'>
        <div id='textContainer'>
          <div id='h1Container'>
            <h1 style={{ margin: '30px 0px' }}>Inclusive Helsinki</h1>
            <div>
              <img id='logoImgMobile' src={logo} alt='Inclusive helsinki logo'/>
            </div>
          </div>
          <p style={{ margin: '30px 0px' }}>Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. </p>
        </div>
        <img id='logoImg' src={logo} width='350px' alt='Inclusive helsinki logo'/>
      </div>
      <h2 className='sub-title' >Our mission</h2>
      <div id='missionContainer'>
        <MissionFrame image={missionData[0].image} header={missionData[0].header} text={missionData[0].text}/>
        <MissionFrame image={missionData[1].image} header={missionData[1].header} text={missionData[1].text}/>
        <MissionFrame image={missionData[2].image} header={missionData[2].header} text={missionData[2].text}/>
      </div>
      <h2 className='sub-title' >Learn more</h2>
      <Video/>
    </div>
  );
}

export default FrontPage;
