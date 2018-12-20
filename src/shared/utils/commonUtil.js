
export function createReducer(initialState, handlers) {
  if (!initialState || !handlers) {
    throw new Error('must pass args of "initialState" and "handlers" to createReducer!');
  }

  return (state = initialState, action) => {
    if (action && action.type) {
      const { type } = action;

      if (!handlers[type]) {
        return state;
      }

      return handlers[type](state, action);
    }

    return state;
  };
}

export function contains(root, n) {
  let node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

export function createAPI(url, requestType = 'GET', params = {}) {
  let finalUrl = url;
  const body = {
    body: JSON.stringify(params),
  };
  let config = {
    method: requestType,
    // mode: 'cors',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (requestType !== 'GET' && requestType !== 'HEAD') {
    config = Object.assign(config, body);
  }
  if (params.id) {
    finalUrl = `${url}/${params.id}`;
  }

  return fetch(finalUrl, config).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return new Promise();
  });
}
