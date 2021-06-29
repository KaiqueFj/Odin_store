import React from 'react';

import SingIn from "../../components/sing-in/sing-in.component";
import SingUp from "../../components/sing-Up/sing-up.component";
import '../../styles/components/SingIn-SingUp/SingIn-SingUp.styles.scss';

const SingInSingUp = () => (
  <div className='sign-in-and-sign-up'>
    <SingIn />
    <SingUp />
  </div>
);


export default SingInSingUp;