export type Theme = string | ThemeConfig;

export interface ThemeConfig {
  name: string;
  type?: string;
  colors: ColorOptions;
  tokenColors?: {} | string;
}

export interface WalColors {
  wallpaper: string;
  alpha: string;
  special: {
    background: string;
    foreground: string;
    cursor: string;
  };
  colors: {
    color0: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    color6: string;
    color7: string;
    color8: string;
    color9: string;
    color10: string;
    color11: string;
    color12: string;
    color13: string;
    color14: string;
    color15: string;
  };
}

export interface ColorOptions
  extends BaseColors,
    TextColors,
    ButtonColors,
    DropdownColors,
    InputColors,
    ScrollbarColors,
    BadgeColors,
    ProgressBarColors,
    ListsAndTreesColors,
    ActivityBarColors,
    SideBarColors,
    EditorGroupColors,
    TabColors,
    EditorColors,
    DiffEditorColors,
    EditorWidgetColors,
    PeekViewColors,
    MergeConflictsColors,
    PanelColors,
    StatusBarColors,
    NotificationColors,
    TitleBarColors,
    ExtensionColors,
    QuickPickerColors,
    IntegratedTerminalColors,
    DebugColors,
    WelcomePageColors,
    GitColors,
    SettingsEditorColors,
    BreadcrumbsColors {}

export type BaseColors = Partial<
  Record<
    | 'focusBorder'
    | 'foreground'
    | 'widget.shadow'
    | 'selection.background'
    | 'descriptionForeground'
    | 'errorForeground',
    string
  >
>;

export type TextColors = Partial<
  Record<
    | 'textBlockQuote.background'
    | 'textBlockQuote.border'
    | 'textCodeBlock.background'
    | 'textLink.activeForeground'
    | 'textLink.foreground'
    | 'textPreformat.foreground'
    | 'textSeparator.foreground',
    string
  >
>;

type ButtonColors = Partial<
  Record<
    'button.background' | 'button.foreground' | 'button.hoverBackground',
    string
  >
>;

type DropdownColors = Partial<
  Record<
    | 'dropdown.background'
    | 'dropdown.listBackground'
    | 'dropdown.border'
    | 'dropdown.foreground',
    string
  >
>;

export type InputColors = Partial<
  Record<
    | 'input.background'
    | 'input.border'
    | 'input.foreground'
    | 'input.placeholderForeground'
    | 'inputOption.activeBorder'
    | 'inputValidation.errorBackground'
    | 'inputValidation.errorBorder'
    | 'inputValidation.infoBackground'
    | 'inputValidation.infoBorder'
    | 'inputValidation.warningBackground'
    | 'inputValidation.warningBorder',
    string
  >
>;

type ScrollbarColors = Partial<
  Record<
    | 'scrollbar.shadow'
    | 'scrollbarSlider.activeBackground'
    | 'scrollbarSlider.background'
    | 'scrollbarSlider.hoverBackground',
    string
  >
>;

type BadgeColors = Partial<
  Record<'badge.foreground' | 'badge.background', string>
>;

type ProgressBarColors = Partial<Record<'progressBar.background', string>>;

export type ListsAndTreesColors = Partial<
  Record<
    | 'list.activeSelectionBackground'
    | 'list.activeSelectionForeground'
    | 'list.dropBackground'
    | 'list.focusBackground'
    | 'list.focusForeground'
    | 'list.highlightForeground'
    | 'list.hoverBackground'
    | 'list.hoverForeground'
    | 'list.inactiveSelectionBackground'
    | 'list.inactiveSelectionForeground'
    | 'list.inactiveFocusBackground'
    | 'list.invalidItemForeground'
    | 'list.errorForeground'
    | 'list.warningForeground',
    string
  >
>;

export type ActivityBarColors = Partial<
  Record<
    | 'activityBar.background'
    | 'activityBar.dropBackground'
    | 'activityBar.foreground'
    | 'activityBar.border'
    | 'activityBarBadge.background'
    | 'activityBarBadge.foreground',
    string
  >
>;

export type SideBarColors = Partial<
  Record<
    | 'sideBar.background'
    | 'sideBar.foreground'
    | 'sideBar.border'
    | 'sideBar.dropBackground'
    | 'sideBarTitle.foreground'
    | 'sideBarSectionHeader.background'
    | 'sideBarSectionHeader.foreground',
    string
  >
>;

type EditorGroupColors = Partial<
  Record<
    | 'editorGroup.border'
    | 'editorGroup.dropBackground'
    | 'editorGroupHeader.noTabsBackground'
    | 'editorGroupHeader.tabsBackground'
    | 'editorGroupHeader.tabsBorder'
    | 'editorGroup.emptyBackground'
    | 'editorGroup.focusedEmptyBorder',
    string
  >
>;

