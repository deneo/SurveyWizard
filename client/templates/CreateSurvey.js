if (Meteor.isClient) {
  Template.CreateSurvey.events({
    "submit .newSurvey": function(event) {
      event.preventDefault();

      var name = event.target.name.value;
      var description = event.target.description.value;

      console.log(name);

      Surveys.insert({
        name: name,
        description: description,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username
      });
    }
  });
}
