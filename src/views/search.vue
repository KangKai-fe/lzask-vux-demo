<template>
	<div>
		<search
			@result-click="resultClick"
			@on-change="getResult"
			:results="results"
			v-model="value"
			position="absolute"
			@on-focus="onFocus"
			@on-cancel="onCancel"
			@on-submit="onSubmit"
			ref="search"
		></search>
	</div>
</template>

<script>
	import { Search, debounce } from 'vux';
	export default {
		name: 'page-search',
		data() {
			return {
				results: [],
				value: ''
			}
		},
		components: {
			Search,
		},
		methods: {
			setFocus() {
				this.$refs.search.setFocus()
			},
			resultClick(item) {
				window.alert('you click the result item: ' + JSON.stringify(item))
			},
			getResult: debounce(function(val) {
				this.results = val ? getResult(this.value) : []
			}, 1000),
			onSubmit() {
				this.$refs.search.setBlur()
				this.$vux.toast.show({
					type: 'text',
					position: 'top',
					text: 'on submit'
				})
			},
			onFocus () {
				console.log('on focus')
			},
			onCancel () {
				console.log('on cancel')
			}
		}
	}

	function getResult (val) {
		let rs = []
		for (let i = 0; i < 20; i++) {
			rs.push({
				title: `${val} result: ${i + 1} `,
				other: i
			})
		}
		return rs
	}
</script>

<style>
	
</style>