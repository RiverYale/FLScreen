//app.js
App({
    globalData: {
        deviceNum: 0,
        maxModelNum: 4,
        modelNum: 0,
        modelName: [
            '模板1',
            '模板2',
            '模板3',
            '模板4',
        ],
        modelRealName: [
          'BJ1.BMP',
          'BJ2.BMP',
          'BJ3.BMP',
          'BJ1.BMP',
        ],
        modelInfo: [
            [
              {
                title: '房间号', content: '1716房间',
                position: { x: 400, y: 180 },
                size: 3,
              },
              {
                title: '状态', content: '',
                position: { x: 150, y: 400 },
                size: 2,
              },
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
                {
                  title: '留言', content: '',
                  position: { x: 180, y: 430 },
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
            ],
          [
            {
              title: '区域1', content: '',
              position: { x: 100, y: 180 },
              size: 2,
            },
            {
              title: '区域2', content: '',
              position: { x: 500, y: 170 },
              size: 1,
            },
            {
              title: '区域3', content: '',
              position: { x: 500, y: 230 },
              size: 1,
            },
            {
              title: '留言', content: '',
              position: { x: 180, y: 430 },
              size: 1,
            },
          ],
        ]
    },

    onLaunch: function () {

    }
})