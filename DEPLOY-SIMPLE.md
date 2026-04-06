# 简单部署方案 - 无需 GitHub Actions

如果 GitHub Actions 部署有问题，使用这个更简单的方法：

## 方法：Deploy from Branch

### 步骤 1：创建 gh-pages 分支

```bash
# 在本地创建并切换到 gh-pages 分支
git checkout --orphan gh-pages

# 保留需要的文件，删除其他文件
# 保留：所有 .html, .css, .js, 图片, .nojekyll
# 删除：.github, README.md, DEPLOY.md, SEO-GUIDE.md 等文档

# 添加所有文件
git add .

# 提交
git commit -m "Deploy to GitHub Pages"

# 推送到远程
git push origin gh-pages
```

### 步骤 2：GitHub 设置

1. 进入仓库 **Settings** → **Pages**
2. **Source** 选择 **"Deploy from a branch"**
3. **Branch** 选择 **"gh-pages"** / **"/ (root)"**
4. 点击 **Save**

### 步骤 3：等待部署

- 等待 1-2 分钟
- 访问 https://qsmx-hd.github.io/serenity-wood/

## 或者使用 Netlify（推荐）

更简单的方式，拖拽即可部署：

1. 打开 https://app.netlify.com/drop
2. 将整个 serenity-wood 文件夹拖拽上传
3. 立即获得在线链接

已配置好 `netlify.toml`，会自动处理路由。
