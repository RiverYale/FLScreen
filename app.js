//app.js
App({
    globalData: {
        deviceNum: 0,
        maxModelNum: 3,
        modelName: [
            '模板1',
            '模板2',
            '模板3'
        ],
        modelInfo: [
            [
                { title: '会议主题', content: '' },
                { title: '姓名', content: '' },
                { title: '姓名拼音', content: '' },
                { title: '职称', content: '' }
            ],
            [
                { title: '姓名', content: '' },
                { title: '姓名拼音', content: '' },
                { title: '部门名称', content: '' },
                { title: '职位名称', content: '' },
                { title: '留言区', content: '' }
            ],
            [
                { title: '姓名', content: '' },
                { title: '姓名拼音', content: '' },
                { title: '部门名称', content: '' },
                { title: '职位名称', content: '' },
                { title: '留言区', content: '' }
            ]
        ]
    },

    onLaunch: function () {

    }
})