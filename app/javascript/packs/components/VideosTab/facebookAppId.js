export default () => {
  const node = document.getElementById('fb-app-id');

  return String(JSON.parse(node.getAttribute('data')));
};
