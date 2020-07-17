type optionTyoe = {
  url: string;
  onSuccess: (arg: any) => void;
  onError: (arg: any) => void;
};

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

export default function request(option: optionTyoe) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', option.url, true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      option.onSuccess(getBody(xhr));
    }
  };
  xhr.onerror = function error(e) {
    option.onError(e);
  };
}
