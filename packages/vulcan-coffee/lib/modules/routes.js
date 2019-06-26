import { addRoute } from 'meteor/vulcan:core';

addRoute({
  name: 'home',
  path: '/',
  componentName: 'Home',
});

addRoute({
  name: 'menuItems.list',
  path: '/menuItems',
  componentName: 'MenuItemsList',
});
