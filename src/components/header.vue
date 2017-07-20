<template>
  <div>
		<x-header
			style="width:100%;position:absolute;left:0;top:0;z-index:100;"
			:title="headerTitle"
			:left-options="{showBack: false}"
		>

			<!-- back -->
			<img src="../assets/images/images_01.png"
				v-if="btnBack"
				slot="overwrite-left"
				@click="routeBack"
			>

      <!-- msg -->
			<router-link
			 	v-if="btnMsg"
				to="/home/messages"
				slot="overwrite-left"
			>
				<img src="../assets/images/images_04.png">
			</router-link>

      <!-- search -->
			<router-link
				v-if="btnSearch"
				to="/home/search"
				slot="right"
			>
				<img src="../assets/images/search.png">
			</router-link>

			<!-- popover for report -->
			<popover
				v-if="btnReport"
				placement="bottom"
				slot="right"
				class="report-popover"
				:gutter="12"
				ref="reportPopover"
			>
				<div slot="content">
					<div class="report-popover-btn" @click="reportAnswer">
						<img src="../assets/images/warn.png">
						<span>投诉</span>
					</div>
				</div>

      	<!-- report -->
				<img src="../assets/images/ddd.png"
					class="btn-report"
				>
			</popover>
		</x-header>

  </div>
</template>

<script>
import { XHeader, Popover } from 'vux';

export default {
  name: 'custom-header',
  props: {
    headerTitle: {
      type: String,
      default: '老子问问'
    },
    btnBack: {
      type: Boolean,
      default: false
    },
    btnMsg: {
      type: Boolean,
      default: false
    },
    btnSearch: {
      type: Boolean,
      default: false
    },
    btnReport: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
    }
  },
  methods: {
    routeBack() {
      this.$router.back();
    },
    reportAnswer() {
			this.$refs.reportPopover.onClickedOutside();
			console.log('emit btn report click');
      this.$emit('btnReportClicked');
    },
  },
	components: {
		XHeader,
		Popover,
	}
};
</script>

<style scoped>
  .vux-header-right img,
  .vux-header-left img {
		width: 20px;
		height: 20px;
  }
  /*.report-popup {
    top: 40px;
    right: 4px;
    left: initial;
    transform: translate3d(0, 0, 0);
    padding: 4px 6px;
    border-radius: 4px;
    background-color: #00d8c8;
    color: #fff;
  }
  .report-popup:before {
    display: inline-block;
    width: 0;
    height: 0;
    border: solid transparent;
    border-width: 6px;
    border-bottom-color: #00d8c8;
    content: "";
    position: absolute;
    top: -12px;
    right: 10px;
  }*/
	.vux-header .btn-report {
		display: inline-block;
    height: 3px;
    position: relative;
    top: -3px;
	}
	.report-popover {
		margin-right: 10px;
	}
  .report-popover-btn {
    padding: 10px;
    display: flex;
    align-items: center;
		white-space: nowrap;
  }
  .report-popover-btn img {
		display: inline-block;
		width: 16px;
		height: 16px;
    margin-right: 4px;
  }
</style>