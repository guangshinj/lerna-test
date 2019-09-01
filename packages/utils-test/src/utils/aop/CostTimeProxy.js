import AopProxy from './AopProxy'
export default class CostTimeProxy extends AopProxy {
  showDuration = -1

  before (proxyObj, targetObj, targetFunc, args) {
    targetObj[targetObj.constructor.name + targetFunc.name] = Date.now()
  }

  after (proxyObj, targetObj, targetFunc, args, returnData) {
    let duration = Date.now() - targetObj[targetObj.constructor.name + targetFunc.name]
    if (duration > this.showDuration) {
      console.warn(targetObj.constructor.name + '[' + targetFunc.name + '] costs ' + duration + ' millseconds')
    }
    delete targetObj[targetObj.constructor.name + targetFunc.name]
  }
}
