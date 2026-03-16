import Hero from '../components/Hero';
import HomeTeamPreview from '../components/HomeTeamPreview'; // Swapped Team for Preview
import VideoHub from '../components/VideoHub';
import AmbassadorSection from '../components/AmbassadorSection';

function Home({ onInternship }) {
  return (
    <>
      <Hero onInternship={onInternship} />
      <HomeTeamPreview /> 
      <VideoHub />
      <AmbassadorSection onInternship={onInternship} />
    </>
  );
}

export default Home;