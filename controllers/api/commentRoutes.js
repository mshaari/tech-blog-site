const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//add a comment
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

//delete a comment
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

//update a comment
router.put('/:id', withAuth, async (req, res) => {
  try {

    const updatedComment = req.body.updatedText;

    const updateComment = await Comment.update(
      {
        body: updatedComment
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    res.status(200).json(updateComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;