Package.describe({
  name: 'vulcan-coffee',
});

Package.onUse(api => {
  api.use([
    'promise',

    // vulcan core
    'vulcan:core@1.13.0',

    // vulcan packages
    'vulcan:forms@1.13.0',
    'vulcan:accounts@1.13.0',
    'vulcan:forms-upload@1.13.0',
    'vulcan:ui-bootstrap@1.13.0',

    // third-party packages
    // 'fourseven:scss@4.5.0',
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});
