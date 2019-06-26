import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment LocationsFragment on Location {
     _id
     createdAt
   }
`);
