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


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
