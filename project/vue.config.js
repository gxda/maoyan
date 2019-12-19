module.exports = {
    publicPath: './', // npm run build 之后的资源路径默认 ‘/’
    devServer: {
        proxy: {
            '/hehe': {
                target: "http://m.maoyan.com/", //目标服务器
                changeOrigin: true, //是否改变请求源
                pathRewrite: { //路径重写
                    "^/hehe": '' //匹配/hehe 并修改为空
                }
            }
            // "/xixi":{
            //   target:'http://www.baidu.com',
            //   changeOrigin:true,
            //   pathRewrite:{
            //     "^/xixi":''
            //   }
            // }
        }
    }
}