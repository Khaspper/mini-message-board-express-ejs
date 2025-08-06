const form = document.getElementById("myForm");
const newDate = new Date();
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const payLoad = {
    text: formData.get("text"),
    user: formData.get("user"),
    added: newDate,
  };

  try {
    const response = await fetch("/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoad),
    });

    if (!response.ok) {
      alert("Failed to send message.");
    } else {
      window.location.href = "/";
    }
  } catch (error) {
    alert("An error occurred: " + error.message);
  }
});
//TODO: The payload isn't sending it to the post request
