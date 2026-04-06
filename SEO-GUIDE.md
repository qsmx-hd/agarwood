# Serenity Wood - SEO 优化指南

## 📋 SEO 检查清单

### ✅ 已完成的优化

#### 1. 基础 SEO
- [x] 每个页面都有独特的标题（30-60字符）
- [x] 每个页面都有Meta Description（120-160字符）
- [x] 添加了Meta Keywords
- [x] 设置了Canonical URL
- [x] 添加了Viewport Meta标签
- [x] 设置了HTML lang="en"属性
- [x] 添加了Favicon

#### 2. Open Graph & 社交分享
- [x] Open Graph 标签（Facebook分享）
  - og:title
  - og:description
  - og:image
  - og:url
  - og:type
- [x] Twitter Cards 标签
  - twitter:card
  - twitter:title
  - twitter:description
  - twitter:image

#### 3. 结构化数据 (Schema.org)
- [x] 首页：Organization 结构化数据
- [x] 产品页：Product 结构化数据
- [x] 购物页：BreadcrumbList 结构化数据

#### 4. 性能优化
- [x] Preconnect Google Fonts
- [x] DNS Prefetch 设置

#### 5. 技术SEO
- [x] XML Sitemap 创建
- [x] robots.txt 配置
- [x] 语义化HTML结构

---

## 🚀 如何使用SEO检查脚本

### 方法1：浏览器控制台（推荐）

1. 打开网站任意页面
2. 按 `F12` 打开开发者工具
3. 切换到 `Console` 控制台
4. 复制 `seo-check.js` 的全部内容粘贴运行
5. 查看SEO检查报告

### 方法2：生成详细报告

```javascript
// 在控制台运行
SEOChecker.runAllChecks();      // 基础检查
SEOChecker.generateReport();    // 生成JSON报告
```

---

## 📊 各页面SEO配置

| 页面 | 标题 | 描述 | 优先级 |
|------|------|------|--------|
| 首页 | Premium Agarwood Incense for Meditation & Wellness | Discover premium agarwood incense... | 1.0 |
| 购物 | Shop Premium Agarwood Incense & Oud | Shop ethically sourced agarwood... | 0.9 |
| 产品 | Premium Agarwood Products | Premium agarwood incense and oud oil... | 0.8 |
| 疗愈 | Meditation Rituals & Mindfulness Practices | Discover guided meditation rituals... | 0.7 |
| 故事 | Agarwood History & Cultural Heritage | Explore the rich history of agarwood... | 0.7 |
| 关于 | About Us - Our Mission & Sustainability | Learn about Serenity Wood's mission... | 0.6 |

---

## 🔍 关键词策略

### 主要关键词
- agarwood incense
- oud incense
- meditation incense
- natural incense
- sustainable agarwood

### 长尾关键词
- best incense for meditation
- how to use agarwood
- sustainable oud oil
- incense for sleep and relaxation
- Vietnamese agarwood
- agarwood benefits

### 内容营销关键词
- mindfulness practices
- daily meditation ritual
- wellness lifestyle
- stress relief natural

---

## 📝 内容优化建议

### 博客文章主题（SEO友好）
1. "The Complete Guide to Agarwood: History, Benefits, and Uses"
2. "How to Meditate with Incense: A Beginner's Guide"
3. "Agarwood vs Sandalwood: Which is Better for Meditation?"
4. "5 Morning Rituals with Agarwood for a Peaceful Day"
5. "Understanding Agarwood Grades: From Entry-Level to Investment"
6. "The Science Behind Scent and Memory: Why Agarwood Works"
7. "Sustainable Agarwood: How to Choose Ethically Sourced Incense"

### 产品描述优化
- 每个产品包含主要关键词
- 使用结构化数据（JSON-LD）
- 添加用户评价和评分
- 包含使用场景描述

---

## 🔧 部署前检查

### 必须修改的内容
1. **更新域名**：将所有 `serenitywood.com` 替换为你的实际域名
2. **添加真实图片**：创建 `images/og-*.jpg` 社交分享图片
3. **更新邮箱**：修改结构化数据中的 contact email
4. **社交链接**：更新 Organization 结构化数据中的社交账号

### 图片要求
```
images/
├── og-image.jpg          # 首页分享图 (1200x630)
├── og-shop.jpg           # 购物页分享图
├── og-product.jpg        # 产品页分享图
├── og-rituals.jpg        # 疗愈页分享图
├── og-stories.jpg        # 故事页分享图
├── og-about.jpg          # 关于页分享图
└── logo.png              # 品牌Logo
```

---

## 📈 部署后SEO工作

### 第1周
- [ ] 提交Sitemap到 Google Search Console
- [ ] 提交Sitemap到 Bing Webmaster Tools
- [ ] 验证网站所有权
- [ ] 检查索引状态

### 第2-4周
- [ ] 监控搜索查询数据
- [ ] 检查页面加载速度（PageSpeed Insights）
- [ ] 修复任何爬取错误
- [ ] 添加内部链接

### 持续优化
- [ ] 每月发布1-2篇博客文章
- [ ] 监控关键词排名
- [ ] 收集用户生成内容（评价）
- [ ] 更新产品描述

---

## 🛠️ 工具推荐

### 免费工具
- **Google Search Console** - 监控搜索表现
- **Google PageSpeed Insights** - 页面速度测试
- **Google Rich Results Test** - 结构化数据测试
- **Schema Markup Validator** - Schema验证

### 浏览器插件
- **SEO Meta in 1 Click** - 快速查看SEO元素
- **Wappalyzer** - 技术栈检测
- **Lighthouse** - 性能和SEO审计

---

## 🆘 常见问题

**Q: 为什么我的页面没有被Google索引？**
A: 新网站通常需要几天到几周时间。确保：
- Sitemap已提交
- robots.txt允许爬取
- 网站可以被公开访问

**Q: 如何检查结构化数据是否正确？**
A: 使用 Google Rich Results Test 工具验证

**Q: 社交分享图片不显示？**
A: 确保：
- 图片URL是绝对路径（https://...）
- 图片尺寸建议 1200x630 像素
- 图片可以被公开访问

---

## 📞 需要帮助？

如有SEO问题，可以：
1. 在浏览器控制台运行 `SEOChecker.runAllChecks()`
2. 查看本指南的对应章节
3. 使用Google官方工具进行验证
