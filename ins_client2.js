function ins_client2() {
  let client_rec = {
    id_client: 5001,
    nom: "Johnny",
    prenom: "Accilien",
  };
  client_rec.id_client = document.getElementById("id_client").value;
  client_rec.nom = document.getElementById("nom").value;
  client_rec.prenom = document.getElementById("prenom").value;

  const URL =
    "http://localhost:8080/ords/tp2/client/";

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client_rec),
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}
