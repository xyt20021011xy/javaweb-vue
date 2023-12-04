<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="courseNo" label="courseNo" width="180" />
    <el-table-column prop="courseName" label="courseName" width="180" />
    <el-table-column prop="credit" label="credit" />
    <el-table-column prop="creditHour" label="creditHour" />
    <el-table-column prop="courseType" label="courseType" />
    <el-table-column prop="experimentType" label="experimentType" />
    <el-table-column prop="description" label="description" />
  </el-table>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import api from "@/axios";
const tableData = ref([])
onMounted(() => {
  api.get('/course/get2').then(res => {
    console.log(res.data.data)
    tableData.value = res.data.data
  }, err => {
    console.log(err)
  })
})
</script>
