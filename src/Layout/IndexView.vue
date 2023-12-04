<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed"  collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>Dashboard</span>
          <router-link to="/"  ></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <user-outlined />
          <span>Student</span>
          <router-link to="/form"  ></router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <user-outlined />
          <span>Teacher</span>
          <router-link to="/teacher"  ></router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <upload-outlined />
          <span>nav 3</span>
          <router-link to="/test"  ></router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <upload-outlined />
          <span>experimentitems</span>
          <router-link to="/first"  ></router-link>
        </a-menu-item>
        <a-menu-item key="6">
          <upload-outlined />
          <span>course</span>
          <router-link to="/course"  ></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <div class="header">
        <a-layout-header style="background: #fff; padding: 10px">
          <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </a-layout-header>
        <div class="private">
          <img src="../assets/app.png" alt="" class="photot">
          <el-dropdown  trigger="click" style="margin-right: 30px;margin-top: 10px">
        <span class="el-dropdown-link">
          个人中心<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">我的</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  <a href="https://github.com/" target="_blank">项目地址</a>
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus" @click="quit">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>


      </div>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '595px',borderRadius: '30px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
// import {router} from '../router/index';
const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);
const router = useRouter();
function quit() {
  localStorage.removeItem('token');

  router.push('/login');
}
</script>
<style>
.photot{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.logo{
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-menu-item ant-menu-item-selected {
  height: 60px;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-menu-inline .ant-menu-item {
  height: 60px;
  line-height: 60px;
  list-style-position: inside;
  list-style-type: disc;
}
</style>
