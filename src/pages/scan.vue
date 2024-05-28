<template>
  <div class="logo">
    {{ title }}
  </div>

  <div class="inp">
    <n-input
      type="text"
      :allow-input="onlyAllowNumber"
      placeholder="在此输入防伪码"
      maxlength="20"
      show-count
      clearable
      v-model:value="value"
      @clear="clearInput"
    />

    <n-button class="btn" size="large" color="#b49aaa" @click="search"
      >提交查询</n-button
    >

    <div class="content" v-if="content">{{ content }}</div>
  </div>
</template>
<script lang="ts" setup>
import { NInput, NButton } from "naive-ui";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let query = route.query;
const value = ref<any>("");
const title = ref<any>("");
const content = ref("");

console.log(query);
title.value = (query && query.title) || "DMAE";
value.value = (query && query.value) || "";

const search = () => {
  if (value.value && value.value.length === 20) {
    if (value.value.length < 10) {
      content.value = "请输入正确的防伪码";
      return;
    }
    let str = value.value.substring(0, 16);

    console.log(str);
    let str1 = value.value.substring(16);

    console.log(str !== "4210742348328862");
    console.log(Number(str1) >= 5000);
    // 42107423483288627001
    if (str !== "4210742348328862" || Number(str1) > 5000) {
      content.value = "防伪码错误";
      return;
    }

    content.value = "您好，您所查询的是DMAE正牌产品，请放心使用，感谢您的查询";
  } else {
    content.value = "防伪码错误";
  }
  console.log(value.value);
};

const clearInput = () => {
  content.value = "";
};

const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value);
</script>
<style lang="scss" scoped>
.logo {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  letter-spacing: 10px;
  width: 100vw;
  color: #b49aaa;
}

.inp {
  padding: 20px;
  box-sizing: border-box;
}
.btn {
  margin-top: 24px;
  font-size: 20px;

  width: 100%;
}

.content {
  margin-top: 60px;
  background-color: #b49aaa;
  color: #ffffff;
  min-height: 80px;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
