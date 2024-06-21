
import "../components/MyDetails.css"; 

function MyDetails() {
  const userDetails = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 234 567 890",
    profilePicture: "https://api.multiavatar.com/kathrin.svg", // Placeholder image URL
    favoriteGenres: ["Fiction", "Mystery", "Science-Fiction"],
    interests: ["Traveling", "Cooking", "Photography"],
    location: "New York, NY, USA",
    bio: "Passionate reader and explorer of diverse genres. Always looking for the next captivating story.",
    readingGoals: "To read 50 books this year.",
  
  };


return (
    <div className="profile-details-container">
      <div className="profile-header">
        <img className="profile-picture" src={userDetails.profilePicture} alt="Profile" />
        <div className="profile-info">
          <h2>{`${userDetails.firstName} ${userDetails.lastName}`}</h2>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phoneNumber}</p>
          <p>Location: {userDetails.location}</p>
        </div>
      </div>
      <div className="bio-section">
        <h3>Bio</h3>
        <p>{userDetails.bio}</p>
      </div>
      <div className="details-section">
        <div className="favorite-genres">
          <h3>Favorite Genres</h3>
          <ul>
            {userDetails.favoriteGenres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
        <div className="interests">
          <h3>Interests</h3>
          <p>{userDetails.interests.join(", ")}</p>
        </div>
        <div className="reading-goals">
          <h3>Reading Goals</h3>
          <p>{userDetails.readingGoals}</p>
        </div>
      </div>
    </div>
  );
}
    

export default MyDetails;