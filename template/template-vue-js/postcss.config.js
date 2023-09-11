// module.exports = {
//   plugins: {
//     // require("autoprefixer"),
//     'postcss-pxtorem': {
//       rootValue: 21, // 设计稿宽度的十分之一，例如设计稿宽度为 750px，则填写 75
//       unitPrecision: 5, // 转换后的rem值保留的小数点位数
//       propList: ['*'], // 需要进行rem转换的CSS属性列表，这里表示全部属性
//       selectorBlackList: [".not"], // 需要忽略的选择器列表，可以使用正则表达式
//       replace: true, // 是否替换原始的px值为rem值
//       mediaQuery: true, // 是否在媒体查询中也进行rem转换
//       minPixelValue: 0, // 小于等于指定数值的px值不进行转换
//     },
//   },
// };
// module.exports = {
//   plugins: [
//     require('postcss-pxtorem')({
//       rootValue: 21, // 设计稿宽度的十分之一
//       unitPrecision: 5,
//       propList: ['*'],
//       selectorBlackList: ['.not'],
//       replace: true,
//       mediaQuery: true,
//       minPixelValue: 0,
//     }),
//     require('autoprefixer')({
//       overrideBrowserslist: [
// "> 0.001%",
// "last 1 versions",
// "IE 8"
//       ],
//       // grid: true
//       // overrideBrowserslist: "browserslist"
//     })
//   ]
// };
