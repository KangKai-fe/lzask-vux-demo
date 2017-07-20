<template>
	<div>
		<custom-header
			header-title="回答详情"
			btnBack
      btnReport
			@btnReportClicked="reportAnswer"
		></custom-header>
		<div class="subpage-content">
			answerId: {{ answerId }}
		</div>

    <!-- report modal -->
		<mt-popup class="report-modal"
              v-model="reportModalVisible"
              popup-transition="popup-fade"
              :closeOnClickModal="false"
		>
      <header class="report-modal-header">
        <!--<img src="../assets/images/f02.png">-->
				<i class="mintui mintui-field-success modal-header-icon"></i>
        <span>内容违规</span>
      </header>
			<div class="report-content">
				<textarea rows="3"
					placeholder="请详细填写, 以确保举报能够被处理"
					v-model="reportContent"
				></textarea>
				<p class="charactor-counter"
					:class="{ oversize: reportContentOversize }"
				>{{ reportContentSize }}/60</p>
			</div>
			<footer class="report-modal-footer">
				<mt-button
					size="small"
					@click.native="reportCancel"
				>取消</mt-button>
				<mt-button
					class="btn-confirm"
					size="small"
					@click.native="reportConfirm"
				>确定</mt-button>
			</footer>
    </mt-popup>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';

	export default {
		name: 'page-answer-detail',
		data() {
			return {
				content: 'suapage answer detail',
				answerId: 0,
				reportContent: '',
        reportModalVisible: false,
			}
		},
		computed: {
			reportContentSize: function() {
				return this.reportContent.trim().length;
			},
			reportContentOversize: function() {
				return this.reportContentSize > 60;
			}
		},
		methods: {
      getAnswerInfo() {
        
        this.$http.get('/test', {
          // needLoading: false
        })
        .then(res => {
          console.log('res==========', res);
        })
        .catch(err => {
          console.log('err=============', err);
        });
      },

			reportAnswer() {
        this.reportModalVisible = true;
			},

			reportCancel() {
				reportModalVisible = false
			},

			reportConfirm() {

				if (this.reportContentOversize) {
					Toast({
						message: '不能超过60字',
						position: 'middle',
						duration: this.$config.toastDuration,
						className: 'toast-on-popup',
						iconClass: 'mintui mintui-field-error'
					});

					return;
				}

				if (this.reportContentSize === 0) {
					Toast({
						message: '不能为空',
						position: 'middle',
						duration: this.$config.toastDuration,
						className: 'toast-on-popup',
						iconClass: 'mintui mintui-field-error'
					});

					return;
				}

				this.postReportContent();
			},

			postReportContent() {
				// this.$http.post();
				console.log('post report data');
				this.reportContent = '';
				this.reportModalVisible = false;
				Toast({
					message: '提交成功',
					position: 'middle',
					duration: this.$config.toastDuration,
					iconClass: 'mintui mintui-success'
				});
			},
		},

		created() {
			// console.log('subpage created');
			this.answerId = this.$route.params.id;
      this.getAnswerInfo();
		},
	}
</script>

<style>
	.report-modal {
		width: 70%;
	}
	.report-modal-header {
		display: flex;
		align-items: flex-end;
		padding: 5px;
		border-bottom: 1px solid #f5f5f5;
	}
	.modal-header-icon {
		margin-right: 4px;
		color: #1aad11;
		font-size: 1.2em;
	}
	.report-content {
		margin: 10px 0 0;
		padding: 5px;
		border-bottom: 1px solid #f5f5f5;
	}
	.report-content textarea {
		box-sizing: border-box;
		width: 100%;
		border: none;
		outline: none;
		resize: none;
	}
	.charactor-counter {
		padding-right: 5px;
		text-align: right;
		font-size: .8em;
		color: #bababa;
	}
	.oversize {
		color: red;
	}
	.report-modal-footer {
		padding: 10px;
		text-align: right;
	}
</style>