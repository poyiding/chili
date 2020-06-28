export default function getUrlParams(url?: string): object {
  let qs = '';
  if (url && url.split('?')[1]) {
    // eslint-disable-next-line prefer-destructuring
    qs = url.split('?')[1];
  } else {
    qs = window.location.search;
  }
  const params: { [key: string]: string } = {};
  const re = /[?&]?([^=]+)=([^&]*)/g;
  let tokens;

  // eslint-disable-next-line no-cond-assign
  while ((tokens = re.exec(qs.split('+').join(' ')))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}
