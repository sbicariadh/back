import React from 'react';
import Userlist from './Userlist';

const Privetuser = () => {

    const token=localStorage.getItem('token')
  return (
    <div>
      {token? (<div> <Userlist/> </div>  ):(<img src='https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Stuart%20Miles,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1482318198/ez3oxx6mwb72eh7xbpip.jpg' />)}
    </div>
  )
}

export default Privetuser
