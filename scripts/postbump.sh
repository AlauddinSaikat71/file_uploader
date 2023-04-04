VERSION=$(cat package.json | grep version | head -1 | cut -d\" -f4)

sed -i "s+upg/file-uploader:*.*.*+upg/file-uploader:$VERSION+g" docker-compose.yml
sed -i "s+upg/file-uploader:*.*.*+upg/file-uploader:$VERSION+g" deployments/file-uploader.stack.yml
