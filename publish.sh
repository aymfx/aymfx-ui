# publish.sh
rm -rf dist
pnpm build
npm publish --access public
