module.exports = {
  apps : [{
    name: 'weather',
    script: 'server.js',
    cwd: 'komaserver/weather'
  },
  {
    name: 'cpu',
    script: 'server.js',
    cwd: 'komaserver/cpu'
  },
  {
    name: 'rain',
    script: 'server.js',
    cwd: 'komaserver/rain'
  },
  {
    name: 'roof',
    script: 'server.js',
    cwd: 'komaserver/roof'
  },
  {
    name: 'hawkularrelay',
    script: 'hawkularrelay.js',
    cwd: 'komaserver/hawkularrelay'
  },
  {
    name: 'ruuvi',
    script: 'server.js',
    cwd: 'komaserver/ruuvi'
  },
  {
    name: 'safety',
    script: 'server.js',
    cwd: 'komaserver/safety'
  },
  {
    name: 'wxtserver',
    script: 'wxtserver.py',
    cwd: 'wxt520'
  },
  {
    name: 'ip-cam-automation',
    script: 'ip-cam-automation.py',
    cwd: 'ip-cam-automation',
    interpreter: '/usr/bin/python3'
  },
  {
    name: 'fmi-radar-safety',
    script: 'radarsafety.py',
    cwd: 'fmi-radar-safety',
    interpreter: '/usr/bin/python3'
  }]
};
