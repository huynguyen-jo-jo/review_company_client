import React, { useState } from 'react';
import people from './data';
import "./Review.css"
import Grid  from '@material-ui/core/Grid';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SettingsIcon from '@mui/icons-material/Settings';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import LanguageIcon from '@mui/icons-material/Language';
const Review = () => {
  const [index] = useState(0);
  const { name, eyes, image, setting, member, web, adress } = people[index];
  
 

  return (
    <div className='review'>
      <Grid container >
        <Grid item xs={2} className='box1'>
          <div className='img'>
              <img src={image} alt={name} className='person-img' />
              
          </div>
        </Grid>
        <Grid item xs={10}className='box2'>
          <div className='text'>
            
            <h4 className='author'>{name}</h4>
            <StarIcon style={{color: 'yellow'}}/>
            <StarIcon style={{color: 'yellow'}}/>
            <StarIcon style={{color: 'yellow'}}/>
            <StarIcon style={{color: 'yellow'}}/>
            <StarHalfIcon style={{color: 'yellow'}}/>
            <p className='eyes'><VisibilityIcon/> {eyes}</p>
            <p className='setting'><SettingsIcon />{setting}</p>
            <p className='member'><RememberMeIcon /> {member}</p>
            <p className='web'><LanguageIcon /> {web}</p>
            <p className='adress'>{adress}</p>
          </div>
          
        </Grid>
      </Grid>
      </div>
  );
};

export default Review;
