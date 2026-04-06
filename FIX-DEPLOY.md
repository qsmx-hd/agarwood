# GitHub Pages 部署修复指南

## 当前问题
仓库设置正确，但访问 https://qsmx-hd.github.io/agarwood/ 仍显示 404

## 可能原因及解决方案

### 1. 部署尚未完成
GitHub Pages 部署可能需要 5-10 分钟

**操作：**
- 等待 10 分钟后刷新页面
- 清除浏览器缓存 (Ctrl+Shift+R)

### 2. 检查仓库根目录文件
确保以下文件在仓库根目录（main分支）：
```
agarwood/
├── index.html      ← 必须存在
├── .nojekyll       ← 必须存在（空文件）
├── shop.html
├── product.html
├── rituals.html
├── stories.html
├── about.html
├── css/
├── js/
└── ...
```

### 3. 确认 .nojekyll 文件已上传
这个文件告诉 GitHub 不要使用 Jekyll 处理站点

**检查方法：**
1. 打开 https://github.com/qsmx-hd/agarwood
2. 查看文件列表中是否有 `.nojekyll`
3. 如果没有，需要上传

### 4. 强制刷新部署

**方法 A - 触发新提交：**
```bash
# 在本地做任何小修改，比如添加一个空格到 README.md
git add .
git commit -m "Trigger redeploy"
git push origin main
```

**方法 B - 使用 GitHub 网页：**
1. 打开 https://github.com/qsmx-hd/agarwood
2. 点击任意文件（如 README.md）
3. 点击编辑按钮（铅笔图标）
4. 添加一个空格或换行
5. 滚动到底部，点击 "Commit changes"

### 5. 检查 Pages 部署状态

1. 打开 https://github.com/qsmx-hd/agarwood/settings/pages
2. 查看顶部是否有绿色提示：
   ```
   🟢 Your site is live at https://qsmx-hd.github.io/agarwood/
   ```
3. 如果没有，说明部署还在进行中

### 6. 备用方案：使用 Netlify（推荐）

如果 GitHub Pages 一直有问题，使用 Netlify 更简单：

1. 打开 https://app.netlify.com/drop
2. 将整个 serenity-wood 文件夹拖拽到页面上
3. 立即获得在线链接（如 https://abc123.netlify.app）

## 验证步骤

完成上述操作后，访问：
- https://qsmx-hd.github.io/agarwood/
- https://qsmx-hd.github.io/agarwood/index.html

如果都显示 404，请检查：
1. 仓库是否为 Public
2. main 分支是否有 index.html
3. Settings → Pages 的 Source 是否为 "Deploy from a branch"

## 联系支持

如果以上方法都无效：
- GitHub Pages 文档：https://docs.github.com/en/pages
- GitHub 支持：https://support.github.com
