function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const client_ul = document.getElementById("clients");

const URL =
  "http://localhost:8080/ords/tp2/client/";
fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    let employees = data.items;
    return employees.map(function (client) {
      if (client.id_client==='5001') {
                                    let li = createNode("li"),
                                      span = createNode("span");
                                    span.innerHTML = `${client.id_client} ${client.nom} ${client.prenom}`;
                                    append(li, span);
                                    append(client_ul, li);
                                  }
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
