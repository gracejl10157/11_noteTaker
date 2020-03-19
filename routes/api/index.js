const router = require("express").Router();
const store = require("../../db/store");

const getHandler = require("./get");
const createHandler = require("./create");
const deleteHandler = require("./delete");

// GET "/api/notes" responds with all notes from the database
router.get("/notes", getHandler(store));
router.post("/notes", createHandler(store));

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", deleteHandler(store));

module.exports = router;
