// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('bingoo', ['ionic', 'bingoo.controllers', 'bingoo.services','bingoo.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('top');

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.help', {
      url: '/help',
      views: {
        'menuContent': {
          templateUrl: 'templates/help.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.tab', {
      url: '/tab',
      views: {
        'menuContent': {
          templateUrl: 'templates/tabs.html'
        }
      }

    })

    .state('app.tab.chatRoom', {
      url: '/chatRoom',
      views: {
        'tab-chat-room': {
          templateUrl: 'templates/tab-chat-room.html',
          controller: 'ChatRoomCtrl'
        }
      }
    })

    .state('app.tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('chat-detail', {
      url: '/chats/:chatId',
         templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        
    })
    .state('app.tab.contacts', {
      url: '/contacts',
      views: {
        'tab-contacts': {
          templateUrl: 'templates/tab-contacts.html',
          controller: 'ContactCtrl'
        }
      }
    })
    .state('app.tab.personalChat', {
      url: '/personalChat',
      views: {
        'tab-personal-chat': {
          templateUrl: 'templates/tab-personal-chat.html',
          controller: 'personalChatCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/tab/chatRoom');
});
