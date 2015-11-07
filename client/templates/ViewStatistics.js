if (Meteor.isClient) {
  Template.ViewStatistics.helpers({
    "questions": function() {
      return Questions.find({surveyID: this.surveyID}).fetch();
    }
  });
}
