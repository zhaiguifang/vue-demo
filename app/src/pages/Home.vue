<template>
    <div >
        <h1>Home</h1>
        <div class=" w-40 pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Button A</div>
        <!-- 使用 @apply 提取类 -->
        <div class="btn-primary">ddd </div>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
</template>

<script>

export default {
    name:'Home',
    
}
</script>
<style scoped>
</style>