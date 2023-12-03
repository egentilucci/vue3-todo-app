<template>
  <input type="checkbox" :checked="todo?.completed" @click="$emit('updateTodoStatus')" />
  <span v-if="!todo?.editable" :class="{ done: todo?.completed }" @click="$emit('startEditing')">{{
    todo?.title
  }}</span>
  <input
    v-else
    type="text"
    :value="todo.title"
    @blur="$emit('stopEditing')"
    @keyup.enter="$emit('stopEditing')"
  />
  <button @click="$emit('removeTodo')">Remove</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    todo: {
      type: Object
    }
  },
  emits: ['removeTodo', 'updateTodoStatus', 'startEditing', 'stopEditing']
})
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
