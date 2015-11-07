if (Meteor.isClient) {
  Template.ViewSurvey.helpers({
    "survey": function() {
      return Surveys.findOne({_id: this.surveyID});
    },
    "questions": function() {
      return Questions.find({surveyID: this.surveyID}).fetch();
    }
  });

  Template.viewQuestion.helpers({
    "equal": function (a, b) {
      return a == b;
    }
  });

}
