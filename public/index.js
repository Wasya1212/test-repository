const editor = ace.edit("editor");

document.querySelector(".button").addEventListener("click", (e) => {
  e.preventDefault();
  
  fetch('/', {
    method: 'post',
    body: JSON.stringify({ data: editor.getValue()}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(commits => {
      location.reload();
    });

  console.log();
});
