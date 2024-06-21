
import './AboutUs.css'; 

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>About BookScape</h2>
      <p>Welcome to BookScape! BookScape is an all-in-one online tool for book lovers. It helps you manage your reading habits and discover new books that match your interests and moods.</p>
      
      <div className="feature-section">
        <h3>Unique Features</h3>
        <ul>
          <li><strong>Personalized User Profiles:</strong> Track your reading history and manage future reads effortlessly.</li>
          <li><strong>Easy Book Search and Recommendations:</strong> Find books by title, author, genre, or keywords.</li>
          <li><strong>Mood-Based Book Suggestions:</strong> Discover books that match your current mood.</li>
        </ul>
      </div>
      
      <div className="developer-section">
        <h3>About the Developer</h3>
        <p>BookScape is created by Mynorka Alexandra Daza, a web development student at Ironhack. Combining a passion for reading with web development, Mynorka aims to enhance the reading experience for all book enthusiasts.</p>
        
        <div className="connect">
          <p>Connect with Mynorka:</p>
          <ul>
            <li><a href="https://github.com/mimmy307">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/mynorka-alexandra-daza">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <p className="footer">Thank you for visiting BookScape. Start exploring and enhancing your reading journey today!</p>
    </div>
  );
}

export default AboutUs;
