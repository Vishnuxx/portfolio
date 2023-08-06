/** @type {import('next').NextConfig} */
const nextConfig = {
	extends: "next",
	eslint: { ignoreDuringBuilds: true },
	rules: {
		"@next/next/no-img-element": "off",
	},
	images: {
		domains: [
			"img.icons8.com",
			"cdn.iconscout.com",
			"img.stackshare.io",
			"cdn.iconscout.com",
			"www.solidjs.com",
			"seeklogo.com",
			"raw.githubusercontent.com",
			"user-images.githubusercontent.com",
			"mpng.subpng.com",
			"upload.wikimedia.org",
		],
	},
};

module.exports = nextConfig
