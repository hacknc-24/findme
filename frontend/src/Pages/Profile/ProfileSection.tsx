import React from 'react';
import Tags from './Tags.tsx';
import './ProfileSection.css';

interface ProfileSectionProps {
  username: string;
  profilePicture: string;
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

const ProfileSection:React.FC<ProfileSectionProps> = ({ username, profilePicture, tags, addTag, removeTag }) => {
  return (
    <div className="profile-section">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <span className="username">{username}</span>
      <Tags tags={tags} addTag={addTag} removeTag={removeTag} />
    </div>
  );
};

export default ProfileSection;