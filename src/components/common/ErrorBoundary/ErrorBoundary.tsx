import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppError } from '@/types';

interface Props {
  children: ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * 錯誤邊界組件 - 捕獲並處理React組件樹中的JavaScript錯誤
 * 提供優雅的錯誤處理和用戶友好的錯誤界面
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // 轉換為內部錯誤格式
    const appError: AppError = {
      code: 'COMPONENT_ERROR',
      message: error.message,
      stack: error.stack || '',
      timestamp: Date.now(),
      context: {
        componentStack: errorInfo.componentStack,
        errorBoundary: 'ErrorBoundary',
      },
      severity: 'high',
    };

    // 這裡可以添加錯誤報告邏輯
    // ErrorReporter.report(appError);
    
    // 調用可選的錯誤處理回調
    this.props.onError?.(error, errorInfo);
    
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  private resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback;
      
      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        );
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

/**
 * 默認錯誤回退組件
 * 提供用戶友好的錯誤信息和恢復選項
 */
interface DefaultErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

const DefaultErrorFallback: React.FC<DefaultErrorFallbackProps> = ({ error, resetError }) => (
  <View style={styles.container}>
    <Text style={styles.title}>おっと！何かエラーが発生しました</Text>
    <Text style={styles.message}>{error.message}</Text>
    <Button title="再試行" onPress={resetError} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  message: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
}); 