if (Meteor.isClient) {
  Template.CreateSurvey.events({
    "submit .newSurvey": function(event) {
      event.preventDefault();

      var name = event.target.name.value;
      var description = event.target.description.value;
      var requireLogin = event.target.login.checked;

      var _id = Surveys.insert({
        name: name,
        description: description,
        createdAt: new Date(),
        owner: Meteor.userId(),
        requireLogin: requireLogin,
        username: Meteor.user().username
      });

      Router.go("/updatesurvey/" + _id);
    }
  });
}
