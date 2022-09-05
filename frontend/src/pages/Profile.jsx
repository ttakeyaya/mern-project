import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { user } = useSelector((state) => state.auth);
  return <section>Profile page</section>;
}

export default Profile;
