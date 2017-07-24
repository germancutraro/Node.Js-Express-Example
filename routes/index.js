const items = [
  {name: 'Limon', category: 'Fruit', price: 25},
  {name: 'Computer', category: 'Tecnology', price: 5532},
]; //Create Items

exports.home = (req, res) => {
  res.render('index', {
    items: items //Return Items
  });
};

//404 error
exports.notFound = (req, res) => {
  let error = '404 error';
  res.send(error +  ' ' + '<a href="/">Return</a>');
};

//Add method
exports.add = (req, res) => {
  //Take input info
  let name = req.body.name,
      category = req.body.category,
      price = req.body.price;
  //Add the item
  items.push({name: name, category: category, price: price});
  res.redirect('/'); //Finally redirect to index/home
};
