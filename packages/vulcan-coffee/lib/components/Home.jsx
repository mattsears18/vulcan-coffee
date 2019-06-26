import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const Home = () => (
  <div>Find me at packages/vulcan-coffee/lib/components/Home.jsx</div>
);
registerComponent({ name: 'Home', component: Home });

export default Home;