export type TabColors = Partial<
  Record<
    | 'tab.activeBackground'
    | 'tab.activeForeground'
    | 'tab.border'
    | 'tab.activeBorder'
    | 'tab.unfocusedActiveBorder'
    | 'tab.activeBorderTop'
    | 'tab.unfocusedActiveBorderTop'
    | 'tab.inactiveBackground'
    | 'tab.inactiveForeground'
    | 'tab.unfocusedActiveForeground'
    | 'tab.unfocusedInactiveForeground'
    | 'tab.hoverBackground'
    | 'tab.unfocusedHoverBackground'
    | 'tab.hoverBorder'
    | 'tab.unfocusedHoverBorder',
    string
  >
>;

export type EditorColors = Partial<
  Record<
    | 'editor.background'
    | 'editor.foreground'
    | 'editorLineNumber.foreground'
    | 'editorLineNumber.activeForeground'
    | 'editorCursor.background'
    | 'editorCursor.foreground'
    | 'editor.selectionBackground'
    | 'editor.selectionForeground'
    | 'editor.inactiveSelectionBackground'
    | 'editor.selectionHighlightBackground'
    | 'editor.selectionHighlightBorder'
    | 'editor.wordHighlightBackground'
    | 'editor.wordHighlightBorder'
    | 'editor.wordHighlightStrongBackground'
    | 'editor.wordHighlightStrongBorder'
    | 'editor.findMatchBackground'
    | 'editor.findMatchHighlightBackground'
    | 'editor.findRangeHighlightBackground'
    | 'editor.findMatchBorder'
    | 'editor.findMatchHighlightBorder'
    | 'editor.findRangeHighlightBorder'
    | 'editor.hoverHighlightBackground'
    | 'editor.lineHighlightBackground'
    | 'editor.lineHighlightBorder'
    | 'editorLink.activeForeground'
    | 'editor.rangeHighlightBackground'
    | 'editor.rangeHighlightBorder'
    | 'editorWhitespace.foreground'
    | 'editorIndentGuide.background'
    | 'editorIndentGuide.activeBackground'
    | 'editorRuler.foreground'
    | 'editorCodeLens.foreground'
    | 'editorBracketMatch.background'
    | 'editorBracketMatch.border'
    | 'editorOverviewRuler.border'
    | 'editorOverviewRuler.findMatchForeground'
    | 'editorOverviewRuler.rangeHighlightForeground'
    | 'editorOverviewRuler.selectionHighlightForeground'
    | 'editorOverviewRuler.wordHighlightForeground'
    | 'editorOverviewRuler.wordHighlightStrongForeground'
    | 'editorOverviewRuler.modifiedForeground'
    | 'editorOverviewRuler.addedForeground'
    | 'editorOverviewRuler.deletedForeground'
    | 'editorOverviewRuler.errorForeground'
    | 'editorOverviewRuler.warningForeground'
    | 'editorOverviewRuler.infoForeground'
    | 'editorOverviewRuler.bracketMatchForeground'
    | 'editorError.foreground'
    | 'editorError.border'
    | 'editorWarning.foreground'
    | 'editorWarning.border'
    | 'editorInfo.foreground'
    | 'editorInfo.border'
    | 'editorHint.foreground'
    | 'editorHint.border'
    | 'editorGutter.background'
    | 'editorGutter.modifiedBackground'
    | 'editorGutter.addedBackground'
    | 'editorGutter.deletedBackground',
    string
  >
>;

type DiffEditorColors = Partial<
  Record<
    | 'diffEditor.insertedTextBackground'
    | 'diffEditor.insertedTextBorder'
    | 'diffEditor.removedTextBackground'
    | 'diffEditor.removedTextBorder',
    string
  >
>;

type EditorWidgetColors = Partial<
  Record<
    | 'editorWidget.background'
    | 'editorWidget.border'
    | 'editorWidget.resizeBorder'
    | 'editorSuggestWidget.background'
    | 'editorSuggestWidget.border'
    | 'editorSuggestWidget.foreground'
    | 'editorSuggestWidget.highlightForeground'
    | 'editorSuggestWidget.selectedBackground'
    | 'editorHoverWidget.background'
    | 'editorHoverWidget.border'
    | 'debugExceptionWidget.background'
    | 'debugExceptionWidget.border'
    | 'editorMarkerNavigation.background'
    | 'editorMarkerNavigationError.background'
    | 'editorMarkerNavigationWarning.background'
    | 'editorMarkerNavigationInfo.background',
    string
  >
>;

type PeekViewColors = Partial<
  Record<
    | 'peekView.border'
    | 'peekViewEditor.background'
    | 'peekViewEditorGutter.background'
    | 'peekViewEditor.matchHighlightBackground'
    | 'peekViewEditor.matchHighlightBorder'
    | 'peekViewResult.background'
    | 'peekViewResult.fileForeground'
    | 'peekViewResult.lineForeground'
    | 'peekViewResult.matchHighlightBackground'
    | 'peekViewResult.selectionBackground'
    | 'peekViewResult.selectionForeground'
    | 'peekViewTitle.background'
    | 'peekViewTitleDescription.foreground'
    | 'peekViewTitleLabel.foreground',
    string
  >
>;

