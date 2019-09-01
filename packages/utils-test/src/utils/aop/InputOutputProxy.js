import AopProxy from './AopProxy'
export default class InputOutputProxy extends AopProxy {
  before (proxyObj, targetObj, targetFunc, args) {
    console.info('input', args)
  }

  after (proxyObj, targetObj, targetFunc, args, returnData) {
    console.info('output', returnData)
  }
}
