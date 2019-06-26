import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'orders.create',
  'orders.update.own',
  'orders.delete.own',
]);

Users.groups.admins.can([
  'orders.update.all',
  'orders.delete.all',
]);
