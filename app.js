const tracer = require('dd-trace').init({
  service: 'nodejs-test-app',
  hostname: process.env.DD_AGENT_HOST || 'datadog-agent.datadog.svc.cluster.local'
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Datadog APM!');
});

app.get('/slow', (req, res) => {
  setTimeout(() => {
    res.send('This was a slow request!');
  }, 500);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
