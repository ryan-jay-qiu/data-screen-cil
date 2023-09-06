export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return [
        '日', '一', '二', '三', '四', '五', '六'
      ][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

export function getCurrentTimeRange() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // 获取当月的第一天和最后一天
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date();

  firstDay.setHours(0, 0, 0, 0);

  return {
    beginTime: parseTime(firstDay),
    endTime: parseTime(lastDay)
  };
}
export function getRecentMonthRange() {
  const lastDay = new Date();
  return {
    beginTime: parseTime(lastDay - 2592000000),
    endTime: parseTime(lastDay)
  };
}


export function getPreviousMonthRange() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // 计算上一个月的年份和月份
  let lastYear = year;
  let lastMonth = month - 1;
  if (lastMonth < 0) {
    lastYear = year - 1;
    lastMonth = 11; // 12 个月中的最后一个月是 11
  }
  const firstDay = new Date(lastYear, lastMonth, 1);
  const lastDay = new Date(lastYear, lastMonth + 1, 0);
  firstDay.setHours(0, 0, 0, 0);
  lastDay.setHours(23, 59, 59, 999);
  return {
    beginTime: parseTime(firstDay),
    endTime: parseTime(lastDay)
  };
}
export function getPreviousTimeRange() {
  return {
    beginTime: parseTime(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)),
    endTime: parseTime(new Date())
  };
}