<template>
	<div class="turntable">
		<h1>大转盘页面</h1>

		<div class="wrap">


			<div class="left">

				<div class="item" :style="{'transform':`rotate(${index*45}deg)`}"
					v-for="(item,index) in dataBase.slice(0,4)" :key="index">
					{{item}}
				</div>
			</div>
			<div class="right">
				<div class="item right-item" :style="{'transform':`rotate(${index*45}deg)`}"
					v-for="(item,index) in dataBase.slice(4)" :key="index">
					{{item}}
				</div>
			</div>

		</div>

	</div>
</template>
<script>
	export default {
		name: "turntable",
		data() {
			return {
				dataBase: [1, 2, 3, 4, 5, 6, 7, 8]
			}
		}
	}
</script>
<style scoped>
	.turntable {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.wrap {
		width: 500px;
		height: 500px;
		background: red;
		border-radius: 50%;
		display: flex;
			z-index:999;
			overflow: hidden;
			position:relative;
	}

	.left,
	.right {
		width: 500px;
		height: 500px;
		background: #000;
		position: relative;
		overflow: hidden;
	}
	
	.left{
		border-left:1px solid yellow;
	}

	.item {
		width: 250px;
		height:500px;
		border: 1px solid yellow;
		background: red;
		position: absolute;
		transform-origin: right center;
	}
	.right-item{
		transform-origin: left center;
	}
</style>
