let answersList = [
  {
    id: 1,
    question: '问题1 - 未查看语音',
    userAvatar: '/static/b01.jpg',
    userName: '姓名1',
    userSchool: '学校专业1',
    answerType: 'voice',
    answerChecked: false,
    answerTime: '2017-07-04 17:58:19',
    viewNumber: 11,
    likeNumber: 1
  },
  {
    id: 2,
    question: '问题2 - 已查看语音',
    userAvatar: '/static/b02.jpg',
    userName: '姓名2',
    userSchool: '学校专业2',
    answerType: 'voice',
    answerChecked: true,
    answerTime: '2017-07-04 17:58:19',
    viewNumber: 51,
    likeNumber: 67
  },
  {
    id: 3,
    question: '问题3 - 未查看文字, 默认头像',
    userName: '姓名3',
    userSchool: '学校专业3',
    answerType: 'words',
    answerChecked: false,
    answerTime: '2017-07-04 17:58:19',
    viewNumber: 12,
    likeNumber: 6
  },
  {
    id: 4,
    question: '问题4 - 已查看文字',
    userAvatar: '/static/b01.jpg',
    userName: '姓名4',
    userSchool: '学校专业4',
    answerType: 'words',
    answerChecked: true,
    answerTime: '2017-07-04 17:58:19',
    viewNumber: 77,
    likeNumber: 2
  },
];

let usersList = [
  {
    id: 1,
    name: '辽宁科技大学',
    avatar: '/static/user01.jpg',
    school: '辽宁科技大学',
    answerNumber: 302,
    followerNumber: 2
  },
  {
    id: 2,
    name: 'kangkai',
    avatar: '/static/b02.jpg',
    school: '北京化工大学高分子材料与工程',
    answerNumber: 11,
    followerNumber: 1
  },
  {
    id: 1,
    name: '辽宁科技大学',
    avatar: '/static/user01.jpg',
    school: '辽宁科技大学',
    answerNumber: 302,
    followerNumber: 2
  },
  {
    id: 2,
    name: 'kangkai',
    avatar: '/static/b02.jpg',
    school: '北京化工大学高分子材料与工程',
    answerNumber: 11,
    followerNumber: 1
  },
  {
    id: 1,
    name: '辽宁科技大学',
    avatar: '/static/user01.jpg',
    school: '辽宁科技大学',
    answerNumber: 302,
    followerNumber: 2
  },
  {
    id: 2,
    name: 'kangkai',
    avatar: '/static/b02.jpg',
    school: '北京化工大学高分子材料与工程',
    answerNumber: 11,
    followerNumber: 1
  },
];

export default {
	answersList,
  usersList
}