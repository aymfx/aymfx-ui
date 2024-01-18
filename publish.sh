# publish.sh
rm -rf dist
pnpm build
nrm use npm
npm publish --access public
nrm use taobao # 还原淘宝镜像
