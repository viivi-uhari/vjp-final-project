import video from '../videos/VJP-video-green.mp4';
import videoPoster from '../images/no_to_hostile_2.png'
import '../styles/FrontPage.css'

const Video = () => {
  return (
    <video width="600" height="340" src={video} controls poster={videoPoster}>
      <source type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  );
}

export default Video;