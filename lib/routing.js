
Router.configure({
	layoutTemplate: 'ApplicationLayout',
	loadingTemplate: 'ApplicationLoading'
});

Router.route('/', function() {
	this.render('home');
});

Router.route('/createsurvey', {
	name: 'CreateSurvey',
	template: 'CreateSurvey'
});

Router.route('/updatesurvey/:id', {
	name: 'UpdateSurvey',
	template: 'UpdateSurvey',

	data: function() {
		var _id = this.params.id;
		return {surveyID: _id};
	}
});

Router.route('/statistics/:id', {
	name: 'ViewStatistics',
	template: 'ViewStatistics',

	data: function() {
		var _id = this.params.id;
		return {
			surveyID: _id,
		};
	}
});

Router.route('/answers/:id', {
	name: 'ViewAnswers',
	template: 'ViewAnswers',

	data: function() {
		var _id = this.params.id;
		return {
			questionID: _id,
		};
	}
});

Router.route('/survey/:id/:qnr?', {
	name: 'ViewSurvey',
	template: 'ViewSurvey',

	data: function() {
		var _id = this.params.id;
		var qnr = this.params.qnr;

		if (qnr == undefined)
			qnr = '1';

		qnr = Number(qnr);
		return {
			surveyID: _id,
			questionNumber: qnr
		};
	}
});

Router.route('/mysurveys/', {
	name: 'MySurveys',
	template: 'MySurveys'
});
