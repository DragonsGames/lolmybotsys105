const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', function(){//npm i ms 
  var ms = 60000 ;
  var setGame = [`+help`,'+help','+help','+help',`+help`];
  var i = -1;
  var j = 0;
  setInterval(function (){
      if( i == -1 ){
          j = 1;
      }
      if( i == (setGame.length)-1 ){
          j = -1;
      }
      i = i+j;
      client.user.setGame(setGame[i],`http://www.twitch.tv/v5bz`);
  }, ms);

});


client.on("message", message => {
  var prefix = "+";

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **ليس لديك الصلاحيه حتى تمسح الشات**');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تم مسح الشات",
      color: 0x06DF00,
      description: "تم المسح„ ",
      footer: {
        text: "آ©speed cash"
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
});






client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] =='+bc') {
  if (!args[1]) {
message.channel.send("**.bc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField('** الـسيرفر**', `${message.guild.name}`,true)
          .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
          .addField(' **الرسالة** ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const AziRo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)   
      .setTitle('✔️ | جاري ارسال رسالتك ') 
      .addBlankField(true)
      .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
      .addField('📋| الرسالة ', args)
      .setColor('RANDOM')  
      message.channel.sendEmbed(AziRo);          
  }
  } else {
      return;
  }
});  



client.on('message', message => {
  if (message.content.startsWith("+avatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});




client.on('message', message => {
  if (message.content === "+roles") {
      if(!message.channel.guild) return;
      var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField('Roles:',`**[${roles}]**`)
      message.channel.sendEmbed(embed);
  }
});

client.on('message', message => {
  if (message.content === "+id") {
  let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(message.author.avatarURL)
 .addField("Name:",`${message.author.username}`, true)
 .addField('Discrim:',"#" +  message.author.discriminator, true)
 .addField("ID:", message.author.id, true)
 .addField("Create At:", message.author.createdAt, true)
    
    
 message.channel.sendEmbed(embed);
   }
});


client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('.com')){
    if(!message.member.hasPermission('MANAGE_MESSAGE'))
      message.delete()
  return message.reply(`**Don't Share Links Plz :x:**`)
  }
});


client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('517471539340378133');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: [ ${currentSize} ]`);
  if (currentSize !== size) channel.setName(`Voice Online: [ ${currentSize} ]`);
});



client.on('message', function(message) {
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      var iiMo = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .setTitle('``I have received a new DM !``')
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
      .setFooter(`From **${message.author.tag} (${message.author.id})**`)
  client.channels.get("517473315787636741").send({embed:iiMo});
  }
});


  


client.on('message', message => {
  var prefix = "+";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);


let args = message.content.split(" ").slice(1);
let x = args.join(" ")
  if(message.content.startsWith(prefix + 'say')) {
      message.channel.send(''+x);
          message.delete(999)
  }
  
 
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "+roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});





client.on('message', message => {
  if (message.content.startsWith("+bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('``الاسم👑``' , `[ ${client.user.tag} ]` , true)
      .addField('``الايدي🆔``' , `[ ${client.user.id} ]` , true)
      .addField('``سرعة البوت📨``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('``السيرفرات🌐``', [client.guilds.size], true)
          .addField('``المستخدمين👥``' ,`[ ${client.users.size} ]` , true)
      .addField('``الرومات💭``' , `[ ${client.channels.size} ]` , true)
                .addField('``البرفكس✴️``' , `[ + ]` , true)
                .setFooter(' ￼ ')
  })
}
});




client.on("message", message => {
  if (message.content === "+help") {
   const embed = new Discord.RichEmbed() 
       .setColor("#FF0000")
       .setDescription(`**🕴🏾الاوامر العامة|Public Commands🕴🏾**
** __+id__->**معلومات عنك
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+Bot__->**معلومات عن البوت
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+avatar__->**صورتك
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+roles__->**يظهر لك عدد الرتب
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+help__->**تظهر لك هذي القائمة
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- `)
 message.author.sendEmbed(embed)
 
 }
 });


 client.on("message", message => {
  if (message.content === "+help") {
   const embed = new Discord.RichEmbed() 
       .setColor("#57FEFF")
       .setDescription(`**⚙️اوامر الادارة|Administrator⚙️**
** __+kick__->**طرد
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+ban__->**باند
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+mute__->**ميوت
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+unmute__->**فك ميوت
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+clear__->**حذف الشات
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
**__+bc__->**برود كاست 
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
 message.author.sendEmbed(embed)
 }
 });


client.login('NTI4NTYzNzk2NzcyMzg4ODY0.DwkHCg.8TEghkcwu4OvMg-_jKVv_fqz4Og');