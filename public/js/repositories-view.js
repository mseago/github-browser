'use strict';
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var $repositoryList;

  function loadRepos(repoUrl) {

    //console.log(repoUrl, 'it happened yo');
    $.ajax(repoUrl)
      .done(function(data) {
        //console.log('repo data', data);
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
//      console.log(html);
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
