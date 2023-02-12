const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]});
    
    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.param.id, {
      include:[{model: Product}]
    });
    if (!category) {
      res.status(404).json({message:"This is not yet a category"});
      return 1;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      name: req.body.name
    });
    res.status(200).json(categoryDate);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {name: req.body.name},
      {where: {id: req.params.id}
      });
  } catch (err) {
    res.status(400).json(err);
  }
});
	   

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
	id: req.params.id
      }
    });

    if(!CategoryData) {
      res.status(404).json({message: "No category found with that id!"});
      return 1
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
