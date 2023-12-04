<template>
  <div class="box">
    <div class="title">
      <div class="search">
        <el-input style="width: 200px;margin-left: 20px" v-model="input.name" placeholder="Please input name"/>
        <el-input style="width: 200px;margin-left: 20px;margin-right: 20px" v-model="input.username"
                  placeholder="Please input username"/>
        <el-button type="primary"  @click="data">查询</el-button>
        <el-button  style="margin-left: 500px" size="large" type="primary" @click="insert">新增</el-button>
        <a-modal v-model:open="open2" title="Basic Modal" @ok="insertuser">
          <el-form :model="exit" label-width="120px">
            <el-form-item label="姓名">
              <el-input v-model="exit.name"/>
            </el-form-item>
            <el-form-item label="账号">
              <el-input v-model="exit.username"/>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="exit.password"/>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="exit.phone"/>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="exit.sex" placeholder="please select your sex">
                <el-option label="男" value="男"/>
                <el-option label="女" value="女"/>
              </el-select>
            </el-form-item>

          </el-form>
        </a-modal>
      </div>
    </div>
    <el-table :data="filterTableData" size="small" style="width: 100%;margin-top: 20px;">

      <el-table-column label="Name" prop="name" width="150px"/>
      <el-table-column label="Sex" prop="sex" width="100px"/>
      <el-table-column label="UserName" prop="username" width="150px"/>
      <el-table-column label="Password" prop="password" width="200px"/>
      <el-table-column label="Phone" prop="phone" width="250px"/>
      <el-table-column label="Time" prop="time" width="200px"/>
      <el-table-column align="right">
        <template #default="scope">
          <el-button size="large" @click="handleEdit(scope.$index)"
          >Edit
          </el-button>
          <a-modal v-model:open="open1" title="Basic Modal" @ok="exitOk(scope.$index, scope.row)">
            <el-form :model="exit" label-width="120px">
              <el-form-item label="姓名">
                <el-input v-model="exit.name"/>
              </el-form-item>
              <el-form-item label="账号">
                <el-input v-model="exit.username"/>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="exit.password"/>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="exit.phone"/>
              </el-form-item>
              <el-form-item label="性别">
                <el-select v-model="exit.sex" placeholder="please select your sex">
                  <el-option label="男" value="男"/>
                  <el-option label="女" value="女"/>
                </el-select>
              </el-form-item>
              <el-form-item label="Activity time">
                <el-col :span="11">
                  <el-date-picker
                      v-model="exit.date"
                      type="date"
                      placeholder="Pick a date"
                      style="width: 100%"
                  />
                </el-col>
              </el-form-item>
            </el-form>
          </a-modal>

          <el-button
              size="large"
              type="danger"
              @click="handleDelete(scope.row)"
          >Delete
          </el-button>
          <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
            <p>是否确认删除</p>

          </a-modal>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagehead">
      <el-pagination background layout="prev, pager, next" @next-click="next" @prev-click="prev"
                     @current-change="current" :total="pagetotal" :page-size="5" v-model:current-page="page"/>
    </div>
  </div>

</template>

<script>

import {
  KeyOutlined
} from '@ant-design/icons-vue';
import api from "@/axios";


export default {
  name: "FormView",
  data() {
    return {
      KeyOutlined,
      open: false,
      open1: false,
      open2: false,
      delete: '',
      value: "",
      value1: "",
      page: 1,
      pagetotal: 100,
      filterTableData: [
        {
          id: '',
          username: '',
          name: '',
          sex: '',
          password: '',
          phone: '',
          time: ''
        }

      ],
      exit: {
        id: '',
        username: '',
        name: '',
        sex: '',
        password: '',
        phone: '',
        time: ''
      },
      input: {
        name: '',
        username: ''
      }

    };

  },
  methods: {
    insertuser() {
      this.open2 = false;
      api.post('/form/insert/1', this.exit).then(res => {
        console.log(res);
        this.data();
        alert(res.data);
      });
    },
    insert() {
      const exit={
        id: '',
        username: '',
        name: '',
        sex: '',
        password: '',
        phone: '',
        time: ''
      };
      this.exit=exit;
      this.open2= true;
    },
    handleOk() {
      this.open = false;

      api.delete("form/1", {
        params: {

          username: this.delete
        }
      }).then(res => {
        console.log(res);
        this.data();
      });
    },
    exitOk(index, row) {
      console.log(row);
      this.open1 = false;
      api.post('/form/update/1', this.exit).then(res => {
        console.log(res);
        this.data();
        alert(res.data);
      });
    },
    data() {
      api.post("form/1", {
        page: this.page,
        pageSize: 5,
        name: this.input.name,
        username: this.input.username
      }).then(res => {
        console.log(res);
        this.filterTableData = res.data.records;
        this.pagetotal = res.data.total;
      });
    },
    handleEdit(index) {
      this.open1 = true;
      this.exit = this.filterTableData[index];
    },
    handleDelete(row) {
      this.delete = row.username;
      this.open = true;


    },
    next() {
      this.page = this.page + 1;
      this.data();
    },
    prev() {
      this.page = this.page - 1;
      this.data();
    },
    current() {
      console.log(this.page);
      this.data();
    }

  },
  watch: {
    //filterTableData

  },
  mounted() {

    api.post("form/1", {
      page: 1,
      pageSize: 5,
      name: this.input.name,
      username: this.input.username
    }).then(res => {
      console.log(res);
      this.filterTableData = res.data.records;
      this.pagetotal = res.data.total;
    });

  }
}
</script>

<style scoped>

.el-table {
  font-size: 20px;

}

.pagehead {
  position: absolute;
  bottom: 70px;
  left: 600px;


}

.search {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;

}
</style>
