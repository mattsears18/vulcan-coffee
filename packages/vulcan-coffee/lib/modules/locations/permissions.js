import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'locations.create',
  'locations.update.own',
  'locations.delete.own',
]);

Users.groups.admins.can([
  'locations.update.all',
  'locations.delete.all',
]);
