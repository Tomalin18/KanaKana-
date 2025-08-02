#!/bin/bash

echo "🚀 啟動KanaKana開發環境..."

# 檢查Node.js版本
echo "📋 檢查Node.js版本..."
node --version
npm --version

# 顯示版本信息
echo "📱 顯示版本信息..."
cd scripts
node version-info.js

# 啟動版本檢查服務器（如果需要本地測試）
echo ""
echo "🔧 啟動本地版本檢查服務器（可選）..."
if [ ! -d "node_modules" ]; then
    echo "📦 安裝版本檢查服務器依賴..."
    npm install
fi

# 檢查端口3000是否被佔用
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  端口3000已被佔用，停止現有進程..."
    lsof -ti:3000 | xargs kill -9
fi

# 詢問是否啟動本地服務器
read -p "是否啟動本地版本檢查服務器進行測試？(y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌐 啟動版本檢查API服務器..."
    node version-check-server.js &
    SERVER_PID=$!
    
    # 等待服務器啟動
    echo "⏳ 等待服務器啟動..."
    sleep 3
    
    # 測試服務器
    echo "🧪 測試版本檢查API..."
    node test-version-check.js
    
    echo ""
    echo "按 Ctrl+C 停止版本檢查服務器"
    
    # 等待用戶中斷
    trap "echo '🛑 停止版本檢查服務器...'; kill $SERVER_PID; exit" INT
    wait
else
    echo "✅ 跳過本地服務器啟動"
fi

# 返回項目根目錄
cd ..

echo ""
echo "✅ 開發環境準備完成！"
echo "📱 現在可以運行: npx expo start"
echo "🌐 版本檢查API: https://neobase.app/v1/workflows/run"
echo "📋 版本信息工具: cd scripts && node version-info.js"
echo ""
echo "💡 提示: 使用 'node scripts/version-info.js' 查看完整版本信息" 