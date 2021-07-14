const newFormHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector('#comment-text').getAttribute('data-id');
  const comment_text = document.querySelector('#comment-text').value.trim();
  
  if (post_id && comment_text) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ post_id, comment_text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/comment/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete comment');
//     }
//   }
// };

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.comment-list')
//   .addEventListener('click', delButtonHandler);
