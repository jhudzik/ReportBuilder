<template>
    <v-toolbar>
        <v-toolbar-title>Tools</v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down">
             <v-toolbar-item ripple>
                 <v-btn default v-on:click.native="undo">Reset</v-btn>
             </v-toolbar-item>
       </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: 'rb-tools',
        computed: {
            hasPrevStates () {
                return false
            }
        },
        methods: {
            ...mapMutations([
                'undo'
            ])
        }
    }
</script>
