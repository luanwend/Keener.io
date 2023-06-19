const listar=()=>{
    fetch("/api/historicoprod",{
       method:"GET"
       }
    ).then(async res=>res.json())
    .then(data=>{
       data.forEach(element => {
    
          var tr = document.createElement("tr");
          var tdId = document.createElement("td");
          var tdProd = document.createElement("td");
          var tdpreco = document.createElement("td");
          var tdTotal = document.createElement("td");
          var tdqtd = document.createElement("td");
          var tdmodo = document.createElement("td");

          tdId.innerText = element.id;
          tdProd.innerText = element.produto;
          tdpreco.innerText = element.precounitario;
          tdTotal.innerText = element.precoTotal;
          tdqtd.innerHTML=element.quantidade;
          tdmodo.innerHTML=element.modo
          if(tdmodo.innerHTML=='saida'){
              tdmodo.style.color='red';
          }else{
            tdmodo.style.color='green';
          }
          tr.appendChild(tdId);
          tr.appendChild(tdProd);
          tr.appendChild(tdpreco);
          tr.appendChild(tdTotal);
          tr.appendChild(tdqtd);
          tr.appendChild(tdmodo);
          document.getElementsByTagName("tbody")[0].appendChild(tr)
       });

       

    })
    }
    
    
    
    
    window.onload=listar