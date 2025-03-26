import { en_US as localeData } from './strings'

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["contribute"], link: `/contribute` },
		{ text: localeData.pages["credits"], link: `/credits` },
		{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
		{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
	]
}

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,

	nav: [
		{ text: localeData.pages["faq"], link: `/faq` },
		{ text: localeData.pages["troubleshooting"], link: `/troubleshooting` },
		{ text: localeData.pages["checking-for-cfw"], link: `/checking-for-cfw` },
		{
			text: localeData.extras,
			items: [
				{ text: localeData.pages["godmode9-usage"], link: `/godmode9-usage` },
				{ text: localeData.pages["dumping-titles-and-game-cartridges"], link: `/dumping-titles-and-game-cartridges` },
				{ text: localeData.pages["region-changing"], link: `/region-changing` },
				{ text: localeData.pages["uninstall-cfw"], link: `/uninstall-cfw` },
			]
		}
	],
	sidebar: {
		[`/ntrboot`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{
						text: localeData.pages["multiple-options"],
						items: [
							{ text: localeData.pages["flashing-ntrboot-(3ds-single-system)"], link: `/flashing-ntrboot-(3ds-single-system)` },
							{ text: localeData.pages["flashing-ntrboot-(3ds-multi-system)"], link: `/flashing-ntrboot-(3ds-multi-system)` },
							{ text: localeData.pages["flashing-ntrboot-(dsi)"], link: `/flashing-ntrboot-(dsi)` },
							{ text: localeData.pages["flashing-ntrboot-(nds)"], link: `/flashing-ntrboot-(nds)` },
						]
					},
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/flashing-ntrboot-(3ds-single-system)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(3ds-single-system)"], link: `/flashing-ntrboot-(3ds-single-system)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/flashing-ntrboot-(3ds-multi-system)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(3ds-multi-system)"], link: `/flashing-ntrboot-(3ds-multi-system)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/flashing-ntrboot-(dsi)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(dsi)"], link: `/flashing-ntrboot-(dsi)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/flashing-ntrboot-(nds)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(nds)"], link: `/flashing-ntrboot-(nds)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(ntrboot)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/ntrboot` },
					{
						text: localeData.pages["multiple-options"],
						items: [
							{ text: localeData.pages["flashing-ntrboot-(3ds-single-system)"], link: `/flashing-ntrboot-(3ds-single-system)` },
							{ text: localeData.pages["flashing-ntrboot-(3ds-multi-system)"], link: `/flashing-ntrboot-(3ds-multi-system)` },
							{ text: localeData.pages["flashing-ntrboot-(dsi)"], link: `/flashing-ntrboot-(dsi)` },
							{ text: localeData.pages["flashing-ntrboot-(nds)"], link: `/flashing-ntrboot-(nds)` },
						]
					},
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(hardmod)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-boot9strap-(hardmod)"], link: `/installing-boot9strap-(hardmod)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(mset9)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-boot9strap-(mset9)"], link: `/installing-boot9strap-(mset9)` },
					{
						text: localeData.pages["multiple-options"],
						items: [
							{ text: localeData.pages["installing-boot9strap-(mset9-cli)"], link: `/installing-boot9strap-(mset9-cli)` },
							{ text: localeData.pages["installing-boot9strap-(mset9-play-store)"], link: `/installing-boot9strap-(mset9-play-store)` }
						]
					},
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(mset9-cli)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-boot9strap-(mset9-cli)"], link: `/installing-boot9strap-(mset9-cli)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(mset9-play-store)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-boot9strap-(mset9-play-store)"], link: `/installing-boot9strap-(mset9-play-store)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(safecerthax)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-boot9strap-(safecerthax)"], link: `/installing-boot9strap-(safecerthax)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(soundhax)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-boot9strap-(soundhax)"], link: `/installing-boot9strap-(soundhax)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(ssloth-browser)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-boot9strap-(ssloth-browser)"], link: `/installing-boot9strap-(ssloth-browser)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/installing-boot9strap-(super-skaterhax)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-boot9strap-(super-skaterhax)"], link: `/installing-boot9strap-(super-skaterhax)` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		/*
		 	The `/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2024 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["contribute"], link: `/contribute` },
			{ text: localeData.pages["credits"], link: `/credits` },
			{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
			{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
		]
	}
};

export default {
	lang: "en",
	label: "English",
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
