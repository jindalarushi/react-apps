import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {

    const {image,link} = props.socialProfile;
    return(
        <span style ={{margin:10}}>
            <a href={link}><img src ={image} alt="socialProfile" style ={{width:35, height:35}}/></a>

        </span>

    )
}

const SocialProfiles =() => (
         <div>
             <h2>Connect with me !</h2>
             <div>
                 {
                     SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                            <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                     ))
                 }
             </div>

         </div>
     
 
)

export default SocialProfiles;