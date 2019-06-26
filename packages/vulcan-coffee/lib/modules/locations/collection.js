import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';

const Locations = createCollection({
  collectionName: 'Locations',
  typeName: 'Locations',
  schema,
  resolvers: getDefaultResolvers({ typeName: 'Locations'}),
  //mutations: getDefaultMutations({typeName: 'Locations'})
});

Locations.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  }
})

export default Locations;
