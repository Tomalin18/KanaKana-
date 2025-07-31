#!/bin/bash

echo "🚀 啟動KanaKana開發環境..."

# 檢查Node.js版本
echo "📋 檢查Node.js版本..."
node --version
npm --version

# 啟動版本檢查服務器
echo "🔧 啟動版本檢查服務器..."
cd scripts
if [ ! -d "node_modules" ]; then
    echo "📦 安裝版本檢查服務器依賴..."
    npm install
fi

# 檢查端口3000是否被佔用
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  端口3000已被佔用，停止現有進程..."
    lsof -ti:3000 | xargs kill -9
fi

# 啟動版本檢查服務器
echo "🌐 啟動版本檢查API服務器..."
node version-check-server.js &
SERVER_PID=$!

# 等待服務器啟動
echo "⏳ 等待服務器啟動..."
sleep 3

# 測試服務器
echo "🧪 測試版本檢查API..."
node test-version-check.js

# 返回項目根目錄
cd ..

echo "✅ 開發環境準備完成！"
echo "📱 現在可以運行: npx expo start"
echo "🌐 版本檢查API: http://localhost:3000"
echo "📋 健康檢查: http://localhost:3000/health"
echo ""
echo "按 Ctrl+C 停止版本檢查服務器"

# 等待用戶中斷
trap "echo '🛑 停止版本檢查服務器...'; kill $SERVER_PID; exit" INT
wait 