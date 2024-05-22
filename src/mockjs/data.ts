import Mock from 'mockjs' 

export const getListData = Mock.mock({
    'list|10': [{
        'id|+1': 1,
        'title': '@ctitle(5, 10)',
        'content': '@cparagraph(1, 10)',
        'createTime': '@datetime',
        'updateTime': '@datetime',
        'author': '@cname',
        'category': '@ctitle(2, 5)',
        'tags|1-3': ['@ctitle(2, 5)'],
        'status|1': [0, 1],
        'commentCount|1-10': 1,
    }]
})
