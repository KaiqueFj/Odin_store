import React from 'react';

import SingIn from "../sing-in/sing-in.component";
import SingUp from "../sing-Up/sing-up.component";
import '../../styles/components/SingIn-SingUp/SingIn-SingUp.styles.scss';

const SingIn_SingUp = () => (
  <div className='sign-in-and-sign-up'>
    <SingIn />
    <SingUp />
  </div>
);


export default SingIn_SingUp;
