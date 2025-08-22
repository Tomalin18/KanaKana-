import React, { useEffect } from 'react';
import { showRatingPrompt } from '@/utils/ratingPrompt';

interface RatingPromptModalProps {
  trigger: string;
  additionalData?: any;
  onClose?: () => void;
}

export const RatingPromptModal: React.FC<RatingPromptModalProps> = ({
  trigger,
  additionalData,
  onClose,
}) => {
  useEffect(() => {
    const showPrompt = async () => {
      await showRatingPrompt(trigger, additionalData);
      onClose?.();
    };

    showPrompt();
  }, [trigger, additionalData, onClose]);

  // 這個組件不渲染任何 UI，只負責觸發評分提示
  return null;
};
