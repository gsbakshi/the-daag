import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
  <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}} />
  
  </div>
);

export default MenuItem