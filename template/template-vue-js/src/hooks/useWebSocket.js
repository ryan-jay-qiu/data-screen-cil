export default function useWebSocket(url) {
  const socket = ref(null)
  const message = ref('')

  const connect = () => {
    socket.value = new WebSocket(url)

    socket.value.onopen = () => {
      console.log('WebSocket connected')
    }

    socket.value.onmessage = (event) => {
      message.value = JSON.parse(event.data) // 将接收到的消息更新到 message
      console.log('Received message:', JSON.parse(event.data))
      return message
    }

    socket.value.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    socket.value.onclose = () => {
      console.log('WebSocket closed')
    }
  }

  const sendMessage = () => {
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      socket.value.send(message.value)
      message.value = ''
    }
  }

  const close = () => {
    if (socket.value) {
      socket.value.close()
    }
  }

  onMounted(() => {
    connect()
  })

  onUnmounted(() => {
    close()
  })

  return {
    message,
    sendMessage
  }
}
