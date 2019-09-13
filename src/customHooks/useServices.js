import { useState, useEffect } from 'react';
import axios from 'axios';

function useServices() {
  const [serviceList, updateServiceList] = useState({});
  const [services, updateServices] = useState([]);

  useEffect(() => {
    // axios call for list of services
    axios.request({
      method: 'get',
      url: 'http://robokop.renci.org:4868/openapi.json',
    })
      .then((data) => {
        const newServiceList = data.data.paths || {};
        console.log('service list', newServiceList);
        updateServiceList(newServiceList);
      })
      .catch((err) => {
        console.log('Failed to get list of services', err);
      });
  }, []);

  function add(service) {
    const newService = {
      url: service,
      name: serviceList[service].post.operationId,
      options: serviceList[service].post.requestBody.content['application/json'].schema.properties.options.properties || {},
      description: serviceList[service].post.summary,
    };
    services.push(newService);
    updateServices([...services]);
  }

  function update(i, option, val) {
    services[i].options[option].default = val === '' ? '' : Number(val);
    updateServices([...services]);
  }

  function remove(i) {
    services.splice(i, 1);
    updateServices([...services]);
  }

  return {
    serviceList,
    services,
    updateServices,
    add,
    update,
    remove,
  };
}

export default useServices;
