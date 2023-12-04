<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="itemname" label="itemname" width="180" />
    <el-table-column prop="courseno" label="courseno" width="180" />
    <el-table-column prop="itemhour" label="Item Hour" />
    <el-table-column prop="itemcontent" label="Item Content" />
    <el-table-column prop="itemtype" label="Item Type" />
    <el-table-column prop="iscompulsory" label="Is Compulsory" />
  </el-table>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import api from "@/axios";
const tableData = ref([])
onMounted(() => {
  api.get('/course/get1').then(res => {
    console.log(res.data.data)
    tableData.value = res.data.data
  }, err => {
    console.log(err)
  })
})
</script>
