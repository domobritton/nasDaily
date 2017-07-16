export default () => {
  const node = document.getElementById('initial-videos-data');

  return JSON.parse(node.getAttribute('data'));
};
