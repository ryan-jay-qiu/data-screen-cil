import axios from 'axios'

// // 海康摄像头的IP地址、用户名和密码
// const cameraIP = '192.168.1.100';
// const username = 'admin';
// const password = 'password';

// 设置海康摄像头的云台控制
export const setPTZControl = async (option, direction, stop) => {
  if (!option.port) return (option.port = 80)
  // const url = `http://${option.ip}:${option.port}/ISAPI/PTZCtrl/channels/1/continuous`;
  // const url = `/${option.ip.slice(12, 13)}/ISAPI/PTZCtrl/channels/1/continuous`;
  const url = `/ISAPI/PTZCtrl/channels/1/continuous`
  // const url = `http://${"localhost"}:${8080}/ISAPI/PTZCtrl/channels/1/continuous`;

  const data = !stop
    ? `<?xml version='1.0' encoding='UTF-8'?><PTZData><pan>${
        direction === 'right' ? '10' : direction === 'left' ? '-10' : '0'
      }</pan><tilt>${
        direction === 'top' ? '10' : direction === 'bottom' ? '-10' : '0'
      }</tilt></PTZData>`
    : `<?xml version='1.0' encoding='UTF-8'?><PTZData><pan>0</pan><tilt>0</tilt></PTZData>`

  const headers = {
    'Content-Type': 'application/xml'
  }
  try {
    const response = await axios.put(url, data, { headers })
    console.log('PTZ control response:', response.data)
  } catch (error) {
    console.error('Error controlling PTZ:', error.message)
  }
}

// Digest username="username", realm="realm", nonce="nonce", uri="uri", cnonce="cnonce", nc=nc, qop="qop", response="response", opaque="opaque"
// const data = `<PTZData version="2.0" xmlns="http://www.hikvision.com/ver20/XMLSchema">
//                 <pan>${command === 'left' ? '-' : command === 'right' ? '+' : '10'}</pan>
//                 <tilt>${command === 'up' ? '+' : command === 'down' ? '-' : '10'}</tilt>
//                 <zoom>0</zoom>
//                 <focus>0</focus>
//                 <iris>0</iris>
//                 <speed>${speed}</speed>
//               </PTZData>`;
