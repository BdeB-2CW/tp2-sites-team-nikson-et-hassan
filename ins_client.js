function ins_client() {
  let client_rec = {
    id_client: 5001,
    nom: "Accilien",
    prenom: "Johnny",
  };
  emp_rec.id_client = document.getElementById("id_client").value;
  emp_rec.nom = document.getElementById("nom").value;
  emp_rec.prenom = document.getElementById("prenom").value;

  const URL =
      "http://localhost:8080/ords/tp2/client/";
    
fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emp_rec),
  });
  .then((resp) => resp.json()
    
 /* let response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emp_rec),
  });
  let result = await response.json();
  alert(result.message);*/
}



fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let clients = data.items; //.results;
    return clients.map(function (client) {
      if (client.id_client === "5001") {
        let li = createNode("li"),
          span = createNode("span");
        span.innerHTML = `${client.id_client} ${client.nom} ${client.prenom}`;
        append(li, span);
        append(emp_ul, li);
      }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });