Router.configure({
  layoutTemplate: 'layout'
});

//template: 은 안넣어도 작동한다.
Router.route('/', {template: 'main'});
Router.route('/board', {template: 'board'});
Router.route('/market', {template: 'market'});
Router.route('/detail', {path: 'detail/:_id'});
/* Router.route('/menu', {template: 'main'}); => */