App.info({
  name: 'WatchApp',
  description: 'Helps to organize your digital universe. Built in Meteor',
  author: 'Wyrme Team',
  email: 'idris@wyrme.io',
  website: 'http://wyrme.io',
  version: '0.0.1'
});

App.icons({
  'android_xhdpi': 'resources/icons/icon-96x96.png'
});

App.launchScreens({

  'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
  'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});

/*App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');*/

/*App.setPreference('android-minSdkVersion', '19');
App.setPreference('android-targetSdkVersion', '19');*/
App.setPreference('Fullscreen', 'true');
App.accessRule('*');

