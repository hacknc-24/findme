import './Profile.css';
import TopBar from './TopBar.tsx';
import ProfileSection from './ProfileSection.tsx';
import placeholder_img from './placeholder.png';
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";


const Profile = () =>{

  // const navigate = useNavigate();

  const [tags, SetTags] = useState<string[]>([])

  const addTag = (newTag: string) => {
    if (newTag && !tags.includes(newTag)) {
      SetTags([...tags, newTag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    SetTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="profile">
      <TopBar />
      <ProfileSection 
      username="Jim Smith" 
      profilePicture={placeholder_img}
      tags={tags}
      addTag={addTag}
      removeTag={removeTag}/>

            <main>
                {/* Your main content goes here */}
                <div className="profilecontainer">
                  {/* <h1 class="header">Centered Header</h1> */}
                  <h2>Welcome</h2>
                </div>
            </main>
    </div>
  );
}

export default Profile;
