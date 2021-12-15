Vue.component('shopping-cart', {
    data: function () {
        return {
            
        }
    },

    props: {
        firstName: '',
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
        <button>Click me</button>
        </div>`,
})