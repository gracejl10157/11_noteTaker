module.exports = function(store) {
  return function getHandler(req, res) {
    store
      .getNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  };
};
