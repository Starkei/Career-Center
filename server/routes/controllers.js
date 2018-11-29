module.exports = app => {
  require('./controllers/consultation.controller')(app);
  require('./controllers/employee.controller')(app);
  require('./controllers/review.controller')(app);
  require('./controllers/role.controller')(app);
  require('./controllers/specialization.controller')(app);
  require('./controllers/spectializationOfEmployee.controller')(app);
  require('./controllers/user.controller')(app);
  require('./controllers/userRole.controller')(app);
}
