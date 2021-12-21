Vue.component('shopping-cart', {
    data() {
        return {
            favFruit: 'strawberry',
        }
    },

    props: {
        first_name: '',
        last_name: '',
    },

    methods: {
        closeShoppingCart() {
            $('.layer').fadeOut();
            $('.cart').fadeOut();
        },

        updateShoppingCart(value) {
            console.log('updateShoppingCart: ' + value);
        },
    },

    template: `<div class="cart">
        <button>Click me {{ this.favFruit }}</button>
        </div>`,
}


)