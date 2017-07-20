<template>
	<div>
		<!-- header -->
    <custom-header
      header-title="个人信息"
      btnBack
    ></custom-header>

		<!-- subpage content -->
		<div class="subpage-content">
			<input type="file" value="上传图片">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'page-edit-user',
		data() {
			return {
				msgList: []
			}
		}
	}
</script>

<style>
	
</style>