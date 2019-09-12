// 配置 VuePress 站点的基本文件
module.exports = {
    base: '/di5cheng_doc/',
    title: 'di5cheng前端技术团队',
    description: '———— 互联网，改变化学生意 ————',
    themeConfig: { // 主题配置
        // 添加导航栏
        nav : [ 
            { text: '规范文档', link: '/code_statdards/standard_named/'},
            { text: '技术周报', link: '/technology_review/'},
            { text: '技能拓展', link: '/skills_development/'},
            { text: '团队生活', link: '/team_life/'}
        ],
        sidebar: [
            {
                title: '代码书写规范文档',
                collapsable: false,
                children: [
                    '/code_statdards/standard_named/',
                    '/code_statdards/standard_html/',
                    '/code_statdards/standard_css_scss/',
                    '/code_statdards/standard_javascript/',
                    '/code_statdards/standard_vue/'
                ]
            }
        ],
        lastUpdated: 'Last Updated', 
    }
}