/** @type {import('./index.js').Command} */
export default {
	data: {
		name: 'hello',
		description: 'Say hello!',
	},

	async execute(interaction) {
		await interaction.reply(`Hello, ${interaction.user}! :wave:`);
	},
};
