import './Profile.css';
import TopBar from './TopBar.tsx';
import ProfileSection from './ProfileSection.tsx';
import placeholder_img from './placeholder.png';
import { useState } from 'react';

// import { useNavigate } from "react-router-dom";


const Profile = () =>{

  

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
    <div className="profile" style={{ backgroundColor: '#e8e6e3', height: '100vh' }}>
      <TopBar />
      <ProfileSection 
      username="Jim Smith" 
      profilePicture={placeholder_img}
      tags={tags}
      addTag={addTag}
      removeTag={removeTag}/>
    </div>
  );
}

export default Profile;
