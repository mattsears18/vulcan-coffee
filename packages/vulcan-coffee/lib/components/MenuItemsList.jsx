import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const MenuItemsList = () => (
  <div>
    Find me at packages/vulcan-coffee/lib/components/MenuItemsList.jsx
  </div>
);
registerComponent({name:'MenuItemsList', component:MenuItemsList});

export default MenuItemsList;
