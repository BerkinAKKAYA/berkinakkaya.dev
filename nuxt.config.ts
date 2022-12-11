export default {
	typescript: { shim: false },
	modules: ["@nuxtjs/tailwindcss"],
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/layouts/global.scss";',
				},
			},
		},
	},
	app: {
		head: {
			link: [
				{ rel: "icon", sizes: "192x192", href: "/favicon.ico" },
				{ rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "apple-touch-icon", type: "image/x-icon", href: "/favicon.ico" },
			],
		},
	},
};
