// enum example
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Max',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log('is admin');
}
// Tuple Example
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = { 
//   name: 'Max',
//   age: 30,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author']
// }
// you can push into tuple data type
// person.role.push('admin')
// person.role[1] = 10;
// you can update the length of tuple if you need to 
// person.role = [0, 'admin', 'user'];
// array of strings 
var favoriteActivities;
//  if you want to have multiple types, use any[]
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
