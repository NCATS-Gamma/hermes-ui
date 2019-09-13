export default function buildHermesRequest(services, question) {
  const actions = [];
  services.forEach((service, i) => {
    actions[i] = {};
    // actions[i].url = service.url;
    actions[i].url = `http://robokop.renci.org:4868/${service.name}`; // TODO: weird
    // actions[i].name = service.name;
    actions[i].options = {};
    Object.keys(service.options).forEach((option) => {
      if (service.options[option].default !== '') {
        actions[i].options[option] = service.options[option].default;
      }
    });
  });
  return {
    actions,
    message: question,
  };
}
