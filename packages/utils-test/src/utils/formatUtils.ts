const timeLabelMapping: any = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 24 * 3600,
  month: 30 * 24 * 3600
};

function formatMapping(mapping: object = timeLabelMapping): Array<Object> {
  let result = [];
  for (let key in mapping) {
    let value = (mapping as any)[key];
    if (value > 0) {
      result.push({ unit: key, value });
    }
  }
  result.sort((a, b) => (a.value > b.value ? -1 : 1));
  return result;
}

export function splitPeriodTime(
  second: number,
  mapping: object = timeLabelMapping
): Array<Object> {
  let result: Array<Object> = [];
  let configs: Array<Object> = formatMapping(mapping);
  console.info("configs", configs);
  for (let config of configs) {
    let { unit, value } = config as any;
    let size = (second - (second % value)) / value;
    result.push({ unit, value, size });
    second -= size * value;
  }
  return result;
}

export function formatTime(second: number): string {
  let result: string = "";
  const hourLimit = timeLabelMapping.hour;
  let splitResults: Array<Object> = splitPeriodTime(second);
  let beginning = true;
  for (let splitResult of splitResults) {
    let { unit, value, size } = splitResult as any;
    if (size > 0 || !beginning) {
      let splitSignal = value < timeLabelMapping.hour ? ":" : " ";
      if (beginning) {
        beginning = false;
      } else {
        result += splitSignal;
      }
      result += value <= hourLimit ? String(size).padStart(2, "0") : size;
      if (value > hourLimit) {
        result += size > 1 ? unit + "s" : unit;
      }
    }
  }
  if (result.length == 0) {
    result = String(second);
  }
  return result;
}
