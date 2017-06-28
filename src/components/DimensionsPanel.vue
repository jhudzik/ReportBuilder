<template>
    <div class="dimensions-panel">
        <v-expansion-panel expand v-for="category in manifest">
            <v-expansion-panel-content>
                <div slot="header" class="dim-header">
                    {{ category.title }}
                </div>
                <v-card>
                    <v-card-text>
                        <v-checkbox v-for="dim in category.dimensions"
                            @change="clicker" :label="dim" :value="dim"
                            v-model="selectedDimensions">
                        </v-checkbox>
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'
    export default {
        name: 'rb-dimensions-panel',
        data () {
            return {
                manifest: [
                    {
                        title: 'Category',
                        dimensions: ['Adult', 'Brand Safe', 'Categories']
                    },
                    {
                        title: 'Device',
                        dimensions: ['User Agent', 'Browser Family', 'OS']
                    },
                    {
                        title: 'Time',
                        dimensions: ['Hour', 'Day', 'Day of Week', 'Week', 'Month']
                    }
                ]
            }
        },
        computed: {
            ...mapState({
                selectedDimensions: 'cols'
            })
        },
        methods: {
            ...mapMutations({
                clicker: 'updateCols'
            })
        }
        // methods: {
        //     clicker () {
        //         // console.log('clicked')
        //         this.$store.commit('updateCols', this.selectedDimensions)
        //         console.log(this.$store);
        //     }
        // }
    }
</script>

<style scoped lang="stylus">
    .dim-header
        color: blue
        font-size: 1.25rem
</style>
