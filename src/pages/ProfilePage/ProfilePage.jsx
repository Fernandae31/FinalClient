import { useOutletContext } from "react-router-dom";
import "./ProfilePage.css";


function ProfilePage() {
  const { user } = useOutletContext();
  console.log (user) 
  return (
    <div className="profile-container">
    <div className="profileHeader">
      <img className="img" src="" alt=""/>
      <h1>Welcome{user.name}!</h1> 
  
    </div>
    <img className="profileImg" src="" alt="profileImg"/>
    <div className="description">
      <p>{user.description}</p>
    </div>
    <button className="editProfileButton">Edit Profile</button>
    </div>
 
  
  );
}

export default ProfilePage;