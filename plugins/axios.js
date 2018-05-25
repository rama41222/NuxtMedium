export default function ({$axios, redirect}) {
  $axios.onRequest(config => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = "*";
  })
}
