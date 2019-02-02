<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
			 :activeColor="activeColor"></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				
				<image src="../../../static/daxunhuan.jpg" mode="aspectFit" @longtap="save" ></image>
				<view class=""><text>7:30-20:00, 10分钟/班</text></view>
			</view>
			<view v-show="current === 1">
				
				<image src="../../../static/wenli.jpg" mode="aspectFit" @longtap="save"></image>
				
				<view class=""><text>7:20-22:00, 8分钟/班</text></view>
				
			</view>
			<view v-show="current === 2">
	    	<image src="../../../static/gongbu.jpg" mode="aspectFit" @longtap="save"></image>
				<view class=""><text>7:20-22:00, 8分钟/班</text></view>
				
				
			</view>
		</view>

		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Style</view>
		</view>
		<view class="uni-list">
			<radio-group @change="styleChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in styles" :key="index">
					{{item.text}}
					<radio :value="item.value" :checked="index === styleIndex" />
				</label>
			</radio-group>
		</view>

		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Color</view>
		</view>
		<view class="uni-list">
			<radio-group @change="colorChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in colors" :key="index">
					<view class="color-tag" :style="{backgroundColor: item}"></view>
					<radio :value="item" :checked="index === colorIndex" />
				</label>
			</radio-group>
		</view>
		<view style="height: 100upx;"></view>
	</view>
</template>

<script>
	import uniSegmentedControl from '../../../components/uni-segmented-control.vue';

	export default {
		data() {
			return {
				items: [
					'大循环',
					'文理学部',
					'工学部'
				],
				styles: [{
					value: 'button',
					text: '按钮'
				}, {
					value: 'text',
					text: '文字'
				}],
				colors: [
					'#4cd964',
					'#007aff',
					
					'#dd524d'
				],
				current: 0,
				activeColor: '#4cd964',
				styleType: 'button',
				styleIndex: 0,
				colorIndex: 0,
			}
		},
		components: {
			uniSegmentedControl
		},
		methods: {
			save(){
				uni.showActionSheet({
					itemList:['保存图片到相册'],
					success: () => {
						plus.gallery.save('https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/app_download.png', function() {
							uni.showToast({
								title:'保存成功',
								icon:'none'
							})
						}, function() {
							uni.showToast({
								title:'保存失败，请重试！',
								icon:'none'
							})
						});
					}
				})
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			styleChange(evt) {
				const value = evt.target.value;
				if (this.styleType !== value) {
					this.styleType = value;
					for (let i = 0; i < this.styles.length; i++) {
						if (this.styles[i].value === value) {
							this.styleIndex = i;
							break;
						}
					}
				}
			},
			colorChange(evt) {
				if (this.styleType !== evt.target.value) {
					this.activeColor = evt.target.value;
					this.colorIndex = this.colors.indexOf(evt.target.value);
				}
			}
		}
	}
</script>

<style>
	page {
		height: auto;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 680upx;
		text-align: center;
	}

	.color-tag {
		width: 50upx;
		height: 50upx;
	}
	
</style>
