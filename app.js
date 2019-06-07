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
                { title: '姓名', content: '', func: 'editName' },
                { title: '职位', content: '', func: 'editPosition' }
            ],
            [
                { title: '姓名', content: '', func: 'editName' },
                { title: '部门', content: '', func: 'editDepartment' }
            ],
            [
                { title: '姓名', content: '', func: 'editName' },
                { title: '会议', content: '', func: 'editConference' }
            ]
        ]
    },

    onLaunch: function () {

    }
})