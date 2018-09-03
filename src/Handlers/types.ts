import { Extension } from 'vscode';

export interface ThemeExtension extends Extension<any> {
  packageJSON: {
    contributes: {
      themes: {
        label: string;
        path: string;
      }[];
    };
  };
}
