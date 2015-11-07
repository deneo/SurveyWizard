if (Meteor.isClient) {
  Template.MySurveys.helpers({
    "surveys": function() {
      var userID = Meteor.userId();
      return Surveys.find({
        owner: userID
      }).fetch();
    }
  });

}
