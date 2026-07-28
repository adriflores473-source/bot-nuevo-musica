require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Crear la instancia del cliente con los permisos necesarios
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Evento que se ejecuta cuando el bot enciende
client.once('ready', () => {
    console.log(`¡Bot encendido como ${client.user.tag}!`);
});

// Evento para responder a los mensajes
client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!hola') {
        message.reply('¡Hola! ¿Cómo estás?');
    }
});

// Iniciar sesión usando la variable de entorno
client.login(process.env.DISCORD_TOKEN);