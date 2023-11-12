document.querySelector("#update").addEventListener("click", (event) => {
  event.preventDefault();
  // const postId = document.querySelector("#hiddenPostId").value;
  const editResource = {
    title: document.querySelector("#editedTitle").value,
    description: document.querySelector("#editedContent").value,
    category_id: document.querySelector("#inputCategory").value,
  };
  // console.log(postId);
  console.log(editResource);
  fetch(`/api/resource/${resourceId}`, {
    method: "PUT",
    body: JSON.stringify(editResource),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      console.log("Resource updated");
      location.href = "/dashboard"; //verify path
    } else {
      alert("please try again");
    }
  });
});

document.querySelector("#delete").addEventListener("click", (event) => {
  event.preventDefault();
  // const postId = document.querySelector("#hiddenPostId").value;
  fetch(`/api/resouce/${resourceId}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      console.log("Resource deleted");
      location.href = "/dashboard"; // verify path
    } else {
      alert("please try again");
    }
  });
});
