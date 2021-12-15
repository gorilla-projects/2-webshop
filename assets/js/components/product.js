Vue.component('products', {
    data: function () {
        return {
            fruitBowl: [],
        }
    },

    props: {
        fruit_data: {
            required: true,
            type: {},
        },

        first_name: '',
        last_name: '',
        insertion: '',
    },

    created() {
        this.fruitBowl = fruits;
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id);
        },

        formSubmit(params) {

        },
    },

    computed: {
        fullName() {
            return this.first_name + this.insertion + ' ' + this.last_name;
        },

        age () {

        },
    },
    
    template: `
        <div class="card">
            <div class="row">
                <h1>{{ fullName }}</h1>
                <div class="col-md-4 pt-3" v-for="fruit in fruitBowl">
                    <img :src="imagePath + fruit.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ fruit.name }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>Stock: {{ fruit.stock }}</p>
                        <button class="btn btn-primary" :disabled="fruit.stock === 0" @click="addToCart(fruit.id)">Order</button>
                    </div>
                </div>
            </div>
        </div>`,
})