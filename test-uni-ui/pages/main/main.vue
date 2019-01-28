<template>
  <view class=""><uni-drawer :visible="true" mode="right">
    <view style="padding:30upx;">
        <view class="uni-title">抽屉式导航</view>
    </view>
</uni-drawer></view>
     

</template>

<script>

 import uniCard from "../../components/uni-card/uni-card.vue"
 import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"

export default {
    components: {uniCard,uniDrawer}
}
</script>

<style>
   
</style>
