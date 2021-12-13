import React, { useState } from 'react';
import people from './data';
const Comment = () => {
    const [index] = useState(0);
    const { cmt } = people[index];    
    return (
        <div className="comment">
            <div className="menu">
                <button>
                    Giới Thiệu
                </button>
            </div>
            <div className="cmt">
                <p>{cmt}</p>
            </div>
        </div>
    )
    
}

export default Comment