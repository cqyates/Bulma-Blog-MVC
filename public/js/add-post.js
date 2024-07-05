const newPostFormHandler = async (e) => {
  e.preventDefault();
  const title = document.getElementById("title-input-post").value;
  const body = document.getElementById("body-input-post").value;
  console.log(title, body)
}

document.getElementById("new-post-form")
.addEventListener("submit", newPostFormHandler)