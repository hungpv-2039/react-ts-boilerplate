import requestHelper from './requestHelper';

interface Options {
  method: string;
  options: object;
}

function request(options: Options) {
  return requestHelper(options);
}

const Request = {
  get(options: object) {
    return request({ method: 'GET', options });
  },

  post(options: object) {
    return request({ method: 'POST', options });
  },

  put(options: object) {
    return request({ method: 'PUT', options });
  },

  patch(options: object) {
    return request({ method: 'PATCH', options });
  },

  delete(options: object) {
    return request({ method: 'DELETE', options });
  },
};

export default Request;
