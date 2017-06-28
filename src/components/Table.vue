<template>
    <table v-if="cols.length">
        <caption style="text-align:left;">Report</caption>
        <thead>
            <tr>
                <th v-for="c in cols">{{ c }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-for="i in cols.length">{{ i }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'rb-table',
        computed: mapState({
            cols: 'cols'
        })
    }
</script>

<style scoped lang="stylus">
    caption
        border-bottom: 1px solid grey
        padding: 5px;
        font-size: 2rem
    table
        width: 100%
        text-align: center
    thead
        border-bottom: 3px solid #333
    td
        min-width: 250px
</style>
