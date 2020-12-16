var pontos=document.getElementById("pontos");
var maisTexto=document.getElementById("mais");
var btnLeiaMais=document.getElementById("btnLeiaMais");
var pontos1=document.getElementById("pontos1");
var topicWrapper=document.getElementById("topic-wrapper");
var btnCriarTopico=document.getElementById("btnCriarTopico");
var discussionText=document.getElementById("discussion-text");
var pontos2=document.getElementById("pontos2");
var topicWarning=document.getElementById("topic-post-warning");
var btnEnviarPostagem=document.getElementById("btnEnviarPostagem");
var pontos3=document.getElementById("pontos3");
var hiddenTopics=document.getElementById("hidden-topics");
var hiddenTopicText=document.getElementById("hidden-topic-text");
var changeFirstText=document.getElementById("changeable-first-info");
var changeSecondText=document.getElementById("changeable-second-info");
var btnCriarNovoTopico=document.getElementById("btnCriarNovoTopico");
var pontos4=document.getElementById("pontos4");

/**Expandir texto oculto**/
function leiaMais(){
    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.style.display="none";
    }
}

/**Expandir campo de criação de tópico**/
function expandirDivTopico(){
    if(pontos1.style.display === "none"){
        discussionText.style.display="inline";
        pontos1.style.display="inline";
        topicWrapper.style.display="none";
        btnCriarTopico.innerHTML="Criar tópico";
    }else{
        discussionText.style.display="none";
        pontos1.style.display="none";
        topicWrapper.style.display="inline";
        btnCriarTopico.style.display="none";
    }
}

/**Enviar postagem**/
function enviarPostagem(){
    if(pontos2.style.display === "none"){
        pontos2.style.display="inline";
        topicWarning.style.display="none";
        btnEnviarPostagem.innerHTML="Enviar";
    }else{
        pontos2.style.display="none";
        topicWarning.style.display="inline";
        topicWrapper.style.display="none";
    }
}

/**Expandir respostas do tópico que estão ocultas**/
function expandirTopicosOcultos(){
    if(pontos3.style.display === "none"){
        pontos3.style.display="inline";
        hiddenTopics.style.display="none";
        hiddenTopicText.style.display="none";
        changeFirstText.innerHTML="1 like";
        changeSecondText.innerHTML="1 resposta";
    }else{
        pontos3.style.display="none";
        hiddenTopics.style.display="inline";
        hiddenTopicText.style.display="inline";
        changeFirstText.innerHTML="4 likes";
        changeSecondText.innerHTML="4 respostas";
    }
}

/**Enviar nova postagem**/
function enviarNovaPostagem(){
    if(pontos4.style.display === "none"){
        pontos2.style.display="inline";
        topicWarning.style.display="none";
        btnCriarNovoTopico.innerHTML="Criar novo tópico";
    }else{
        pontos4.style.display="none";
        topicWarning.style.display="none";
        topicWrapper.style.display="inline";
    }
}