import Hero from './components/Hero';
import UserStories from './components/UserStories';
import HowItWorks from './components/HowItWorks';
import HighlightsAndFooter from './components/HighlightsAndFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1C1C1C] antialiased">
      {/* Hero with immersive visuals */}
      <Hero />

      {/* User stories by role */}
      <UserStories />

      {/* How it Works */}
      <HowItWorks />

      {/* Features, Testimonials, Join, Footer */}
      <HighlightsAndFooter />
    </div>
  );
}

export default App;
