'use strict';
if (this.GithubBrowser === undefined) this.GithubBrowser = {};

(function(context) {

  var $organizationsList;

  function loadOrgs(orgUrl) {
    $.ajax(orgUrl)
      .done(function(data) {
        createDOM(data);
      });
  }

  function createDOM(organizations) {
    $organizationsList.empty();

    var $template = $('#organizations-template');
    var templateText = $template.html();
    var templateFunc = _.template(templateText);

    for (var org of organizations) {
      var html = templateFunc(org);
      $organizationsList.append(html);
    }
  }

  function reset() {
    $('.organizations-list').empty();
  }

  function init(repoUrl) {
    $organizationsList = $('.organizations-list');

    loadOrgs(orgUrl);
  }

  context.OrganizationsView = {
    init: init,
    reset: reset
  };

})(window.GithubBrowser);
