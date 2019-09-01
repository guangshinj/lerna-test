/**
 * 覆盖默认配置
 * 覆盖规则：
 * 1. 针对同名配置项，客户端配置项需要和默认配置类型一致，否则使用默认配置项
 * 2. 未设置的配置项，使用默认配置
 * 3. 支持多层级，部分配置的覆盖
 *
 * @param customOptions 客户端配置
 * @param defaultOptions 默认配置
 */
export function mergeObjectOptions<T>(
  customOptions: object | T,
  defaultOptions: T
): T {
  let result: any = {};
  let custom = customOptions as any;
  let def = defaultOptions as any;
  for (let key in defaultOptions) {
    // 以默认配置项为基准
    let newValue = custom[key];
    let defaultValue = def[key];
    let defaultValueType = Object.prototype.toString.call(defaultValue);
    if (
      newValue == null ||
      Object.prototype.toString.call(newValue) !==
      Object.prototype.toString.call(defaultValue)
    ) {
      result[key] = def[key]; // 使用默认值
    } else if (defaultValueType === "[object Object]") {
      result[key] = mergeObjectOptions(newValue, defaultValue); // 递归对象
    } else {
      result[key] = newValue;
    }
  }
  return result;
}
