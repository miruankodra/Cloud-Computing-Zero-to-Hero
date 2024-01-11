const validateRequest = (req, res, next) => {
    const {title, author, publication_year} = req.body;
    const errors = {};

    if (!title) {
        errors.title = 'Title is required';
    }

    if (!author) {
        errors.author = 'Author is required';
    }

    if (!publication_year) {
        errors.publication_year = 'Publication year is required';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }
    next();
}

module.exports = validateRequest;