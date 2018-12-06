const connection = require("../connection");

const Consultation = require("./models/consultation.model")(connection);
const Employee = require("./models/employee.model")(connection);
const Review = require("./models/review.model")(connection);
const Role = require("./models/role.model")(connection);
const Specialization = require("./models/specialization.model")(connection);
const SpecializationOfEmoployee = require("./models/specializationOfEmployees.model")(connection);
const User = require("./models/user.model")(connection);
const UserRole = require("./models/userRole.model")(connection);

var db = {};

//relation
UserRole.belongsTo(Role);
UserRole.belongsTo(User);
Role.hasMany(UserRole);
User.hasMany(UserRole);

Specialization.hasMany(SpecializationOfEmoployee);
Employee.hasMany(SpecializationOfEmoployee);
SpecializationOfEmoployee.belongsTo(Specialization);
SpecializationOfEmoployee.belongsTo(Employee);

Employee.hasMany(Consultation);
User.hasMany(Consultation);
Consultation.belongsTo(Employee);
Consultation.belongsTo(User);

User.hasMany(Review);
Employee.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Employee);

//add fields
db.Consultation = Consultation;
db.Employee = Employee;
db.Review = Review;
db.Role = Role;
db.Specialization = Specialization;
db.SpecializationOfEmoployee = SpecializationOfEmoployee;
db.User = User;
db.UserRole = UserRole;

db.sequelize = connection.sequelize;
db.Sequelize = connection.Sequelize;

module.exports = db;
