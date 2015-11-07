if (Meteor.isClient) {
  Template.UpdateSurvey.helpers({
    "survey": function() {
      return Surveys.findOne({_id: this.surveyID});
    },
    "questions": function() {
      return Questions.find({surveyID: this.surveyID}).fetch();
    }
  });

  Template.addQuestion.events({
    "click .freequestion": function(event) {
      Questions.insert({
        type: "freequestion",
        surveyID: this.surveyID
      });
    },
    "click .answer10": function(event) {
      Questions.insert({
        type: "answer10",
        surveyID: this.surveyID
      });
    },
    "click .starrating": function(event) {
      Questions.insert({
        type: "starrating",
        surveyID: this.surveyID
      });
    }
  });

}
