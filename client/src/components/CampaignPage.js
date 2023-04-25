import '../styles/App.css';
import CampaignHeader from './campaign-page/CampaignHeader';
import ProgressBar from './campaign-page/ProgressBar';
import Comment from './campaign-page/Comment';

const CampaignPage = () => {
  return (
    <div>
      <CampaignHeader/>
      <div style={{ margin: '3% 10% 10% 10%' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignContent: 'flex-start', 
          alignItems: 'center',
        }}>
          <div style={{ width: '50%' }}>
            <h2>Fight for an Inclusive Helsinki</h2>
            <p>
              Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, 
              lorem velit accumsan velit vel mattis libero nisl et sem. 
              Proin interdum maecenas massa turpis sagittis in, 
              interdum non lobortis vitae massa.
            </p>
          </div>
          <div style={{ width: '50%' }}>
            <ProgressBar/>
          </div>
        </div>
        <button style={{ marginTop: '20px' }}>Sign the Petition</button>
        <h2 style={{ marginTop: '85px' }}>Reasons for Signing</h2>
        <Comment/>
      </div>
    </div>
  );
}

export default CampaignPage;
