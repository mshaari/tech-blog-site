const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({})
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', withAuth, async (req, res) => {
  try {

    const newComment = await Comment.create({
      body: req.body.body,
      project_id: req.body.project_id,
      commenter_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {

    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;