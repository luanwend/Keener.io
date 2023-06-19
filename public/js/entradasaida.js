
const listar=()=>{
    fetch("/api/listaproduto",{
        method:"GET"
        }
     ).then(async res=>res.json())
     .then(data=>{
        data.forEach(element => {
           var tdNome = document.createElement("option");
           tdNome.innerText = element.nome_produto;
           tdNome.value=element.id;
           document.querySelectorAll("select").forEach(e=>e.appendChild(tdNome));
           
        });
        // const prod=document.querySelector('select option:selected').value;
        document.getElementById("entrada").onchange=()=>{
            const aa=document.getElementById("entrada").value;
            const precoU=document.getElementById("precoU");
            const precoT=document.getElementById("precoT");
            let precoproduto=0
            for(let i=0;i<data.length;i++){
                
                if (data[i].id == aa) {
                    precoproduto=data[i].valor

                  }
            }
            precoU.value=parseFloat(precoproduto).toFixed(2);
            precoT.value=parseFloat(precoproduto).toFixed(2);
            document.getElementById("currentnumber").onchange=()=>{
                const qtd=document.getElementById("currentnumber").value
                precoT.value= parseFloat(precoproduto*qtd).toFixed(2);
            };
           
            
        };
        
        form.addEventListener("submit",()=>{
            const idprod=entrada.value;
            const radio=document.querySelector('input[name="flexRadioDefault"]:checked').value;
            const currentnumber=parseInt(document.getElementById("currentnumber").value);
            const precoU=document.getElementById("precoU").value;
            const precoT=document.getElementById("precoT").value;
            let qtdestoque=0
            let nomeproduto=''
            for(let i=0;i<data.length;i++){
                
                if (data[i].id == idprod) {
                    qtdestoque=data[i].quantidade
                    nomeproduto=data[i].nome_produto

                  }
            }
            
            var valor=0;

            if(radio=="saida" && currentnumber>qtdestoque){
                error.style.display="block"
                error.innerText="Quantidade acima do estoque"
                sucess.style.display="none"
            }else{

                if(radio=="saida"){
                    valor=qtdestoque-currentnumber;
                }else{
                    valor=qtdestoque+currentnumber;
                }

                const movimentacao={
                    produto: nomeproduto,
                    precoU: precoU,
                    precoT: precoT,
                    qtd: currentnumber,
                    modo: radio
                }
                const produtoupdate ={
                    id: idprod,
                    qtd: valor,
                    
                }
                fetch("/api/historico",{
                    method:"POST",
                    body: JSON.stringify(movimentacao),
                    headers:{
                        "Content-Type":"application/json"
                    }
                    
                })
                fetch(`/api/entrada/:${idprod}`,{
                    method:"PUT",
                    body: JSON.stringify(produtoupdate),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(async res=>console.log(res.json()))

                error.style.display="none"
                sucess.style.display="block"
                sucess.innerText="movimentação efetuada"


            } 
            
     })
    })
} 
window.onload=listar