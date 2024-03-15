// 导入依赖模块
const _ = require('lodash');
const fetch = require('node-fetch');

// 示例函数
async function fetchData() {
    // 使用node-fetch模块获取数据
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    
    // 使用lodash模块进行简单的数据处理
    const title = _.upperCase(data.title);
    console.log(title);
}

// 执行示例函数
fetchData();