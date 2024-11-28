

interface OnFocus {
    (e:Event): void;
}

export const onFocus:OnFocus = (e: Event): void => {

    const cart: Element | null = document.querySelector('.cart-menu');

    if (cart) {
        
        const target:HTMLElement = e.target as HTMLElement;

        if(target.id === 'cart-btn') return;

        if(!cart.contains(target) || target.id === 'close-cart') cart.remove();

    }
}