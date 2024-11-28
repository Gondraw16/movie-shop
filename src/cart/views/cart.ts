import { toolsContent } from '../../components/content.js';
import { FuncVoid } from '../../interfaces/interfaces';

export const cart:FuncVoid = ():void => {

    const reference:Element|null|undefined = toolsContent?.querySelector('.cart-menu');

    if(reference) {
        reference.remove();
        return;
    } 

    const content:HTMLDivElement = document.createElement('div');
    content.classList.add('cart-menu', 'd-flex');

    const header:HTMLDivElement = document.createElement('div');
    header.classList.add('cart-header', 'd-flex', 'a-i-center', 'j-c-between');
    
    const title:HTMLParagraphElement = document.createElement('p');
    title.textContent = 'Cart';

    const closeBtn:HTMLButtonElement = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.id = 'close-cart';
    closeBtn.classList.add('btn', 'btn-dark');
    closeBtn.textContent = 'Close';

    //Insert Header Elements

    header.appendChild(title);
    header.appendChild(closeBtn);

    //Insert Header Elements

    const body:HTMLDivElement = document.createElement('div');
    body.textContent = 'Hellow body';
    body.classList.add('cart-body');

    const footer:HTMLDivElement = document.createElement('div');
    footer.classList.add('cart-footer', 'd-flex', 'a-i-center', 'j-c-between');

    const total:HTMLSpanElement = document.createElement('span');
    total.id = 'total';
    total.classList.add('total');
    total.textContent = 'Total: $0';

    const link:HTMLAnchorElement = document.createElement('a');
    link.href = 'pages/cart.html';
    link.textContent = 'Go to Cart';

    // Insert Footer Elements

    footer.appendChild(total);
    footer.appendChild(link);

    // Insert Footer Elements

    // Insert Content Elements

    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);

    // Insert Content Elements

    if(toolsContent) toolsContent.appendChild(content);  

}