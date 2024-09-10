

const menuItems=[
    {id:"home",content:"Welcome to the homepage!"},
    {id:"about",content:"Learn more about us on this page."},
    {id:"contact",content:"Get in touch with us here."}
];

menuItems.forEach(item=>{
    const menuItem=document.getElementById(item.id);
    menuItem.addEventListener("click",createMenuHandler(item))
})

function createMenuHandler(item){
    return function(){
        document.getElementById('content').innerText=item.content;
    }
    
}