type MergeConflictsColors = Partial<
  Record<
    | 'merge.currentHeaderBackground'
    | 'merge.currentContentBackground'
    | 'merge.incomingHeaderBackground'
    | 'merge.incomingContentBackground'
    | 'merge.border'
    | 'merge.commonContentBackground'
    | 'merge.commonHeaderBackground'
    | 'editorOverviewRuler.currentContentForeground'
    | 'editorOverviewRuler.incomingContentForeground'
    | 'editorOverviewRuler.commonContentForeground',
    string
  >
>;

type PanelColors = Partial<
  Record<
    | 'panel.background'
    | 'panel.border'
    | 'panel.dropBackground'
    | 'panelTitle.activeBorder'
    | 'panelTitle.activeForeground'
    | 'panelTitle.inactiveForeground',
    string
  >
>;

export type StatusBarColors = Partial<
  Record<
    | 'statusBar.background'
    | 'statusBar.foreground'
    | 'statusBar.border'
    | 'statusBar.debuggingBackground'
    | 'statusBar.debuggingForeground'
    | 'statusBar.debuggingBorder'
    | 'statusBar.noFolderForeground'
    | 'statusBar.noFolderBackground'
    | 'statusBar.noFolderBorder'
    | 'statusBarItem.activeBackground'
    | 'statusBarItem.hoverBackground'
    | 'statusBarItem.prominentBackground'
    | 'statusBarItem.prominentHoverBackground',
    string
  >
>;

type TitleBarColors = Partial<
  Record<
    | 'titleBar.activeBackground'
    | 'titleBar.activeForeground'
    | 'titleBar.inactiveBackground'
    | 'titleBar.inactiveForeground'
    | 'titleBar.border',
    string
  >
>;

type NotificationColors = Partial<
  Record<
    | 'notificationCenter.border'
    | 'notificationCenterHeader.foreground'
    | 'notificationCenterHeader.background'
    | 'notificationToast.border'
    | 'notifications.foreground'
    | 'notifications.background'
    | 'notifications.border'
    | 'notificationLink.foreground',
    string
  >
>;

type ExtensionColors = Partial<
  Record<
    | 'extensionButton.prominentForeground'
    | 'extensionButton.prominentBackground'
    | 'extensionButton.prominentHoverBackground',
    string
  >
>;

type QuickPickerColors = Partial<
  Record<'pickerGroup.border' | 'pickerGroup.foreground', string>
>;

export type IntegratedTerminalColors = Partial<
  Record<
    | 'terminal.background'
    | 'terminal.border'
    | 'terminal.foreground'
    | 'terminalCursor.background'
    | 'terminalCursor.foreground'
    | 'terminal.ansiBlack'
    | 'terminal.ansiRed'
    | 'terminal.ansiGreen'
    | 'terminal.ansiYellow'
    | 'terminal.ansiBlue'
    | 'terminal.ansiMagenta'
    | 'terminal.ansiCyan'
    | 'terminal.ansiWhite'
    | 'terminal.ansiBrightBlack'
    | 'terminal.ansiBrightRed'
    | 'terminal.ansiBrightGreen'
    | 'terminal.ansiBrightYellow'
    | 'terminal.ansiBrightBlue'
    | 'terminal.ansiBrightMagenta'
    | 'terminal.ansiBrightCyan'
    | 'terminal.ansiBrightWhite'
    | 'terminal.selectionBackground',
    string
  >
>;

type DebugColors = Partial<
  Record<'debugToolBar.background' | 'debugToolBar.border', string>
>;

type WelcomePageColors = Partial<
  Record<
    | 'welcomePage.buttonBackground'
    | 'welcomePage.buttonHoverBackground'
    | 'walkThrough.embeddedEditorBackground',
    string
  >
>;

export type GitColors = Partial<
  Record<
    | 'gitDecoration.modifiedResourceForeground'
    | 'gitDecoration.deletedResourceForeground'
    | 'gitDecoration.untrackedResourceForeground'
    | 'gitDecoration.ignoredResourceForeground'
    | 'gitDecoration.conflictingResourceForeground'
    | 'gitDecoration.submoduleResourceForeground',
    string
  >
>;

type SettingsEditorColors = Partial<{
  'settings.headerForeground': string;
  'settings.modifiedItemForeground': string;
  'settings.inactiveSelectedItemBorder': string;
  'settings.dropdownBackground': string;
  'settings.dropdownForeground': string;
  'settings.dropdownBorder': string;
  'settings.checkboxBackground': string;
  'settings.checkboxForeground': string;
  'settings.checkboxBorder': string;
  'settings.textInputBackground': string;
  'settings.textInputForeground': string;
  'settings.textInputBorder': string;
  'settings.numberInputBackground': string;
  'settings.numberInputForeground': string;
  'settings.numberInputBorder': string;
}>;

type BreadcrumbsColors = Partial<
  Record<
    | 'breadcrumb.foreground'
    | 'breadcrumb.focusForeground'
    | 'breadcrumb.activeSelectionForeground'
    | 'breadcrumbPicker.background',
    string
  >
>;
