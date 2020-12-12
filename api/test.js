module.exports = (req, res) => {
  const {
    query: { name },
  } = req;
  name = name.replace(/<>/ig, '')

  res.send(`Hello ${name}!`);
};
