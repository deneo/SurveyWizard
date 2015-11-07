if (Meteor.isClient) {
  Template.ViewSurvey.helpers({
    "survey": function() {
      return Surveys.findOne({_id: this.surveyID});
    },
    "nextQuestion": function() {
      return this.questionNumber + 1;
    },
    "question": function() {
      return Questions.findOne({surveyID: this.surveyID, number: this.questionNumber});
    }
  });


  Template.viewQuestion.helpers({
    "question": function() {
      return Questions.findOne({surveyID: this.surveyID, number: this.questionNumber});
    }
  });
  Template.ViewSurvey.events({
    "click #next": function(event) {
      var question = Questions.findOne({surveyID: this.surveyID, number: this.questionNumber});
      if (question.type == "freequestion") {
        var answer =  $('textarea#answer').val();
        var userid = Meteor.userId();
        console.log("muie" + answer);
        var chestie = Answers.findOne({
          questionID: this._id,
          ownerID: userid
        });

        if (chestie == undefined)
          Answers.insert({
            questionID: this._id,
            ownerID: userid,
            answer: answer
          });
        else {
          console.log("update" + chestie._id)
          Answers.update(chestie._id, {
              $set : {answer: answer}
            });
        }
      }
    }
  });

  Template.viewQuestion.helpers({
    "equal": function (a, b) {
      return a == b;
    }
  });

}
