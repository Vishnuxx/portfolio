/** @type {import('next').NextConfig} */
const nextConfig = {
	extends: "next",
	eslint: { ignoreDuringBuilds: true },
	rules: {
		"@next/next/no-img-element": "off",
	},
};

module.exports = nextConfig
