import { LucideIcon } from 'lucide-react';

export type CategoryId = 'pdf' | 'image' | 'video' | 'audio' | 'file' | 'ai-tools' | 'miscellaneous';

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: CategoryId;
  isPopular?: boolean;
}

export interface CategoryDef {
  id: CategoryId;
  label: string;
}
