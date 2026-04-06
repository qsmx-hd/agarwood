# GitHub Pages 部署指南

## 🚀 快速部署步骤（5分钟完成）

### 第 1 步：创建 GitHub 仓库

1. 访问 [github.com](https://github.com) 登录你的账号
2. 点击右上角 `+` → `New repository`
3. 仓库名称填写：`serenity-wood`（或你喜欢的名字）
4. 选择 `Public`（免费）
5. 点击 `Create repository`

---

### 第 2 步：上传网站文件（推荐方式）

#### 方式一：直接拖拽上传（最简单，适合新手）

1. 在新创建的仓库页面，点击 **"uploading an existing file"**
2. 打开你的文件夹：`c:\Users\user\WorkBuddy\20260406182623\serenity-wood\`
3. **选中所有文件和文件夹**（Ctrl+A 全选）
4. 拖拽到 GitHub 的上传区域
5. 等待上传完成（文件较多，可能需要1-2分钟）
6. 在 "Commit changes" 区域填写：
   - 标题：`Initial commit - Serenity Wood website`
   - 描述：`Complete agarwood e-commerce website with SEO optimization`
7. 点击 **"Commit changes"**

#### 方式二：使用 Git 命令（适合有Git基础的用户）

```bash
# 进入项目目录
cd c:\Users\user\WorkBuddy\20260406182623\serenity-wood

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit - Serenity Wood website"

# 连接远程仓库（替换为你的用户名）
git remote add origin https://github.com/你的用户名/serenity-wood.git

# 推送
git branch -M main
git push -u origin main
```

---

### 第 3 步：启用 GitHub Pages

1. 在你的仓库页面，点击顶部菜单的 **"Settings"**（设置）
2. 左侧菜单点击 **"Pages"**
3. **Build and deployment** 部分：
   - **Source** 选择 `GitHub Actions`
   - 系统会自动识别 `.github/workflows/deploy.yml` 文件
   - 无需其他操作

4. 或者使用传统方式：
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择 `main`，文件夹选择 `/(root)`
   - 点击 **"Save"**

---

### 第 4 步：等待部署完成

- 部署通常需要 **1-3 分钟**
- 在仓库页面的 **"Actions"** 标签可以看到部署进度
- 部署完成后，访问地址：
  ```
  https://你的用户名.github.io/serenity-wood/
  ```

---

### 第 5 步：验证部署成功

打开浏览器访问你的网站，检查：
- [ ] 首页正常显示
- [ ] 导航链接可以跳转
- [ ] 产品页面有内容
- [ ] 购物车功能正常
- [ ] 移动端显示正常

---

## 🌐 自定义域名（可选）

如果你想使用自己的域名（如 `serenitywood.com`）：

### 1. 配置 CNAME 文件

编辑项目中的 `CNAME` 文件，填入你的域名：
```
serenitywood.com
```

或带 www：
```
www.serenitywood.com
```

### 2. 配置 DNS 记录

在你的域名服务商（如阿里云、GoDaddy、Cloudflare）添加记录：

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| CNAME | www | 你的用户名.github.io |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### 3. 启用 HTTPS

1. 在 GitHub 仓库 Settings → Pages
2. 找到 **"Custom domain"** 填入你的域名
3. 勾选 **"Enforce HTTPS"**
4. 等待 SSL 证书生成（可能需要24小时）

---

## 🔄 更新网站

### 更新单个文件
1. 在 GitHub 仓库找到要修改的文件
2. 点击文件 → 点击编辑按钮（铅笔图标）
3. 修改内容 → 填写提交信息 → Commit

### 批量更新
1. 在本地修改文件
2. 重新拖拽上传到 GitHub
3. 或重新运行 Git 推送命令

---

## ⚠️ 常见问题

### Q: 网站显示 404？
**A:** 
- 等待 2-3 分钟，GitHub Pages 需要时间部署
- 检查仓库是否为 Public
- 确认 Settings → Pages 已启用

### Q: CSS/JS 文件没有加载？
**A:**
- 检查文件路径是否正确（区分大小写）
- 确认所有文件都已上传到仓库
- 尝试强制刷新：Ctrl + F5

### Q: 图片不显示？
**A:**
- 目前使用的是占位符，需要替换为真实图片
- 上传图片到 `images/` 文件夹
- 更新 HTML 中的图片路径

### Q: 如何查看部署状态？
**A:**
- 进入仓库 → Actions 标签
- 可以看到每次部署的日志和状态

### Q: 网站加载慢？
**A:**
- GitHub Pages 在国内访问可能较慢
- 建议配合 CDN（如 Cloudflare）使用
- 或考虑部署到 Netlify/Vercel

---

## 📊 GitHub Pages 免费额度

| 项目 | 限制 |
|------|------|
| 仓库数量 | 无限 |
| 存储空间 | 每个仓库 1GB |
| 每月流量 | 100GB |
| 构建次数 | 无限制 |
| 费用 | **完全免费** |

---

## 🆘 需要帮助？

如果在部署过程中遇到问题：

1. 检查 `DEPLOY.md` 中的步骤是否都已完成
2. 查看 GitHub 的 [Pages 文档](https://docs.github.com/en/pages)
3. 确认所有文件都已正确上传

---

## ✅ 部署检查清单

- [ ] 创建 GitHub 账号
- [ ] 创建 Public 仓库
- [ ] 上传所有网站文件
- [ ] 启用 GitHub Pages
- [ ] 等待部署完成
- [ ] 访问网站验证
- [ ] （可选）配置自定义域名
- [ ] （可选）提交 Sitemap 到 Google

**祝你部署顺利！** 🎉
