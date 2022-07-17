const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

class MessageEmbedUpdate extends Event {
    constructor() {
        super("messageEmbedUpdate")
    }

    async run(bot) {
        let channel = bot.channels.cache.get(bot.config.ids.channels.text.privatrooms)
        if(channel) {
            channel.messages.fetch(bot.config.ids.messages.privatrooms)
            .then(message => {
                let row1 = new MessageActionRow()
                .addComponents(new MessageButton().setEmoji('<:rebellionlimit:932178331074428938>').setCustomId('rebellionlimit').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:rebellionlock:932179170186911754>').setCustomId('rebellionlock').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:rebellionunlock:932179197026246656>').setCustomId('rebellionunlock').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:rebellionremoveuser:932179925144850492>').setCustomId('rebellionremoveuser').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:rebellionadduser:932179938830868501>').setCustomId('rebellionadduser').setStyle('SECONDARY'))

                let row2 = new MessageActionRow()
                .addComponents(new MessageButton().setEmoji('<:rebellionname:932185527556407357>').setCustomId('rebellionname').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:rebellioncrown:932185557369507881>').setCustomId('rebellioncrown').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:rebellionkick:932186096362721311>').setCustomId('rebellionkick').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:rebellionmute:932187386757132318>').setCustomId('rebellionmute').setStyle('SECONDARY'))
                .addComponents(new MessageButton().setEmoji('<:rebellionunmute:932187402070544404>').setCustomId('rebellionunmute').setStyle('SECONDARY'))
                
                let embed = new MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Управление приватной комнатой')
                .setDescription('> Жми следующие кнопки, чтобы настроить свою комнату')
                .setFooter({text: 'Использовать их можно только когда у тебя есть приватный канал'})
                .setImage('https://cdn.discordapp.com/attachments/928217923456237581/932176487979839528/Comp-2_00000_00000.png')
                .addField('** **',
                '<:rebellionlimit:932178331074428938> — установить лимит' + '\n'
                + '<:rebellionlock:932179170186911754> — закрыть комнату' + '\n'
                + '<:rebellionunlock:932179197026246656> — открыть комнату' + '\n'
                + '<:rebellionremoveuser:932179925144850492> — забрать доступ' + '\n'
                + '<:rebellionadduser:932179938830868501> — выдать доступ',
                true)
                .addField('** **',
                '<:rebellionname:932185527556407357> — сменить название' + '\n'
                + '<:rebellioncrown:932185557369507881> — передать владельца' + '\n'
                + '<:rebellionkick:932186096362721311> — выгнать из комнаты' + '\n'
                + '<:rebellionmute:932187386757132318> — забрать право говорить' + '\n'
                + '<:rebellionunmute:932187402070544404> — вернуть право говорить',
                true)
                message.edit({embeds: [embed], components: [row1, row2]})
            }).catch((err) => {
                console.log(`Ошибка с изменерием сообщения.\n${err.name}: ${err.message}`)
            })
        }
    }
}

module.exports = MessageEmbedUpdate