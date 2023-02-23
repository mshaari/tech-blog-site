const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

//post a project/post
router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete a project/post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a project/post
router.put('/:id', withAuth, async (req, res) => {
  try {

    const updatedName = req.body.updatedName;
    const updatedBody = req.body.updatedBody;

    const projectData = await Project.update(
      {
        name: updatedName,
        description: updatedBody
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
