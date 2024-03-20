<template>
  <div>
    <el-table :data="form"  style="width: 100%;margin-top: 20px;">
      <el-table-column label="Title" prop="title" width="150px"/>
      <el-table-column label="Teacher" prop="teacher" width="150px"/>
      <el-table-column label="Start Time" prop="startTime" width="200px"/>
      <el-table-column label="End Time" prop="endTime" width="250px"/>
      <el-table-column label="Content" prop="content" width="100px"/>
      <el-table-column align="right">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index)"
          >Edit
          </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index)"
          >Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <div v-if="isTrue" class="homework">
    <div class="input" >
        <a-textarea v-model:value="workinput" placeholder="Basic usage" :rows="6"  />
    </div>
    <div class="tool">
      <div>
        <el-upload
            ref="upload"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
        >
          <template #trigger>
            <el-button type="primary">select file</el-button>
          </template>
          <el-button class="ml-3" type="success" @click="submitUpload">
            upload to server
          </el-button>
        </el-upload>
      </div>

      <div>
        <a-button type="primary" @click="submitHomework" style="margin-left: 800px">提交</a-button>
      </div>


    </div>
  </div>


</template>

<script setup lang="ts">
import {onMounted, ref, unref} from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
const upload = ref<UploadInstance>()
const isTrue = ref(false);
onMounted(() => {
  upload.value = upload.value!
})

const workinput = ref('please input your homework content here...')
const form = ref([{
  title: '作业1',
  teacher:'张三',
  startTime: '2021-09-01',
  endTime: '2021-09-30',
  content: 'xxxxxxxxxxxxxxxxxxx',
}])
const handleDelete = (index: number) => {
  form.value.splice(index, 1)
}
const handleEdit = (index: number) => {
  isTrue.value = true
  console.log(index)
}

const submitHomework = () => {
  console.log(workinput.value)
  isTrue.value = false
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
<style>
.homework {
  position: fixed;
  width: 1250px;
  height: 300px;
  border-radius: 30px;
  background-color: #f3f3f3;
  bottom: 70px;
}
.input {

  position: absolute;
  width: 1190px;
  height: 200px;
  left: 30px;
  top: 30px;
}
.tool{
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 1190px;
  height: 50px;
  left: 30px;
  bottom: 60px;


}
</style>

