const button = document.getElementById('save');

button.onclick = () => {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const age = document.getElementById('age').value;

  fetch('/save', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify({
      firstname,
      lastname,
      age,
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log('saved', data);
    });
};
