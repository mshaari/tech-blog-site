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
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  const project_id = document.querySelector('#deletepostbutton').getAttribute('data-id');

  window.alert(`attempting to delete project with id = ${project_id}`);

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
  }
}

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#deletepostbutton')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('#updatepostbutton')
  .addEventListener('click', editButtonHandler);