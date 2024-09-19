const posts = [];

export const getPostById = (id: string) => {
    return posts.find((p) => p.id === id);
};
 
export const getPostByCategory = (category: string) => {
    return posts.find((p) => p.category === category);
};

const getAllPosts = ( req, res ) => {
    res.status(200).json(posts);
}

const getPostsByCategory = (req, res) => {
    const category = req.params.category;
 
    const post = getPostByCategory(category);
    if( !post ) {
        return res.status(404).json({ message: 'Post by category not found' });
    }
  
    res.status(200).json(post);
}

const getPostsById = (req, res) => {
    const { id } = req.params;
    const post = getPostById(id);

    if( !post ) {
        return res.status(404).json({ message: 'Post by id not found' });
    }
  
    res.status(200).json(post);
}

const createPost = (req, res) => {
    const title = req.body.title,
          image = req.body.image,
          description = req.body.description,
          category = req.body.category;
    
    if( !title || !image || !description || !category ) {
            return res.status(400).json({ message: 'title, image, description, category are required' });
    }
 
    const newPost = {
        id: Date.now().toString(),
        title,
        image,
        description,
        category,
        comments: []
    }
 
    posts.push(newPost);
  
    res.status(201).json(newPost);
}

const createComment = (req, res) => {
    const { id } = req.params;
 
    const author = req.body.author,
          content = req.body.content;
    if( !author || !content ) {
        return res.status(400).json({ message: 'author and contents params are required' });
    }
 
    const post = getPostById(id);
    if ( !post ) {
        return res.status(404).json({ message: 'Post not found.' });
    }
 
    const newComment = {
        id: `comment-${Date.now().toString()}`,
        author,
        content
    }
 
    post.comments.push(newComment.id);
  
    res.status(201).json(newComment);
}

const updatePost = (req, res) => {
    const { title } = req.body;
    const { id } = req.params;
  
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });  
    }
  
    const post = posts.find((p) => p.id === id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });  
    }
  
    post.title = title;
  
    return res.status(200).json({ post });
}

const deletePost = (req, res) => {
    const { id } = req.params;
 
    const post = posts.findIndex((p) => p.id === id);
  
    if (post === -1) {
      return res.status(404).json({ message: 'Post not found' });
    }
 
    posts.splice(post, 1);
  
    res.status(204).send();
}

export default {
    getAllPosts,
    getPostsByCategory,
    getPostsById,
    createPost,
    createComment,
    updatePost,
    deletePost
}