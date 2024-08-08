<template>
  <div class="modal fade" id="createCategoryModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title"> {{ action }} Category</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group pb-3">
                <label>Name</label>
                <input v-model="category.name" type="text" class="form-control" />
                <span class="form-text text-danger"> Error </span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="btnCloseModal">Cancel</button>
            <button class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
  </div>  
</template>  
<script>
  export default {
    name: 'CategoryForm',
    components: {
    },
    data() {
        return {
          action: 'Create',
          category: {
            _id: null,
            name: null,
          },
        };
    },
  };
</script>
  
