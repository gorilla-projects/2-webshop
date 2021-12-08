Vue.component('shopping-cart', {
    data: function () {
        return {

        }
    },

    props: {

    },

    methods: {
        closeShoppingCart() {
            $('.layer').fadeOut();
            $('.cart').fadeOut();
        },
    },

    template: `<div class="cart" @click="closeShoppingCart">
        
        </div>`,
})