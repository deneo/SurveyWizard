if (Meteor.isClient) {
  Template.ViewAnswers.helpers({
    "answers": function() {
      return Answers.find({questionID: this.questionID}).fetch();
    }
  });
}
