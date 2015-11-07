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
