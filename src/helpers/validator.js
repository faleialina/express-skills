function isValidId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id is not a number');
  if (id <= 0) throw new Error('id is a negative number');
  next();
}

module.exports = { isValidId };
