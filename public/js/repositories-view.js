'use strict';
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var $repositoryList;

  function loadRepos(repoUrl) {
    $.ajax(repoUrl)
      .done(function(data) {
        createDOM(data);
      });
  }

  function createDOM(repositories) {
    $repositoryList.empty();

    var $template = $('#repository-template');
    var templateText = $template.html();
    var templateFunc = _.template(templateText);

    for (var repo of repositories) {
      var html = templateFunc(repo);
      $repositoryList.append(html);
    }
  }

  function reset() {
    $('.repository-list').empty();
  }

  function init(repoUrl) {
    $repositoryList = $('.repository-list');

    loadRepos(repoUrl);
  }

  context.RepositoriesView = {
    init: init,
    reset: reset
  };

})(window.GithubBrowser);
