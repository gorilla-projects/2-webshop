let app = new Vue({
    el: '#app',

    data: {
        appName: 'The Fruit Bowl',
        shoppingCart: [],
        appFruits: fruits,
    },

    mounted() {
        this.$on('add-to-cart', (id) => {
            this.updateCart(id)
        });
    },

    methods: {
        updateCart(id) {
            this.shoppingCart.push(id);

            this.$refs.cartComponent.updateShoppingCart('testje');
        },

        showCart() {
            $('.layer').fadeIn();

            $('.cart').toggle({
                direction: 'right',
            });
        },

        fadeOutShoppingCart() {
            this.$refs.cartComponent.closeShoppingCart();
        },

        landingPage() {

        },

        template: `<h1>Webshop</h1>`,
    },
})

Vue.config.devtools = true;
Vue.config.productionTip = false