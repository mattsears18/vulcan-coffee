import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'menuItems.create',
  'menuItems.update.own',
  'menuItems.delete.own',
]);

Users.groups.admins.can([
  'menuItems.update.all',
  'menuItems.delete.all',
]);
