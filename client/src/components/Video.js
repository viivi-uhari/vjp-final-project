import video from '../videos/VJP-video-green.mp4';
import bench from '../images/bench.gif';

const Video = () => {
  return (
    <video width="600" height="340" src={video} controls poster={bench}>
      <source type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  );
}

export default Video;