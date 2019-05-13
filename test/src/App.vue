<template>
  <div id="app">
    <basic-header></basic-header>
    <router-view/>
  </div>
</template>

<script>
import BasicHeader from '@/components/basic/Header'
export default {
  components: { BasicHeader }
}
</script>

