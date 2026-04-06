# 修复 CSS 文件扩展名
# 将 css 文件夹中没有 .css 扩展名的文件添加扩展名

$cssFolder = "C:\Users\user\WorkBuddy\20260406182623\serenity-wood\css"

# 检查文件夹是否存在
if (-not (Test-Path $cssFolder)) {
    Write-Host "错误：找不到 css 文件夹" -ForegroundColor Red
    exit 1
}

# 获取所有没有扩展名的文件
$files = Get-ChildItem -Path $cssFolder -File | Where-Object { $_.Extension -eq "" }

if ($files.Count -eq 0) {
    Write-Host "没有找到需要修复的文件" -ForegroundColor Yellow
    exit 0
}

Write-Host "发现 $($files.Count) 个需要修复的文件：" -ForegroundColor Cyan

foreach ($file in $files) {
    $oldName = $file.FullName
    $newName = "$oldName.css"
    
    # 检查是否已经有同名 .css 文件
    if (Test-Path $newName) {
        Write-Host "  跳过：$($file.Name) （已存在 .css 版本）" -ForegroundColor Yellow
        continue
    }
    
    Rename-Item -Path $oldName -NewName "$($file.Name).css"
    Write-Host "  已修复：$($file.Name) → $($file.Name).css" -ForegroundColor Green
}

Write-Host "`n修复完成！" -ForegroundColor Green
Write-Host "请执行以下命令上传到 GitHub：" -ForegroundColor Cyan
Write-Host "  git add css/" -ForegroundColor White
Write-Host "  git commit -m \"Fix CSS file extensions\"" -ForegroundColor White
Write-Host "  git push origin main" -ForegroundColor White
