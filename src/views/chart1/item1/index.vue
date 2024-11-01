<template>
    <!-- <el-scrollbar class="chart-list"> -->
        <div class="row" v-for="(chartPair, index) in chartPairs" :key="index">
            <div v-for="(chartData, idx) in chartPair" :key="idx" ref="chartRefs" class="chart"
                :id="'chart' + (index * 2 + idx)"></div>
        </div>
    <!-- </el-scrollbar> -->
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineComponent } from 'vue'
import * as echarts from 'echarts'

interface ChartData {
    name: string
    data: number[]
}
const chartDataList = ref<ChartData[]>([
    { name: '图表 1', data: [120, 200, 150, 80, 70, 110, 130] },
    { name: '图表 2', data: [90, 160, 130, 170, 60, 180, 120] },
    { name: '图表 3', data: [150, 230, 224, 218, 135, 147, 260] },
    { name: '图表 4', data: [210, 290, 214, 218, 200, 240, 300] },
    { name: '图表 5', data: [210, 290, 214, 218, 200, 240, 300] },
    { name: '图表 6', data: [] },
])

const chartRefs = ref<(echarts.ECharts | null)[]>([])

// 将数据分为每两个一组
const chartPairs = ref<ChartData[][]>([])
for (let i = 0; i < chartDataList.value.length; i += 2) {
    chartPairs.value.push(chartDataList.value.slice(i, i + 2))
}

// 初始化图表
const initCharts = () => {
    chartDataList.value.forEach((chartData, index) => {
        const chartDom = document.getElementById(`chart${index}`)
        if(chartData.data.length == 0) return;
        if (chartDom) {
            const chartInstance = echarts.init(chartDom)
            const option: echarts.EChartsOption = {
                title: { text: chartData.name },
                tooltip: { trigger: 'axis' },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                },
                yAxis: { type: 'value' },
                series: [
                    {
                        name: chartData.name,
                        type: 'line',
                        data: chartData.data,
                        smooth: true,
                        areaStyle: {},
                    },
                ],
            }
            chartInstance.setOption(option)
            chartRefs.value[index] = chartInstance
        }
    })
}

// 监听窗口大小变化，调整图表尺寸
const resizeCharts = () => {
    chartRefs.value.forEach((chartInstance) => {
        if (chartInstance) chartInstance.resize()
    })
}

onMounted(() => {
    initCharts()
    window.addEventListener('resize', resizeCharts)
})

onUnmounted(() => {
    window.removeEventListener('resize', resizeCharts)
})

</script>

<style scoped>
/* .chart-list {
    height: 100vh; */
    /* overflow-y: auto; */
    /* padding: 10px; */
    /* background-color: #f5f5f5;
} */

.row {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.chart {
    flex: 1;
    /* 每个图表平分父容器宽度 */
    height: 400px;
}
</style>