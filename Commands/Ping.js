module.exports = {
    name: "ping",
    run : async (client, message, args) => {
        message.channel.send(`🏓PONG🏓 API Latency is ${client.ws.ping}ms.`)
    }
}