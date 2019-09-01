import AopProxy from './AopProxy'
export default class ProxyFactory {
          proxys = []

          addProxy (proxy) {
            if (proxy && proxy instanceof AopProxy) {
              this.proxys.push(proxy)
            }
          }

          // 构造方法，在原方法前后增加执行方法
          mixin (origin) {
            let _this = this

            function newFun () {
              let args = arguments
              var result
              _this.proxys.forEach(proxy => {
                proxy.before(proxy, this, origin, args)
              })
              result = origin.apply(this, arguments)
              _this.proxys.forEach(proxy => {
                proxy.after(proxy, this, origin, args, result)
              })
              return result
            }
            return newFun
          }

          /**
           * 添加AOP影响的类和方法
           * @param {*} method
           * @param {*} target
           */
          addTarget (method, target) {
            if (method && target) {
              target = this.getTarget(target)
              var funcName
              var func
              if (typeof method === 'function') {
                funcName = method.name
                func = method
              } else if (typeof method === 'string') {
                funcName = method
                if (target) {
                  if (typeof target === 'function') {
                    func = target.prototype[method]
                  } else {
                    func = target[method]
                  }
                } else {
                  func = window[method]
                }
              }
              target[funcName] = this.mixin(func)
            } else {
              console.error('aop fail')
            }
          }

          getTarget (target) {
            let result = target
            if (target) {
              if (typeof target === 'function') {
                result = target.prototype
              } else if (typeof target === 'object') {
                result = target.__proto__
              } else {
                console.error('not support this type', target)
              }
            } else {
              result = window
            }
            return result
          }
}
