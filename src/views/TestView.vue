<template>
  <el-upload
      ref="upload"
      class="upload-demo"
      action="http://localhost:8080/upload"
      :limit="1"
      :on-exceed="handleExceed"
      :auto-upload="false"
  >
    <template #trigger>
      <el-button type="primary">选择文件</el-button>
    </template>
    <el-button class="ml-3" type="success" @click="submitUpload">
      上传
    </el-button>
  </el-upload>
  <div v-for="(item) in fileList">
    {{item}}
    <button @click="download(item)">下载</button>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
const upload = ref<UploadInstance>()
const fileList = ref<[]>([])
onMounted(() => {
  upload.value = upload.value!
})
const download = (item: any) => {
  console.log(item)
  const fileDownloadUrl = 'https://example.com/api/download-file';

}
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const submitUpload = () => {
  upload.value!.submit()
}
</script>
