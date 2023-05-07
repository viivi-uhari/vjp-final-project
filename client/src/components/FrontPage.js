import '../styles/App.css';
import '../styles/FrontPage.css';
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
    text: 'We strive to educate and inform the public about the ways in which '
      + 'hostile architecture can perpetuate exclusion and discrimination.'
  },
  {
    image: mission_img_2,
    header: 'Take Action',
    text: 'We are committed to working with local communities, architects, and '
      + 'policymakers to create inclusive public spaces that are welcoming to all.'
  },
  {
    image: mission_img_3,
    header: 'Create Change',
    text: 'Our aim is to create a more just society where everyone has the right '
      + 'to access public spaces without fear of being excluded by the environment.'
  }
];

const FrontPage = () => {
  return (
    <div style={{ margin: '3% 10% 10% 10%' }}>
      <div id='header-container'>
        <div id='text-container'>
          <div id='h1-container'>
            <h1 style={{ margin: '30px 0px' }}>Inclusive Helsinki</h1>
            <div>
              <img id='logo-img-mobile' src={logo} alt='Inclusive Helsinki logo'/>
            </div>
          </div>
          <p style={{ margin: '30px 0px' }}>
            Our campaign is dedicated to ending the use of hostile architecture in Helsinki.
            We believe that everyone has the right to access and enjoy public spaces
            without fear of being targeted or excluded by the built environment.
            Our mission is to raise awareness of the harms of hostile architecture, advocate for its removal,
            and promote alternative designs that prioritize accessibility, safety, and inclusivity.
          </p>
        </div>
        <img id='logo-img' src={logo} width='350px' alt='Inclusive Helsinki logo'/>
      </div>
      <h2 className='sub-heading'>Our mission</h2>
      <div id='mission-container'>
        <MissionFrame image={missionData[0].image} header={missionData[0].header} text={missionData[0].text}/>
        <MissionFrame image={missionData[1].image} header={missionData[1].header} text={missionData[1].text}/>
        <MissionFrame image={missionData[2].image} header={missionData[2].header} text={missionData[2].text}/>
      </div>
      <h2 className='sub-heading'>Learn more</h2>
      <Video/>
    </div>
  );
}

export default FrontPage;
