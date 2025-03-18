# property-assistant-app
Create a property assistant to help with buying/selling/renting/letting


# Initial setup
1. Clone this repo
2. Install node and nvm
3. Run `npm i`
4. Run the following on the project root folder: `npm run dev`

To override local mock server, please change `VITE_MSW_DISABLED` in `.env` to `yes`

Following are links to additional documentation on this site:
- [UX](/docs/UX.md)
- [Requirements](/docs/Requirements.md])

## To generate Icons

Run the following after putting the desired svg file in `src/components/icons/svgs`:

`npx @svgr/cli src/components/icons/svgs --out-dir src/components/icons --typescript`
