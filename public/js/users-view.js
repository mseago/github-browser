'use strict';
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var $userList;
  var userClickCallback;

  function loadUsers() {
    $.ajax('https://api.github.com/search/users?q=bob')
      .done(function(data) {
        console.log('user data', data);
        createUserDOM(data.items);
      });
  }

  function createUserDOM(users) {
    for (var user of users) {
      $userList.append('<li class="user" data-url="' + user.repos_url + '">' + user.login + '</li>')
    }
  }

  function userClicked() {
    var chosenItems = $('.user-list .chosen');
    chosenItems.removeClass('chosen');

    var $this = $(this);
    $this.addClass('chosen');

    var repoUrl = $this.data('url');
    userClickCallback(repoUrl);
  }

  function init(userClick) {
    userClickCallback = userClick;
    $userList = $('.user-list');
    loadUsers();

    $userList.on('click', 'li', userClicked);
  }

  context.UsersView = {
    init: init
  };

})(window.GithubBrowser);
