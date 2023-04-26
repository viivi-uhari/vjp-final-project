import '../styles/App.css';
import CampaignHeader from './campaign-page/CampaignHeader';
import ProgressBar from './campaign-page/ProgressBar';
import Comment from './campaign-page/Comment';

const CampaignPage = () => {

  // Name and reason
  const reasonsForSinging = [{
    name: 'Example Person',
    reason: 'Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, '
      + 'lorem velit accumsan velit vel mattis libero nisl et sem. '
      + 'Proin interdum maecenas massa turpis sagittis in, '
      + 'interdum non lobortis vitae massa.'
  }];

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
        <button className='btn-primary' style={{ marginTop: 20 }}>Sign the Petition</button>
        <h2 style={{ marginTop: 85 }}>Reasons for Signing</h2>
        { reasonsForSinging.map(reasonObject => {
          return (<Comment name={reasonObject.name} reason={reasonObject.reason} />)
        }) }
      </div>
    </div>
  );
}

export default CampaignPage;
