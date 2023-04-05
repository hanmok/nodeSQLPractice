const db = require('../config/db');

class Post { 
	constructor(title, body) { 
		this.title = title
		this.body = body
	}

	async save() { 
		let d = new Date();
		let yyyy = d.getFullYear();
		let mm = d.getMonth() + 1;
		let dd = d.getDate();

		let createdAtDate = `${yyyy}-${mm}-${dd}`;
		// let createdAtDate = '2023-04-06';
		// console.log(`date: ${createdAtDate}`)
		let sql = `
		INSERT INTO posts(
			title, 
			body, 
			created_at
		)
		VALUES(
			'${this.title}',
			'${this.body}',
			'${createdAtDate}'
		)
		`;

		// const [newPost, _] = await db.execute(sql)
		// return newPost;
		return db.execute(sql);
	}
	
	static findAll() {
		let sql = "SELECT * FROM posts;";
		return db.execute(sql);
	}

	static findById(id) { 
		let sql = `SELECT * FROM posts WHERE id = ${id};`;
		return db.execute(sql);
	}
}

module.exports = Post;

// const p = new Post();
// p.findAll();
// Post.findAll();
