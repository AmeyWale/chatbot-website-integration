
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import ChatBot from './components/ChatBot';

function App() {

  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="landing-page">
      <Header/>
      <section id="hero" className="hero">
        <div className="container">
          <h2>Welcome to DYPCET</h2>
          <p>KASABA BAWDA, KOLHAPUR</p>

          <button onClick={toggleChatbot} className="cta-button">
            {showChatbot ? 'Hide Chatbot' : 'Show Chatbot'}
          </button>

        </div>
      </section>
      
      <Services/>
      
      {showChatbot && <ChatBot/>}
      <Footer/>
    </div>
  );
}

export default App;
