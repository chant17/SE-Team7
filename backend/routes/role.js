const router = require('express').Router();
let role = require('../models/role.model');

router.route('/').get((req, res) => {
  role.find()
    .then(roles => res.json(roles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const admin_role = req.body.admin_role;
  const date = Date.parse(req.body.date);

  const newExercise = new role({
    username,
    admin_role,
    date,
  });

  newExercise.save()
  .then(() => res.json('role added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  role.findById(req.params.id)
    .then(role => res.json(role))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  role.findByIdAndDelete(req.params.id)
    .then(() => res.json('role deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  role.findById(req.params.id)
    .then(role => {
      role.username = req.body.username;
      role.admin_role = req.body.admin_role;
      role.duration = Number(req.body.duration);
      role.date = Date.parse(req.body.date);

      role.save()
        .then(() => res.json('role updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;