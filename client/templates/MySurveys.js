if (Meteor.isClient) {
  Template.MySurveys.helpers({
    "surveys": function() {
      var userID = Meteor.userId();
      return Surveys.find({
        owner: userID
      }).fetch();
    }
  });

  Template.survey.events({
    "click #deleteSurvey": function(event) {
      Surveys.remove({_id: this._id});
    }
  })

}
