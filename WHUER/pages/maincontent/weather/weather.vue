<template>
	<view class="content">
		<view class="header uni-column">
			<view class="uni-flex center">
				<text class="b">{{w.wendu}}度&nbsp&nbsp|&nbsp&nbsp{{w.forecast.weather[0].day.type}}</text>
				<text>{{w.city}}&nbsp&nbsp|&nbsp&nbsp{{w.fengxiang}}: {{w.fengli}}&nbsp&nbsp|&nbsp&nbsp湿度：{{w.shidu}}</text>
			</view>
			
		</view>
		
		<view class="medium uni-column uni-padding-wrap">
			<view class="uni-flex mline uni-common-mt ">
				<view class=" uni-card mcard">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe66e;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[0].name}}:{{w.zhishus.zhishu[0].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[0].detail}}</text>
						
					</view>
				</view>
				<view class=" uni-card mcard mright">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe670;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[2].name}}:{{w.zhishus.zhishu[2].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[2].detail}}</text>
					</view>
				</view>
			</view>
			<view class="uni-flex mline uni-common-mt ">
				<view class=" uni-card mcard">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe66b;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[3].name}}:{{w.zhishus.zhishu[3].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[3].detail}}</text>
						
					</view>
				</view>
				<view class=" uni-card mcard mright">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe66d;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[4].name}}:{{w.zhishus.zhishu[4].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[4].detail}}</text>
					</view>
				</view>
			</view>
			<view class="uni-flex mline uni-common-mt ">
				<view class=" uni-card mcard">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe66a;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[5].name}}:{{w.zhishus.zhishu[5].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[5].detail}}</text>
						
					</view>
				</view>
				<view class=" uni-card mcard mright">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe668;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[7].name}}:{{w.zhishus.zhishu[7].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[7].detail}}</text>
					</view>
				</view>
			</view>
			<view class="uni-flex mline uni-common-mt ">
				<view class=" uni-card mcard">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe669;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[8].name}}:{{w.zhishus.zhishu[8].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[8].detail}}</text>
						
					</view>
				</view>
				<view class=" uni-card mcard mright">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe66c;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[9].name}}:{{w.zhishus.zhishu[9].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[9].detail}}</text>
					</view>
				</view>
			</view>
			<view class="uni-flex mline uni-common-mt ">
				<view class=" uni-card mcard">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe66d;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[6].name}}:{{w.zhishus.zhishu[6].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[6].detail}}</text>
						
					</view>
				</view>
				<view class=" uni-card mcard mright">
					<view class="uni-card-header mheader">
						<text class="list-icon">&#xe6b9;</text>
						<text class="zhishu uni-common-pl">{{w.zhishus.zhishu[10].name}}:{{w.zhishus.zhishu[10].value}}</text>
					</view>
					<view class="uni-card-footer mfooter">
						<text class="zhishu ">{{w.zhishus.zhishu[10].detail}}</text>
					</view>
				</view>
			</view>
			
		</view>
		<view class="footer" style="height: 100upx;">
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			w:{}	
			};
		},
		onLoad() {
			this.getw();
		},
		methods:{
			getw(){
				uni.request({
					url: 'https://api.thinker.ink/v1/weather/?city=武汉',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res.data.data);
						this.w = res.data.data;
						
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
		
	}
</script>

<style>
	@import '../../../common/common.css';
.mright {
	margin-left:15upx ;
}
.mcard{
	width: 675upx;
	background-color: white;
}
.mheader{
	font-size: 28upx;
	text-align: left;
}
.mfooter{
	font-size: 30upx;
	
}
.header{
	background-color: #1bb76e;
	color: white;
	height: 200upx;
	display: flex;
	
}
 .center{
	text-align: center;
	height: 100upx;
	line-height: 100upx;
} 

</style>
