form.addEventListener("submit",()=>{
    const register ={
        name: nome.value,
        price: parseFloat(price.value).toFixed(2),
        qtd:qtd.value
    }
    fetch("/api/produtos",{
        method:"POST",
        body: JSON.stringify(register),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
            .then(data=>{
            if(data.status=="error"){
                sucess.style.display="none"
                error.style.display="block"
                error.innerText=data.error
            }else{
                sucess.style.display="block"
                error.style.display="none"
                sucess.innerText=data.sucess
            }
        })
    })
