import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';

const Orders = createCollection({
  collectionName: 'Orders',
  typeName: 'Orders',
  schema,
  resolvers: getDefaultResolvers({ typeName: 'Orders'}),
  //mutations: getDefaultMutations({typeName: 'Orders'})
});

Orders.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  }
})

export default Orders;
