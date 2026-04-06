/**
 * Serenity Wood - SEO Optimization Checker
 * 自动SEO检查和优化脚本
 * 
 * 使用方法:
 * 1. 浏览器控制台: 复制粘贴运行
 * 2. Node.js: node seo-check.js
 */

const SEOChecker = {
    results: {
        passed: [],
        warnings: [],
        errors: []
    },

    // 检查标题
    checkTitle() {
        const title = document.title;
        const titleLength = title.length;
        
        if (!title || title === '') {
            this.results.errors.push('❌ 页面缺少标题标签');
        } else if (titleLength < 30) {
            this.results.warnings.push(`⚠️ 标题过短 (${titleLength}字符): "${title}"`);
        } else if (titleLength > 60) {
            this.results.warnings.push(`⚠️ 标题过长 (${titleLength}字符): "${title}"`);
        } else {
            this.results.passed.push(`✅ 标题长度合适 (${titleLength}字符): "${title}"`);
        }
    },

    // 检查Meta Description
    checkMetaDescription() {
        const metaDesc = document.querySelector('meta[name="description"]');
        const content = metaDesc ? metaDesc.getAttribute('content') : '';
        const length = content ? content.length : 0;
        
        if (!metaDesc || !content) {
            this.results.errors.push('❌ 页面缺少Meta Description');
        } else if (length < 120) {
            this.results.warnings.push(`⚠️ Meta Description过短 (${length}字符)`);
        } else if (length > 160) {
            this.results.warnings.push(`⚠️ Meta Description过长 (${length}字符)`);
        } else {
            this.results.passed.push(`✅ Meta Description长度合适 (${length}字符)`);
        }
    },

    // 检查关键词
    checkKeywords() {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            this.results.passed.push('✅ 页面包含Meta Keywords');
        } else {
            this.results.warnings.push('⚠️ 页面缺少Meta Keywords（可选但建议添加）');
        }
    },

    // 检查Open Graph标签
    checkOpenGraph() {
        const ogTags = [
            'og:title', 'og:description', 'og:image', 
            'og:url', 'og:type'
        ];
        const missing = [];
        
        ogTags.forEach(tag => {
            const element = document.querySelector(`meta[property="${tag}"]`);
            if (!element) {
                missing.push(tag);
            }
        });
        
        if (missing.length === 0) {
            this.results.passed.push('✅ Open Graph标签完整');
        } else {
            this.results.warnings.push(`⚠️ 缺少Open Graph标签: ${missing.join(', ')}`);
        }
    },

    // 检查Twitter Cards
    checkTwitterCards() {
        const twitterTags = [
            'twitter:card', 'twitter:title', 
            'twitter:description', 'twitter:image'
        ];
        const missing = [];
        
        twitterTags.forEach(tag => {
            const element = document.querySelector(`meta[property="${tag}"], meta[name="${tag}"]`);
            if (!element) {
                missing.push(tag);
            }
        });
        
        if (missing.length === 0) {
            this.results.passed.push('✅ Twitter Cards标签完整');
        } else {
            this.results.warnings.push(`⚠️ 缺少Twitter Cards标签: ${missing.join(', ')}`);
        }
    },

    // 检查Canonical URL
    checkCanonical() {
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical && canonical.getAttribute('href')) {
            this.results.passed.push(`✅ Canonical URL: ${canonical.getAttribute('href')}`);
        } else {
            this.results.errors.push('❌ 页面缺少Canonical URL');
        }
    },

    // 检查Favicon
    checkFavicon() {
        const favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
        if (favicon) {
            this.results.passed.push('✅ Favicon已设置');
        } else {
            this.results.warnings.push('⚠️ 页面缺少Favicon');
        }
    },

    // 检查H1标签
    checkH1() {
        const h1s = document.querySelectorAll('h1');
        if (h1s.length === 0) {
            this.results.errors.push('❌ 页面缺少H1标签');
        } else if (h1s.length > 1) {
            this.results.warnings.push(`⚠️ 页面有多个H1标签 (${h1s.length}个)`);
        } else {
            this.results.passed.push(`✅ H1标签正确: "${h1s[0].textContent.trim().substring(0, 50)}..."`);
        }
    },

    // 检查图片Alt属性
    checkImageAlts() {
        const images = document.querySelectorAll('img');
        const missingAlt = [];
        
        images.forEach((img, index) => {
            if (!img.getAttribute('alt')) {
                missingAlt.push(`图片${index + 1}`);
            }
        });
        
        if (missingAlt.length === 0) {
            this.results.passed.push(`✅ 所有${images.length}张图片都有Alt属性`);
        } else {
            this.results.warnings.push(`⚠️ ${missingAlt.length}张图片缺少Alt属性`);
        }
    },

    // 检查结构化数据
    checkStructuredData() {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        if (scripts.length > 0) {
            this.results.passed.push(`✅ 页面包含${scripts.length}个结构化数据脚本`);
        } else {
            this.results.warnings.push('⚠️ 页面缺少结构化数据（Schema.org）');
        }
    },

    // 检查Viewport
    checkViewport() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            this.results.passed.push('✅ Viewport Meta标签已设置');
        } else {
            this.results.errors.push('❌ 页面缺少Viewport Meta标签');
        }
    },

    // 检查语言属性
    checkLang() {
        const html = document.querySelector('html');
        const lang = html ? html.getAttribute('lang') : '';
        
        if (lang) {
            this.results.passed.push(`✅ 语言属性: ${lang}`);
        } else {
            this.results.warnings.push('⚠️ HTML标签缺少lang属性');
        }
    },

    // 检查内部链接
    checkInternalLinks() {
        const links = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"], a[href^="http"]');
        const internalLinks = Array.from(links).filter(link => {
            const href = link.getAttribute('href');
            return !href.startsWith('http') || href.includes(window.location.hostname);
        });
        
        this.results.passed.push(`✅ 页面包含${internalLinks.length}个内部/相关链接`);
    },

    // 检查页面加载速度相关
    checkPerformanceHints() {
        const preconnects = document.querySelectorAll('link[rel="preconnect"]');
        const dnsPrefetch = document.querySelectorAll('link[rel="dns-prefetch"]');
        
        if (preconnects.length > 0 || dnsPrefetch.length > 0) {
            this.results.passed.push(`✅ 性能优化: ${preconnects.length}个preconnect, ${dnsPrefetch.length}个dns-prefetch`);
        }
    },

    // 运行所有检查
    runAllChecks() {
        console.log('🔍 Serenity Wood SEO 检查开始...\n');
        
        this.checkTitle();
        this.checkMetaDescription();
        this.checkKeywords();
        this.checkOpenGraph();
        this.checkTwitterCards();
        this.checkCanonical();
        this.checkFavicon();
        this.checkH1();
        this.checkImageAlts();
        this.checkStructuredData();
        this.checkViewport();
        this.checkLang();
        this.checkInternalLinks();
        this.checkPerformanceHints();
        
        this.printResults();
    },

    // 打印结果
    printResults() {
        console.log('\n' + '='.repeat(50));
        console.log('📊 SEO 检查报告');
        console.log('='.repeat(50) + '\n');
        
        // 错误
        if (this.results.errors.length > 0) {
            console.log('🔴 错误 (必须修复):');
            this.results.errors.forEach(err => console.log('  ' + err));
            console.log('');
        }
        
        // 警告
        if (this.results.warnings.length > 0) {
            console.log('🟡 警告 (建议修复):');
            this.results.warnings.forEach(warn => console.log('  ' + warn));
            console.log('');
        }
        
        // 通过
        if (this.results.passed.length > 0) {
            console.log('🟢 通过:');
            this.results.passed.forEach(pass => console.log('  ' + pass));
            console.log('');
        }
        
        // 总结
        console.log('='.repeat(50));
        console.log(`总计: ${this.results.passed.length}通过, ${this.results.warnings.length}警告, ${this.results.errors.length}错误`);
        
        if (this.results.errors.length === 0) {
            console.log('✨ SEO基础检查通过！');
        } else {
            console.log('⚠️ 请修复错误项以提升SEO表现');
        }
        console.log('='.repeat(50));
    },

    // 生成优化建议报告
    generateReport() {
        const report = {
            url: window.location.href,
            timestamp: new Date().toISOString(),
            title: document.title,
            description: document.querySelector('meta[name="description"]')?.getAttribute('content') || 'N/A',
            h1: document.querySelector('h1')?.textContent?.trim() || 'N/A',
            results: this.results
        };
        
        console.log('\n📋 详细报告:');
        console.log(JSON.stringify(report, null, 2));
        return report;
    }
};

// 自动运行检查
if (typeof window !== 'undefined') {
    // 浏览器环境
    SEOChecker.runAllChecks();
} else {
    // Node.js环境 - 导出模块
    module.exports = SEOChecker;
}

// 使用说明
console.log(`
💡 使用说明:
1. 在浏览器控制台运行: SEOChecker.runAllChecks()
2. 生成详细报告: SEOChecker.generateReport()
3. 单独检查某项: SEOChecker.checkTitle()
`);
