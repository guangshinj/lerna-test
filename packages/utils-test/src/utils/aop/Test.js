import ProxyFactory from './ProxyFactory'
import CostTimeProxy from './CostTimeProxy'
import InputOutputProxy from './InputOutputProxy'
export class Person {
  name

  constructor(name) {
    this.name = name
  }

  eat () {
    console.info(this.name + ' is eating')
    return 'common thing'
  }
}

export default class Teacher extends Person {
  type

  constructor(type, name) {
    super(name)
    this.type = type
  }

  eat (thing = '') {
    console.info('teach is eating' + thing)
    return 'teacher thing'
  }

  teach (lesson) {
    console.info(this.name + ' is teaching,type is ' + this.type, 'lesson is ', lesson)
  }
}

function windowFunc () {
  console.info('windowFunc')
}

function a () {
  function funcFunc () {
    console.info('funcFunc')
  }

  let proxyFactory = new ProxyFactory()
  let costTimeProxy = new CostTimeProxy()
  let inputOutputProxy = new InputOutputProxy()
  proxyFactory.addProxy(inputOutputProxy)
  proxyFactory.addProxy(costTimeProxy)

  console.info(Person)
  console.info(Teacher)

  proxyFactory.addTarget('eat', Person)
  proxyFactory.addTarget(Teacher.prototype.teach, Teacher)

  // proxyFactory.addTarget(windowFunc)
  // proxyFactory.addTarget(funcFunc, a)

  let p = new Person('zhang4')
  let t = new Teacher('Math', 'wang8')
  proxyFactory.addTarget(Teacher.prototype.eat, t)

  p.eat('apple')
  t.eat('lunch')
  t.teach('lesson 1')

  windowFunc('in window')
  funcFunc('in clause')
}
a()
