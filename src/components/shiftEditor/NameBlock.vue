<script setup lang="ts">
import type { Member } from "@/types/Member"

const props = defineProps<{
  member: Member
  showRemoveButton?: boolean
}>()

const emit = defineEmits<{
  (e: "removeClicked"): void
}>()
</script>

<template>
  <div class="nameBlock">
    <img
      v-if="showRemoveButton"
      src="@/assets/remove.svg"
      class="removeButton"
      @click="emit('removeClicked')"
    />
    {{ props.member.name }}
  </div>
</template>

<style>
.nameBlock {
  width: fit-content;
  display: flex;
  align-items: center;
  padding-inline-end: 6px;
}

.removeButton {
  width: calc(var(--name-font-size) * 0.6);
  margin: 0px 6px;
  cursor: pointer;
}
</style>
