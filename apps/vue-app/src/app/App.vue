<template>
  <CategoryView />

</template>

<script>
import PostView from './modules/posts/views/PostView.vue';
import CategoryView from './modules/categories/views/CategoryView.vue';

export default {
  components: {
    PostView,
    CategoryView
  }
};
</script>
