<script setup lang="ts">
import DayContainer from "./DayContainer.vue"
import type ShiftType from "./ShiftType"
import type { DateTime } from "luxon"

const props = defineProps<{
  numColumns: number
  shiftTypes: ShiftType[]
  initialDate: DateTime
}>()
</script>

<template>
  <div class="shiftEditor">
    <DayContainer
      v-for="(_, i) in props.numColumns"
      :column="i + 1"
      :initial-row="1"
      :shift-types="props.shiftTypes"
      :date="props.initialDate.plus({ day: i })"
    ></DayContainer>
  </div>
</template>

<style scoped>
.shiftEditor {
  display: grid;
  column-gap: 5px;
  grid-auto-flow: column;
  grid-template-columns: repeat(v-bind("props.numColumns"), 120px);
  grid-template-rows: repeat(calc(v-bind("props.shiftTypes.length") + 1), max-content);
  user-select: none;

  font-size: 20px;
}
</style>