<template>
    <div class="logo">
        <!-- <img :src="setting.logo" alt=""> -->
        <p>{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let title = ref('图表展示系统');
</script>
<script lang="ts">
export default {
    name: "Logo"
}
</script>
<style scoped lang="scss">
.logo {
    width: $base-menu-logo-width;
    height: $base-menu-height;
    color: #4caf50;
    display: flex;
    align-items: center;
    padding: 10px;

    // img {
    //     widwidth: 40px;
        // height: 40px;
        // margin-right: 10px;
    // }

    p {
        font-size: $base-logo-title-fontSize;
        // margin-left: 10px;
        // font-size: 24px;
        font-weight: bold;
        margin-right: 50px;
    }
}
</style>