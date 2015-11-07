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

Router.route('/survey/:id', {
	name: 'ViewSurvey',
	template: 'ViewSurvey',

	data: function() {
		var _id = this.params.id;
		return {surveyID: _id};
	}
});

Router.route('/mysurveys/', {
	name: 'MySurveys',
	template: 'MySurveys'
});
