import React, { useState } from 'react';
import './Tags.css';

interface TagsProps {
  tags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;


}

const Tags: React.FC<TagsProps> = ({ tags , addTag, removeTag }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = () => {
    addTag(inputValue);
    setInputValue(''); // Clear input after adding
  };

  return (
    <div className="tags-section">
      <h3>Tags:</h3>
      <div className="tags-list">
        {tags.map(tag => (
          <div className="tag" key={tag}>
            {tag} <button onClick={() => removeTag(tag)}>x</button>
          </div>
        ))}
      </div>
      <div className="add-tag">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add tag"
        />
        <button style={{ width: '30%',  }} onClick={handleAddTag}>Add</button>
      </div>
    </div>
  );
};

export default Tags;