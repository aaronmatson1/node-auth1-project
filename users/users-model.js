const db = require('../data/db-config.js');

function find() {
	return db('users').select('id', 'username');
}

function findBy(name) {
	return db('users').where(name);
}

async function add(user) {
	const [id] = await db('users').insert(user, 'id');

	return findById(id);
}

module.exports = {
	find,
	findBy,
	add,
};