<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from "element-plus";
import { AuFormToggle } from "@/packages";
const formRef = ref(null)
const formInline = reactive({
  phone: '',
  id: '',
  date: '',
  origin: '',
})

const onReset = (formEl) => {
  if (!formEl) return
  formEl.ref.resetFields()
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.ref.validate((valid) => {
    if (valid) {
      ElMessage.success('submit!')
    } else {
      console.success('error submit!')
      return false
    }
  })
}
</script>
<template>
  <div>
    <au-form-toggle ref="formRef" label-width="70px" :model="formInline" :inline="true" class="demo-form-inline">
      <el-form-item label="手机号" prop="phone" :rules="[
        { required: true, message: '手机号是必选' },
        { type: 'number', message: '手机号必须为数字' },
      ]">
        <el-input v-model="formInline.phone" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="会员号" prop="id">
        <el-input v-model="formInline.id" placeholder="请输入" clearable />
      </el-form-item>
      <template #append>
        <el-form-item label="城市" prop="orgiin">
          <el-select v-model="formInline.origin" placeholder="选择区域" clearable>
            <el-option label="上海" value="shanghai" />
            <el-option label="北京" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="创建日期" prop="date">
          <el-date-picker v-model="formInline.date" type="date" placeholder="选择日期" clearable />
        </el-form-item>
      </template>
      <template #btns>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <el-button @click="onReset(formRef)">重置</el-button>
      </template>
    </au-form-toggle>
  </div>

  <div class="mt-10"></div>
</template>

<style>
.demo-form-inline .el-input {
  --el-input-width: 120px;
}

.demo-form-inline .el-select {
  --el-select-width: 120px;
}
</style>
