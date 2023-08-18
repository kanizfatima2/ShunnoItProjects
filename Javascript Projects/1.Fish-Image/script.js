const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(`https://whatsapp.devsujon.com/api/v1/fishial`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => show_data(data.data));

  const show_data = (data) => {
    console.log(
      data.results[0].species[0]["fishangler-data"].photo["mediaUri"]
    );

    document.getElementById(
      "output"
    ).innerHTML = `<h4 style="color:#ff1155">Name:  ${data.results[0].species[0].name}</h4>
    <img style="width:100% margin-bottom:1rem" src=${data.results[0].species[0]["fishangler-data"].photo["mediaUri"]}>`;
  };
});
