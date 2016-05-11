'use strict';
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var chosenRepoUrl;

  function userClicked(repoUrl) {
    console.log('user clicked page.js function', repoUrl);
    chosenRepoUrl = repoUrl;
    //

    //reset the page any time a user is clicked
    resetPage();
  }

  function resetPage() {
    $('.repositories').hide();
    $('.options .chosen').removeClass('chosen');

    context.RepositoriesView.reset();
  }

  function repositoriesClicked() {
    console.log('repositoriesClicked');
    $('.options .chosen').removeClass('chosen');
    $(this).addClass('chosen');

    $('.repositories').show();
    context.RepositoriesView.init(chosenRepoUrl);
  }

  function organizationsClicked() {
    $('.options .chosen').removeClass('chosen');
    $(this).addClass('chosen');

    $('.repositories').hide();

    //you have to write the code here for your homework
  }

  function followersClicked() {
    $('.options .chosen').removeClass('chosen');
    $(this).addClass('chosen');

    $('.repositories').hide();

    //you have to write the code here for your homework
  }

  function start() {

    context.UsersView.init(userClicked);

    $('.repositories-option').on('click', repositoriesClicked);
    $('.organizations-option').on('click', organizationsClicked);
    $('.followers-option').on('click', followersClicked);
  }

  context.start = start;

})(window.GithubBrowser);
