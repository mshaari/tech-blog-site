const projectComment = document.getElementById("commentText");

const submitButton = document.getElementById("postButton");

// "e" is the argument in the function, followed by the block of code to run
submitButton.addEventListener("submit", async (event) => {
    event.preventDefault();
    const body = projectComment.value.trim();
    const commenter_id =  req.session.user_id;
    const project_id = req.session.project_id;

    if (body) {
        const newComment = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ body, commenter_id, project_id }),
            headers: { 'Content-Type': 'application/json', },
        })

        if (newComment.ok) {
            // If successful, reload page with new comment
            window.location.reload();
          } else {
            alert('Failed to create comment');
        };
    };
});
