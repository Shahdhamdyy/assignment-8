import bookmodel from "../../db/models/book.model.js";

export const createbook = async (req, res, next) => {
  try {
    const { title, content, author, publishedDate } = req.body;
    const book = await bookmodel.create({
      title,
      content,
      author,
      publishedDate,
    });
    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error creating book :(" });
  }
};

export const retrievebooks = async (req, res, next) => {
  try {
    const books = await bookmodel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const retrievesinglebook = async (req, res, next) => {
  try {
    const book = await bookmodel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatebook = async (req, res, next) => {
  try {
    const book = await bookmodel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ msg: "Book Updated", book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletebook = async (req, res, next) => {
  try {
    const book = await bookmodel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ msg: "Book Deleted", book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const pagination = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query; 
  try {
    const books = await bookmodel
      .find()
      .limit(parseInt(limit))
      .skip((page - 1) * limit); //2-1*10 retrieve el 10 el ba3dohom 
    return res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
