import { cart } from '../cart/views/cart.js';
import { loggedUser } from '../helpers/checkAuthentication.js';
import { logout } from '../helpers/logout.js';
import { FuncVoid } from '../interfaces/interfaces.js';
import { FormData } from '../types/types.js';
import { toolsContent } from './content.js';

export const tools:FuncVoid = ():void => {

    const auth:FormData|null = loggedUser();

    const loginBtn:HTMLAnchorElement = document.createElement('a');
    loginBtn.href =  'auth/pages/login.html';
    loginBtn.textContent = 'Login';
    loginBtn.classList.add('btn', 'btn-dark');

    if(auth && toolsContent) {

        const { username } = auth;

        const cartBtn:HTMLButtonElement = document.createElement('button');
        cartBtn.type = 'button';
        cartBtn.textContent = 'Cart';
        cartBtn.id = 'cart-btn';
        cartBtn.classList.add('btn', 'btn-dark');

        cartBtn.onclick = ():void => cart();
    
        const profileLink:HTMLAnchorElement = document.createElement('a');
        profileLink.href = 'pages/profile.html';
        profileLink.textContent = username !== '' ? username as string : 'Profile';

        const logoutBtn:HTMLAnchorElement    = document.createElement('a');
        logoutBtn.href = '#';
        logoutBtn.textContent = 'Logout';

        logoutBtn.onclick = ():void => logout();

        toolsContent?.appendChild(cartBtn);
        toolsContent?.appendChild(profileLink);
        toolsContent?.appendChild(logoutBtn);

        return;
    }

    toolsContent?.appendChild(loginBtn);

} 