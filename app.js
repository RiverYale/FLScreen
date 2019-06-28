//app.js
App({
    globalData: {
        deviceNum: 0,
        maxModelNum: 3,
        modelNum: 0,
        modelName: [
            '模板1',
            '模板2',
            '模板3'
        ],
        modelRealName: [
          'BJ1.BMP',
          'BJ2.BMP',
          'BJ3.BMP',
        ],
        modelInfo: [
            [
                { title: '会议主题', content: '' },
                { title: '姓名', content: '' },
                { title: '姓名拼音', content: '' },
                { title: '职称', content: '' }
            ],
            [
                { 
                  title: '姓名', content: '' ,
                  position: { x: 150, y: 180 },
                  size: 3,
                },
                { 
                  title: '部门', content: '' ,
                  position: { x: 550, y: 170 },
                  size: 1,
                },
                { 
                  title: '职位', content: '' ,
                  position: { x: 550, y: 230 },
                  size: 1,
                },
            ],
            [
              {
                title: '姓名', content: '',
                position: { x: 150, y: 180 },
                size: 3,
              },
              {
                title: '部门', content: '',
                position: { x: 550, y: 170 },
                size: 1,
              },
              {
                title: '职位', content: '',
                position: { x: 550, y: 230 },
                size: 1,
              },
            ]
        ]
    },

    onLaunch: function () {

    }
})