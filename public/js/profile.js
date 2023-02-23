// handle submitting new project (post)
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    };
  };
};

// handle deleting a project (post)
const delButtonHandler = async (event) => {
  event.preventDefault();
  const project_id = event.target.getAttribute('data-id');

  if (project_id) {
    const deleteComment = await fetch(`/api/projects/${project_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (deleteComment.ok) {
      // If successful, reload page without project
      window.location.reload();
    } else {
      window.alert('Failed to delete comment');
    };
  };
};

// handle editing a project (post)
const editButtonHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  const updatedName = window.prompt("What do you want the title to be?");
  const updatedBody = window.prompt("What do you want the body to be?");

  if (updatedBody && updatedName) {
    const updateProject = await fetch(`/api/projects/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({ updatedName, updatedBody }),
        headers: { 'Content-Type': 'application/json' },
      });

    if (updateProject.ok) {
      // If successful, reload page with updated comment
      window.location.reload();
    } else {
      window.alert('Failed to update post');
    };
  };
};

// determine if the user clicked the edit or delete button (and then redirect them to the corresponding function)
const handleEditOrDelete = async (event) => {

  if (event.target.getAttribute("id") === "updatepostbutton") {
    editButtonHandler(event);
  };

  if (event.target.getAttribute("id") === "deletepostbutton") {
    delButtonHandler(event);
  };
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', handleEditOrDelete);
