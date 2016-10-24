Package.describe({
  name: 'dab0mb:ionic-assets',
  summary: 'Ionic assets pack',
  version: '1.3.3',
  git: 'https://github.com/DAB0mB/meteor-npm-ionic.git'
});

Npm.depends({
  'ionic-sdk-unofficial': '1.3.1'
});

Package.onUse(function(api) {
  api.addFiles([
    '.npm/package/node_modules/ionic-sdk/release/css/ionic.css'
  ], 'client');

  api.addAssets([
    '.npm/package/node_modules/ionic-sdk/release/fonts/ionicons.eot',
    '.npm/package/node_modules/ionic-sdk/release/fonts/ionicons.svg',
    '.npm/package/node_modules/ionic-sdk/release/fonts/ionicons.ttf',
    '.npm/package/node_modules/ionic-sdk/release/fonts/ionicons.woff'
  ], 'client');
});
