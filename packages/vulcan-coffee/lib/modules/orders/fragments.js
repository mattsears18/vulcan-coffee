import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment OrdersFragment on Order {
     _id
     createdAt
   }
`);
