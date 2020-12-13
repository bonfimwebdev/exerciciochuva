function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}

function expandirDivTopico(){
    var pontos1=document.getElementById("pontos1");
    var topicWrapper=document.getElementById("topic-wrapper");
    var btnCriarTopico=document.getElementById("btnCriarTopico");

    if(pontos1.style.display === "none"){
        pontos1.style.display="inline";
        topicWrapper.style.display="none";
        btnCriarTopico.innerHTML="Criar tópico";
    }else{
        pontos1.style.display="none";
        topicWrapper.style.display="inline";
        btnCriarTopico.innerHTML="Cancelar tópico";
    }
}