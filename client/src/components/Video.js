// import video from '../videos/hostile_architecture.mp4';
import bench from '../images/bench.gif';

const Video = () => {
  return (
    <video width="600" height="340" controls poster={bench}>
      {/* Uncomment the import above and add src={video} once the video is uploaded to GitHub */}
      <source type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  );
}

export default Video;