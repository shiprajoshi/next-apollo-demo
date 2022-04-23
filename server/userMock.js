var casual = require('casual');

const createUsers = (count) => {
	return function () {
		const list = [];
		for (let i = 0; i < count; i++) {
			const obj = {};
			(obj.id = i),
				(obj.first_name = casual.first_name),
				(obj.last_name = casual.last_name),
				(obj.address = casual.address),
				(obj.email = casual.email),
				(obj.phone = casual.phone);
			list.push(obj);
		}
		return list;
	};
};
casual.define('users', createUsers(2000));

module.exports = casual.users;
