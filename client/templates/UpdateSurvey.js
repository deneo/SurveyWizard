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
    "click #freequestion": function(event) {
      var rank = Questions.find({surveyID: this.surveyID}).count();
      Questions.insert({
        type: "freequestion",
        surveyID: this.surveyID,
        number: rank + 1
      });
    },
    "click #answer10": function(event) {
      var rank = Questions.find({surveyID: this.surveyID}).count();
      Questions.insert({
        type: "answer10",
        surveyID: this.surveyID,
        number: rank + 1
      });
    },
    "click #starrating": function(event) {
      var rank = Questions.find({surveyID: this.surveyID}).count();
      Questions.insert({
        type: "starrating",
        surveyID: this.surveyID,
        number: rank + 1
      });
    }
  });

  Template.question.helpers({
    "equal": function (a, b) {
      return a == b;
    }
  });

  Template.question.events({
    "keyup [name=question]": function(event) {
      var data = event.target.value;
      Questions.update(this._id, {
        $set: { question: data }
      });
    },
    "click [name=delete]": function(event) {
      Questions.remove(this._id);
    }
  });


  Template.UpdateSurvey.rendered = function() {
   this.$('#editQuestions').sortable({
       stop: function(e, ui) {
         // get the dragged html element and the one before
         //   and after it
         el = ui.item.get(0)
         before = ui.item.prev().get(0)
         after = ui.item.next().get(0)

         // Here is the part that blew my mind!
         //  Blaze.getData takes as a parameter an html element
         //    and will return the data context that was bound when
         //    that html element was rendered!
         if(!before) {
           //if it was dragged into the first position grab the
           // next element's data context and subtract one from the rank
           newRank = Blaze.getData(after).rank - 1
         } else if(!after) {
           //if it was dragged into the last position grab the
           //  previous element's data context and add one to the rank
           newRank = Blaze.getData(before).rank + 1
         }
         else
           //else take the average of the two ranks of the previous
           // and next elements
           newRank = (Blaze.getData(after).rank +
                      Blaze.getData(before).rank)/2

         //update the dragged Item's rank
         //Questions.update({_id: Blaze.getData(el)._id}, {$set: {rank: newRank}});
       }
   })
 }

}
