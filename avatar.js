angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', avatarDirective);

function mainCtrl ($scope)
{
  $scope.users = [];

  $scope.addNew = function (user)
  {
    $scope.users.push({
      name: user.name,
      avatarUrl: user.url,
      email: user.email
    });

    user.name = '';
    user.url = '';
    user.email = '';
  };
}

function avatarDirective ()
{
  return {
    scope: {
      user: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h2>{{user.name}}</h2>' +
        '<h4>{{user.email}}</h4>' +
      '</div>'
    ),
    link: link
  };

  function link (scope)
  {
    if (!scope.user.avatarUrl)
    {
      scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
    }
  }
}
