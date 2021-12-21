let app = new Vue({
    el: '#app',

    props: {
        official_app_name: {
            default: 'The Fruit Bowl',
        }
    },

    data: {
        appName: 'The Fruit Bowl',
        toggleAppName: false,
        shoppingCart: [],
        appFruits: fruits,
        fruit_filter: 'all',
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

        changeText() {
            this.toggleAppName = !this.toggleAppName;
            
            this.appName = this.toggleAppName ? 'The cheese factory' : this.official_app_name;
            
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

        filterFruit() {
            if (this.fruit_filter == 'all') {
                this.appFruits.forEach(element => {
                    element.show = true;
                });
            } else {
                this.appFruits.forEach(element => {
                    element.show = element.category != this.fruit_filter ? false : true;
                });
            }
        },

        template: `<h1>Webshop</h1>`,
    },
})

Vue.config.devtools = true;
Vue.config.productionTip = false