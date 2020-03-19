module.exports = function(store) {
  return function createHandler(req, res) {
    store
      .addNote(req.body)
      .then(note => res.json(note))
      .catch(err => res.status(500).json(err));
  };
};
