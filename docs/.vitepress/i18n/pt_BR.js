import { pt_BR as localeData } from './strings'

const locale = "pt_BR";

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["contribute"], link: `/${locale}/contribute` },
		{ text: localeData.pages["credits"], link: `/${locale}/credits` },
		{ text: localeData.pages["privacy-policy"], link: `/${locale}/privacy-policy` },
		{ text: localeData.pages["site-navigation"], link: `/${locale}/site-navigation` }
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
		{ text: localeData.pages["faq"], link: `/${locale}/faq` },
		{ text: localeData.pages["troubleshooting"], link: `/${locale}/troubleshooting` },
		{ text: localeData.pages["checking-for-cfw"], link: `/${locale}/checking-for-cfw` },
		{
			text: localeData.extras,
			items: [
				{ text: localeData.pages["godmode9-usage"], link: `/${locale}/godmode9-usage` },
				{ text: localeData.pages["region-changing"], link: `/${locale}/region-changing` },
				{ text: localeData.pages["uninstall-cfw"], link: `/${locale}/uninstall-cfw` },
			]
		}
	],
	sidebar: {
		[`/${locale}/ntrboot`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/${locale}/ntrboot` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/${locale}/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/flashing-ntrboot-(3ds-single-system)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/${locale}/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(3ds-single-system)"], link: `/${locale}/flashing-ntrboot-(3ds-single-system)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/${locale}/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/flashing-ntrboot-(3ds-multi-system)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/${locale}/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(3ds-multi-system)"], link: `/${locale}/flashing-ntrboot-(3ds-multi-system)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/${locale}/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/flashing-ntrboot-(dsi)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/${locale}/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(dsi)"], link: `/${locale}/flashing-ntrboot-(dsi)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/${locale}/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/flashing-ntrboot-(nds)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/${locale}/ntrboot` },
					{ text: localeData.pages["flashing-ntrboot-(nds)"], link: `/${locale}/flashing-ntrboot-(nds)` },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/${locale}/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(ntrboot)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["ntrboot"], link: `/${locale}/ntrboot` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["installing-boot9strap-(ntrboot)"], link: `/${locale}/installing-boot9strap-(ntrboot)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(hardmod)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["installing-boot9strap-(hardmod)"], link: `/${locale}/installing-boot9strap-(hardmod)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(mset9)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["installing-boot9strap-(mset9)"], link: `/${locale}/installing-boot9strap-(mset9)` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(mset9-cli)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["installing-boot9strap-(mset9-cli)"], link: `/${locale}/installing-boot9strap-(mset9-cli)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(mset9-play-store)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["installing-boot9strap-(mset9-play-store)"], link: `/${locale}/installing-boot9strap-(mset9-play-store)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(safecerthax)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["installing-boot9strap-(safecerthax)"], link: `/${locale}/installing-boot9strap-(safecerthax)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(soundhax)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["installing-boot9strap-(soundhax)"], link: `/${locale}/installing-boot9strap-(soundhax)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(ssloth-browser)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["installing-boot9strap-(ssloth-browser)"], link: `/${locale}/installing-boot9strap-(ssloth-browser)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		[`/${locale}/installing-boot9strap-(super-skaterhax)`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["installing-boot9strap-(super-skaterhax)"], link: `/${locale}/installing-boot9strap-(super-skaterhax)` },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
		/*
		 	The `/${locale}/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/${locale}/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/${locale}/key-information` },
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started` },
					{ text: localeData.pages["multiple-options"] },
					{ text: localeData.pages["finalizing-setup"], link: `/${locale}/finalizing-setup` }
				]
			},
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2024 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["contribute"], link: `/${locale}/contribute` },
			{ text: localeData.pages["credits"], link: `/${locale}/credits` },
			{ text: localeData.pages["privacy-policy"], link: `/${locale}/privacy-policy` },
			{ text: localeData.pages["site-navigation"], link: `/${locale}/site-navigation` }
		]
	}
};

export default {
	lang: "pt",
	label: "Português do Brasil",
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
