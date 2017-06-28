<template>
  <v-app>
      <v-layout column3>
          <v-flex sm3 md2>
              <rb-dimensions-panel></rb-dimensions-panel>
          </v-flex>
          <v-flex sm7 md10>
              <v-layout row10 wrap>
                  <rb-tools></rb-tools>
                  <div style="overflow: auto; width: 100%; min-height: calc(100vh - 56px)">
                      <rb-table></rb-table>
                  </div>
              </v-layout>
          </v-flex>
      </v-layout>
  </v-app>
</template>

<script>
    import rbDimensionsPanel from './components/DimensionsPanel'
    import rbTable from './components/Table'
    import rbTools from './components/Tools'
  export default {
      components: {
          rbDimensionsPanel,
          rbTable,
          rbTools
      }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
