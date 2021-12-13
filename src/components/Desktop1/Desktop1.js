import React, { useState } from 'react';
import people from './data';
import Review from './Review';
import Grid  from '@material-ui/core/Grid';
function Desktop1() {
const [index] = useState(0);
const { cmt } = people[index];
  return (
    <div className="main">
      <Grid container>
        <Grid item xs={8}>
          <Review />
          <div className='gt'>
            <div className='cmt'>
              <button>
                <p>Giới thiệu</p>
              </button>
              <p className='cm'>{cmt}</p>
            </div>  
          </div>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
      </Grid>
      
    </div>
    
  );
}

export default Desktop1;
