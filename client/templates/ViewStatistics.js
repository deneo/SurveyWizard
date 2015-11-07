if (Meteor.isClient) {
  Template.ViewStatistics.helpers({
    "questions": function() {
      return Questions.find({surveyID: this.surveyID}).fetch();
    }
  });
  Template.questionStatistics.helpers({
    "chart": function() {
      if (this.type == "answer10" || this.type == "starrating") {
        var list = Answers.find({questionID: this._id}).fetch();
        var sum = 0;
        for (var i = 0; i < list.length; i++)
          sum += Number(list[i].answer);
        return sum / list.length;
      }
    },
    "equal": function (a, b) {
      return a == b;
    }
  });
}
