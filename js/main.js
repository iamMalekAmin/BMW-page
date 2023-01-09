let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function createcard(name,model,sor){
    let card = document.createElement('div');
    let title= document.createElement('h1');
    let age = document.createElement('p');
    let img = document.createElement('img');

    let head = document.createTextNode(name);
    let agee = document.createTextNode(model);
    img.src = sor;
    title.appendChild(head);
    age.appendChild(agee);
    
    card.style.width = '300px';
    card.style.height = '400px';
    card.style.border = ' solid #000 1px'
    img.style.width = '100%';
    img.style.height = '50%';
    card.style.backgroundColor = '#fff';
    card.style.color = '#000';
    card.style.padding ='10px';
    card.style.margin ='3px';
    card.style.marginTop ='100px'
    card.style.display ='inline-block';
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
    
}




