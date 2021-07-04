function getJSON(url, useJSON = true) {
  return new Promise((resolve, reject) => {
    const handler = function () {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    const client = new XMLHttpRequest()
    client.open('GET', url)
    client.onreadystatechange = handler
    if (useJSON) {
      client.responseType = 'json'
      client.setRequestHeader('Accept', 'application/json')
    }
    client.send()
  })
}

// 你的代码
/**
 * 提示：
 * ajax请求用提供的getJSON函数，该方法已经在系统中存在，请直接使用
 * 本文件中已经给出部分程序的骨架，请完成以下函数的内容，并通过调用函数实现功能
 *
 * 建议你最好使用提供给你的函数框架，
 * 但是如果你有自己的处理方式也可以不用以下提供的代码框架
 *
 * 以下已经定义的函数如果需要参数，请自己定义，
 * 现在没有参数不代表不能定义自己的参数！
 */

// 向接口（json）请求所有商品数据
function queryProducts() {
  // 应该 return promise
}

// 渲染商品列表
function renderProducts() {

}

// 渲染购物车商品列表
function renderCartItems() {

}

// 绑定页面事件
function bindEvents() {

}

// 向购物车添加商品
function addCartItem() {

}
// 删除购物车中的商品
function removeCartItem() {

}

// 保存购物车数据到本地存储
function saveCart() {

}
// 从本地存储载入购物车数据
function loadCart() {

}

// 书写你的代码，使内容得以显示，使用户交互可以实现
