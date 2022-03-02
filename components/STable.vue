<script setup>
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    default: () => [],
  },
  rowKey: {
    type: [String, Function],
    required: true,
  },
  showNumeration: {
    type: Boolean,
    default: true,
  },
});

const getRowKey = (row) => {
  if (typeof props.rowKey === "string") {
    return row[props.rowKey];
  }

  return props.rowKey(row);
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-if="showNumeration">№</th>
        <th v-for="column in columns" :key="column.field">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="getRowKey(row)">
        <td v-if="showNumeration">{{ rowIndex + 1 }}</td>
        <td v-for="(column, index) in columns" :key="index">
          {{ row[column.field] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
