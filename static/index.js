$(document).ready(function () {
    $('#tree').treeview({
        data: [
            {
                text: '角色',
                state: {
                    expanded: true
                },
                nodes: [
                    {
                        text: '女性'
                    },
                    {
                        text: '男性'
                    }
                ]
            },
            {
                text: '场景',
                state: {
                    expanded: true
                },
                nodes: [
                    {
                        text: '城市'
                    },
                    {
                        text: '海滩'
                    },
                    {
                        text: '森林'
                    }
                ]
            },
            {
                text: 'UI',
                state: {
                    expanded: true
                },
                nodes: [
                    {
                        text: '按钮'
                    },
                    {
                        text: '菜单'
                    },
                    {
                        text: '设置'
                    }
                ]
            }
        ],
        onNodeSelected: function (event, data) {
            console.log(data);
        }
    });
});
