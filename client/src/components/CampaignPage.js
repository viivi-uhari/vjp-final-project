import '../styles/App.css';
import CampaignHeader from './campaign-page/CampaignHeader';
import ProgressBar from './campaign-page/ProgressBar';

const CampaignPage = () => {
  return (
    <div style={{ margin: '10%', marginTop: '340px' }}>
      <CampaignHeader/>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignContent: 'flex-start', 
        alignItems: 'center' 
      }}>
        <div style={{ width: '50%' }}>
          <h2>Fight for an inclusive Helsinki</h2>
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
      <button>Sign the Petition</button>
    </div>
  );
}

export default CampaignPage;
