<template>
	<div>
		<!-- header -->
    <custom-header
      header-title="消息"
      btnBack
    ></custom-header>

		<!-- subpage content -->
		<div class="subpage-content">
			<no-data v-if="msgList.length === 0"></no-data>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'page-message',
		data() {
			return {
				msgList: []
			}
		}
	}
</script>

<style>
	
</style>