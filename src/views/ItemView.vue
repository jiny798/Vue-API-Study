<template>
  <div>
    {{this.$store.state.item.title}}
    {{this.$store.state.item.content}}
  </div>
</template>

<script>
export default {
    created(){
        const itemId = this.$route.params.id;
        console.log(itemId);
        this.$store.dispatch('FETCH_ITEM',itemId);
    }
}
</script>

<style>

</style>