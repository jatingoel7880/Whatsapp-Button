const content="This is content to share";

document.getElementById("whatsapp-share-button").addEventListener("click",()=>{
    let whatsappUrl="whatsapp://send?text="+encodeURIComponent(content)
    window.location.href=whatsappUrl
})