<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarView from './views/SidebarView.vue';
</script>


<template>
  <SidebarView id="sidebar"/>
  <RouterView />
</template>

<style>
#app{
  display:flex;
}
#sidebar{
  border:1px solid red;
}
</style>
