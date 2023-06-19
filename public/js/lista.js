
const listar=()=>{
fetch("/api/listaproduto",{
   method:"GET"
   }
).then(async res=>res.json())
.then(data=>{
   data.forEach(element => {

      var tr = document.createElement("tr");
      var tdId = document.createElement("td");
      var tdNome = document.createElement("td");
      var tdpreco = document.createElement("td");
      var tdqtd = document.createElement("td");
      tdId.innerText = element.id;
      tdNome.innerText = element.nome_produto;
      tdpreco.innerText = element.valor;
      tdqtd.innerHTML=element.quantidade;
      
      tr.appendChild(tdId);
      tr.appendChild(tdNome);
      tr.appendChild(tdpreco);
      tr.appendChild(tdqtd);
      document.getElementsByTagName("tbody")[0].appendChild(tr)
      //console.log(element)
   });
})
}




window.onload=listar