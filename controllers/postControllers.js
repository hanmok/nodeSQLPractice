const Post = require('../models/Post');

// async because we are gonna talking to the Database
exports.getAllPosts = async (req, res, next) => {
	try { 
		const [posts, _] = await Post.findAll();

		res.status(200).json({count: posts.length, posts});
	} catch (error) { 
		console.log(error);
		next(error);
	}
};

exports.createNewPost = async (req, res, next) => { 
	try { 
// let post = new Post("First Post", "Body of first post")
let {title, body} = req.body;
let post = new Post(title, body);
post = await post.save();

// console.log(post);
// res.send("Create New Post Route");
		res.status(201).json({message: "Post created"});
	} catch (error) { 
		console.log(error);
		next(error);
	}
}

exports.getPostById = async (req, res, next) => { 
	try { 
		let postId = req.params.id;
		let [post, _] = await Post.findById(postId);
		res.status(200).json({post: post[0]});
		
	} catch (error) { 
		console.log(error);
		next(error);
	}
	// res.send("Get Post By ID Route");
}