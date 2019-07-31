/**
 * Return parts of the path and search params
 */
const parseUrl = () => {
  const parsedUrl = new URL(window.location.href)
  console.log('url', parsedUrl)
  const parts = parsedUrl.pathname.split('/').filter(p => p.length > 0)
  return {
    parts,
    searchParams: parsedUrl.searchParams
  }
}

/**
 * Mimic Python range function
 */
const range = (start, stop, step) => {
  if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0
  }

  if (typeof step == 'undefined') {
      step = 1
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return []
  }

  var result = []
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i)
  }

  return result
}

export {
  parseUrl,
  range
}

