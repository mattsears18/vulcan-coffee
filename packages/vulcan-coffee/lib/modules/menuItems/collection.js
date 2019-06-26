import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';

const MenuItems = createCollection({
  collectionName: 'MenuItems',
  typeName: 'MenuItems',
  schema,
  resolvers: getDefaultResolvers({ typeName: 'MenuItems'}),
  //mutations: getDefaultMutations({typeName: 'MenuItems'})
});

MenuItems.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  }
})

export default MenuItems;
