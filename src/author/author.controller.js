import authormodel from "../../db/models/author.model.js";

export const createauthor = async (req, res, next) => {
  try {
    const { name, bio, birthDate, books } = req.body;
    const author = await authormodel.create({ name, bio, birthDate, books });
    res.status(201).json({ msg: "author created :)", author });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error creating author :(" });
  }
};

export const retrieveauthors = async (req, res, next) => {
  try {
    const authors = await authormodel.find().populate("books");
    res.json(authors);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error retrieving authors :(" });
  }
};

export const retrievesingleauthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const author = await authormodel.findById(id).populate("books");
    if (!author) {
      return res.status(404).json({ message: "Author not found :(" });
    }
    res.json(author);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error retrieving author :(" });
  }
};

export const updateauthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const author = await authormodel
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .populate("books");
    if (!author) {
      return res.status(404).json({ message: "Author not found :(" });
    }
    res.json(author);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error updating author :(" });
  }
};

export const deleteauthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const author = await authormodel.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found :(" });
    }
    res.json({ message: "Author deleted successfully :)" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error deleting author :(" });
  }
};

export const searchAuthors = async (req, res, next) => {
  const { name } = req.params;
  try {
    const authors = await authormodel.find({ name: new RegExp(name, "i") });
    return res.status(200).json(authors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const pagination = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const author = await authormodel
      .find()
      .limit(parseInt(limit))
      .skip((page - 1) * limit); //2-1*10 retrieve el 10 el ba3dohom
    return res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const relationship = async (req, res, next) => {
  try {
    const author = await authormodel.findById(req.params.id).populate("books");
    if (!author) return res.json({ message: "Author not found" });
    return res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
