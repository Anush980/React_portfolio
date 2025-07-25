import React from 'react';
import { images } from '../../config/profile';
import './ProfileCircle.css';

const ProfileCircle = ({width, height}) => {
    const customStyle = {};

  if (width) customStyle.width = width;
  if (height) customStyle.height = height;
    return (

        <>
            <div className="circle"  style={customStyle}>
                <img src={images.profilePic} alt="Anush Shrestha" className="profilePic"/>
            </div>
        </>
    )
}

export default ProfileCircle;