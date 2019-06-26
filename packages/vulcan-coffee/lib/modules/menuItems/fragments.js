import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment MenuItemsFragment on MenuItem {
     _id
     createdAt
   }
`);
