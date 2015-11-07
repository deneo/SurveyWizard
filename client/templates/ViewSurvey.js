if (Meteor.isClient) {
  Template.ViewSurvey.helpers({
    "survey": function() {
      return Surveys.findOne({_id: this.surveyID});
    },
    "nextQuestion": function() {
      return this.questionNumber + 1;
    },
    "previousQuestion": function() {
      return this.questionNumber - 1;
    },
    "question": function() {
      return Questions.findOne({surveyID: this.surveyID, number: this.questionNumber});
    },
    "numberOfQuestions": function() {
      return Questions.find({surveyID: this.surveyID}).count() + 2;
    },
    "trueNumberOfQuestions": function() {
      return Questions.find({surveyID: this.surveyID}).count();
    },
    "nextNumberOfQuestions": function() {
      return Questions.find({surveyID: this.surveyID}).count() + 1;
    }

  });

  Template.viewQuestion.helpers({
    "question": function() {
      return Questions.findOne({surveyID: this.surveyID, number: this.questionNumber});
    },
    "data": function() {
      var userid = Meteor.userId();
      var questionid = Questions.findOne({surveyID: this.surveyID, number: this.questionNumber})._id;
      console.log(questionid);
      return Answers.findOne({questionID: questionid, ownerID: userid}).answer;
    },
    "for": function(a) {
      var obj = [];
      for (var i = 1; i <= a; ++i)
        obj.push(i);
      return obj;
    }
  });
  Template.ViewSurvey.events({

    "click #next": function(event) {
      var question = Questions.findOne({surveyID: this.surveyID, number: this.questionNumber});
      if (question.type == "freequestion") {
        var answer =  $('textarea#answer').val();
        var userid = Meteor.userId();
        var chestie = Answers.findOne({
          questionID: question._id,
          ownerID: userid
        });

        if (chestie == undefined)
          Answers.insert({
            questionID: question._id,
            ownerID: userid,
            answer: answer
          });
        else {
          Answers.update(chestie._id, {
              $set : {answer: answer}
            });
        }
      }
      else if (question.type == "answer10") {
        var answer =  $('.active').index() + 1;
        answer = answer.toString();
        var userid = Meteor.userId();
        var chestie = Answers.findOne({
          questionID: question._id,
          ownerID: userid
        });

        if (chestie == undefined)
          Answers.insert({
            questionID: question._id,
            ownerID: userid,
            answer: answer
          });
        else {
          Answers.update(chestie._id, {
              $set : {answer: answer}
            });
        }
      }
      else if (question.type == "starrating") {
        var answer =  $('.active').index() + 1;
        var rating = $('#rating').data('userrating');
        answer = answer.toString();
        var userid = Meteor.userId();
        var chestie = Answers.findOne({
          questionID: question._id,
          ownerID: userid
        });

        if (chestie == undefined)
          Answers.insert({
            questionID: question._id,
            ownerID: userid,
            answer: answer
          });
        else {
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

  Template.ViewSurvey.helpers({
    "notEqual": function (a, b) {
      return a != b;
    },
    "equal": function (a, b) {
      return a == b;
    }
  });

}
