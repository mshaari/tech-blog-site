const projectComment = document.getElementById("commentText");

const submitButton = document.getElementById("postButton");

const deleteButton = document.getElementById("deleteButton");

const editButton = document.getElementById("editButton");

// "e" is the argument in the function, followed by the block of code to run
submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const body = projectComment.value;
    const project_id = submitButton.getAttribute("project-id");

    if(!body) {
      window.alert("Please enter comment text.");
    };

    if (body && project_id) {
        const newComment = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ body, project_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (newComment.ok) {
            // If successful, reload page with new comment
            window.location.reload();
          } else {
            window.alert('Failed to create comment');
        };
    };
});

deleteButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const project_id = deleteButton.getAttribute("project-id");

  if (project_id) {
      const deleteComment = await fetch(`/api/comments/${project_id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
      });

      if (deleteComment.ok) {
          // If successful, reload page without comment
          window.location.reload();
        } else {
          window.alert('Failed to delete comment');
      };
  };
});
