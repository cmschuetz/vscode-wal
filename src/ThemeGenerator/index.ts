import {
  Theme,
  ThemeConfig,
  WalColors,
  BaseColors,
  InputColors,
  IntegratedTerminalColors,
  ActivityBarColors,
  SideBarColors,
  StatusBarColors,
  EditorColors,
  EditorGroupColors,
  ColorOptions,
  TokenColor,
  TabColors,
  ListsAndTreesColors,
  GitColors,
} from './types';

function shadeColor(color: string, amt: number): string {
  function toHex(val: number) {
    val = Math.min(255, val);
    val = Math.max(0, val);
    let hexVal = val.toString(16);
    return hexVal.length === 1 ? '0' : '' + hexVal;
  }

  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  return `#${toHex(R + amt)}${toHex(G + amt)}${toHex(B + amt)}`;
}

export {
  Theme,
  ThemeConfig,
  ColorOptions,
  TokenColor,
  WalColors,
} from './types';

export const isTextMateTheme = (theme: Theme): theme is string =>
  typeof theme === 'string';

export const isThemeConfig = (theme: Theme): theme is ThemeConfig =>
  !isTextMateTheme(theme);

const baseColors = (walColors: WalColors): BaseColors => ({
  focusBorder: walColors.colors.color12,
  foreground: walColors.special.foreground,
  'widget.shadow': walColors.colors.color8,
  'selection.background': walColors.colors.color1,
  descriptionForeground: walColors.colors.color4,
  errorForeground: walColors.colors.color1,
});

const inputColors = (walColors: WalColors): InputColors => ({
  'input.background': walColors.colors.color0,
  'input.foreground': walColors.colors.color7,
  'input.placeholderForeground': walColors.colors.color8,
  'inputOption.activeBorder': walColors.colors.color12,
  'inputValidation.errorBackground': walColors.colors.color1,
  'inputValidation.errorBorder': walColors.colors.color9,
  'inputValidation.infoBackground': walColors.colors.color4,
  'inputValidation.infoBorder': walColors.colors.color12,
  'inputValidation.warningBackground': walColors.colors.color3,
  'inputValidation.warningBorder': walColors.colors.color11,
});

const listsAndTreesColors = (walColors: WalColors): ListsAndTreesColors => ({
  'list.invalidItemForeground': walColors.colors.color1,
  'list.errorForeground': walColors.colors.color1,
  'list.warningForeground': walColors.colors.color3,
});

const terminalColors = (walColors: WalColors): IntegratedTerminalColors => {
  const { special, colors } = walColors;

  return {
    'terminal.background': special.background,
    'terminal.foreground': special.foreground,
    'terminalCursor.background': special.background,
    'terminalCursor.foreground': special.cursor,
    'terminal.ansiBlack': colors.color0,
    'terminal.ansiRed': colors.color1,
    'terminal.ansiGreen': colors.color2,
    'terminal.ansiYellow': colors.color3,
    'terminal.ansiBlue': colors.color4,
    'terminal.ansiMagenta': colors.color5,
    'terminal.ansiCyan': colors.color6,
    'terminal.ansiWhite': colors.color7,
    'terminal.ansiBrightBlack': colors.color8,
    'terminal.ansiBrightRed': colors.color9,
    'terminal.ansiBrightGreen': colors.color10,
    'terminal.ansiBrightYellow': colors.color11,
    'terminal.ansiBrightBlue': colors.color12,
    'terminal.ansiBrightMagenta': colors.color13,
    'terminal.ansiBrightCyan': colors.color14,
    'terminal.ansiBrightWhite': colors.color15,
  };
};

const activityBarColors = (walColors: WalColors): ActivityBarColors => ({
  'activityBar.background': walColors.special.background,
  'activityBar.foreground': walColors.special.foreground,
});

const sideBarColors = (walColors: WalColors): SideBarColors => ({
  'sideBarSectionHeader.background': walColors.special.background,
  'sideBar.background': walColors.special.background,
  'sideBar.foreground': walColors.special.foreground,
});

const statusBarColors = (walColors: WalColors): StatusBarColors => ({
  'statusBar.background': walColors.colors.color5,
  'statusBar.foreground': walColors.colors.color7,
  'statusBar.debuggingBackground': walColors.colors.color2,
  'statusBar.noFolderBackground': walColors.colors.color2,
});

const tabColors = (walColors: WalColors): TabColors => ({
  'tab.activeBackground': walColors.special.background,
  'tab.activeForeground': walColors.special.foreground,
  'tab.inactiveBackground': shadeColor(walColors.special.background, 30),
  'tab.inactiveForeground': shadeColor(walColors.special.foreground, 30),
});

const editorColors = (walColors: WalColors): EditorColors => ({
  'editor.background': walColors.special.background,
  'editor.foreground': walColors.special.foreground,
  'editorOverviewRuler.modifiedForeground': walColors.colors.color3,
  'editorOverviewRuler.addedForeground': walColors.colors.color2,
  'editorOverviewRuler.deletedForeground': walColors.colors.color1,
  'editorOverviewRuler.warningForeground': walColors.colors.color3,
  'editorOverviewRuler.infoForeground': walColors.colors.color4,
  'editorOverviewRuler.errorForeground': walColors.colors.color1,
  'editorGutter.background': walColors.special.background,
  'editorGutter.modifiedBackground': walColors.colors.color3,
  'editorGutter.addedBackground': walColors.colors.color2,
  'editorGutter.deletedBackground': walColors.colors.color1,
  'editorError.foreground': walColors.colors.color1,
  'editorWarning.foreground': walColors.colors.color3,
  'editorInfo.foreground': walColors.colors.color4,
  'editorHint.foreground': walColors.colors.color2,
});

const editorGroupColors = (walColors: WalColors): EditorGroupColors => ({
  'editorGroupHeader.tabsBackground': shadeColor(
    walColors.special.background,
    20
  ),
});

const gitColors = (walColors: WalColors): GitColors => ({
  'gitDecoration.modifiedResourceForeground': walColors.colors.color3,
  'gitDecoration.deletedResourceForeground': walColors.colors.color1,
  'gitDecoration.untrackedResourceForeground': walColors.colors.color2,
});

export const generateColorTheme = (walColors: WalColors): ColorOptions => {
  const mappers = [
    baseColors,
    inputColors,
    listsAndTreesColors,
    terminalColors,
    activityBarColors,
    sideBarColors,
    statusBarColors,
    tabColors,
    editorColors,
    editorGroupColors,
    gitColors,
  ];

  return mappers.reduce(
    (acc, mapper) => Object.assign(acc, mapper(walColors)),
    {}
  );
};

export const generateTokenColors = (
  walColors: WalColors
): Array<TokenColor> => {
  return [
    {
      name: 'support.constant.edge',
      scope: 'support.constant.edge',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'regexpconstantcharacter-class',
      scope: 'constant.other.character-class.regexp',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'regexpoperator.quantifier',
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'punctuation.definition',
      scope:
        'punctuation.definition.string.begin,punctuation.definition.string.end',
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'Text',
      scope: 'variable.parameter.function',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'Comments',
      scope: 'comment,punctuation.definition.comment',
      settings: {
        foreground: walColors.colors.color1,
        fontStyle: 'italic',
      },
    },
    {
      name: 'CommentMarkupLink',
      scope: 'commentmarkup.link',
      settings: {
        foreground: walColors.colors.color7,
      },
    },
    {
      name: 'markupdiff',
      scope: 'markup.changed.diff',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'diff',
      scope: 'meta.diff.header.from-file,punctuation.definition.from-file.diff',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'inserted.diff',
      scope: 'markup.inserted.diff',
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'deleted.diff',
      scope: 'markup.deleted.diff',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'c++function',
      scope: 'meta.function.c,meta.function.cpp',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'c++block',
      scope:
        'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'js/tspunctuationseparatorkey-value',
      scope: 'punctuation.separator.key-value',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'js/tsitalic',
      scope:
        'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'js/tsimportkeyword',
      scope: 'keyword.operator.expression.import',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'mathjs/ts',
      scope: 'support.constant.math',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'mathpropertyjs/ts',
      scope: 'support.constant.property.math',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'js/tsvariable.other.constant',
      scope: 'variable.other.constant',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'javatype',
      scope: 'storage.type.annotation.java',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'javasource',
      scope: 'source.java',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'javamodifier.import',
      scope:
        'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,storage.type.generic.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,meta.method.body.java',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'javamodifier.import',
      scope: 'meta.method.java',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'javamodifier.import',
      scope: 'storage.modifier.import.java,storage.type.java',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'javavariable.name',
      scope: 'meta.definition.variable.name.java',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'operatorlogical',
      scope: 'keyword.operator.logical.js',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'operatorbitwise',
      scope: 'keyword.operator.bitwise',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'operatorchannel',
      scope: 'keyword.operator.channel',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'support.constant.property-value.scss',
      scope:
        'support.constant.property-value.scss,support.constant.property-value.css',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'CSS/SCSS/LESSOperators',
      scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'csscolorstandardname',
      scope:
        'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'csscomma',
      scope: 'punctuation.separator.list.comma.css',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'cssattribute-name.id',
      scope: 'support.constant.color.w3c-standard-color-name.css',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'cssproperty-name',
      scope: 'support.type.vendored.property-name.css',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'js/tstemplate-expression',
      scope:
        'punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'js/tsmodule',
      scope:
        'support.module.node,support.type.object.module,support.module.node',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'entity.name.type.module',
      scope: 'entity.name.type.module',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'jsvariablereadwrite',
      scope:
        'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'comment',
      scope: 'comment.line.double-slash,comment.block.documentation',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'js/tsjson',
      scope: 'support.constant.json',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'js/tsKeyword',
      scope: [
        'keyword.operator.expression.instanceof',
        'keyword.operator.new',
        'keyword.operator.ternary',
        'keyword.operator.optional',
      ],
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'js/tsconsole',
      scope: 'support.type.object.console',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'js/tssupport.variable.property.process',
      scope: 'support.variable.property.process',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'jsconsolefunction',
      scope: 'entity.name.function,support.function.console',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'jsoperator',
      scope: 'keyword.operator',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'jsdom',
      scope: 'support.type.object.dom',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'jsdomvariable',
      scope: 'support.variable.dom,support.variable.property.dom',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'keyword.operator',
      scope:
        'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'Coperatorassignment',
      scope:
        'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'Punctuation',
      scope: 'punctuation.separator.delimiter',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'Otherpunctuation.c',
      scope: 'punctuation.separator.c,punctuation.separator.cpp',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'Ctypeposix-reserved',
      scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'keyword.operator.sizeof.c',
      scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'pythonparameter',
      scope: 'variable.parameter.function.language.python',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'pythontype',
      scope: 'support.type.python',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'pythonlogical',
      scope: 'keyword.operator.logical.python',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'meta.function-call.arguments.python',
      scope: 'meta.function-call.arguments.python',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'meta.function-call.python',
      scope: 'meta.function-call.python',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'pyCs',
      scope: 'variable.parameter.function.python',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'pythonblock',
      scope:
        'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python,meta.function-call.arguments.python',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'pythonfunction-call.generic',
      scope: 'meta.function-call.generic.python',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'pythonplaceholderresettonormalstring',
      scope: 'constant.character.format.placeholder.other.python',
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'Delimiters',
      scope: 'none',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'Operators',
      scope: 'keyword.operator',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'CompoundAssignmentOperators',
      scope: 'keyword.operator.assignment.compound',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'Keywords',
      scope: 'keyword',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'Variables',
      scope: 'variable',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'Languagevariables',
      scope: 'variable.language',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'JavaVariables',
      scope: 'token.variable.parameter.java',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'JavaImports',
      scope: 'import.storage.java',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Packages',
      scope: 'token.package.keyword',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'Packages',
      scope: 'token.package',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'meta.require',
        'support.function.any-method',
        'variable.function',
      ],
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'Classes',
      scope: 'entity.name.type.namespace',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Classes',
      scope: 'support.class,entity.name.type.class',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Classname',
      scope: 'entity.name.class.identifier.namespace.type',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Classname',
      scope: [
        'entity.name.class',
        'variable.other.class.js',
        'variable.other.class.ts',
      ],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Classnamephp',
      scope: 'variable.other.class.php',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'TypeName',
      scope: 'entity.name.type',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'KeywordControl',
      scope: 'keyword.control',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'PythonKeywordControl',
      scope: 'keyword.control.import.python,keyword.control.flow.python',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'ControlElements',
      scope: 'control.elements,keyword.operator.less',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Methods',
      scope: 'keyword.other.special-method',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'StorageJSTS',
      scope: 'token.storage',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name:
        'SourceJsKeywordOperatorDelete,sourceJsKeywordOperatorIn,sourceJsKeywordOperatorOf,sourceJsKeywordOperatorInstanceof,sourceJsKeywordOperatorNew,sourceJsKeywordOperatorTypeof,sourceJsKeywordOperatorVoid',
      scope:
        'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'JavaStorage',
      scope: 'token.storage.type.java',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Support',
      scope: 'support.function',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'Supporttype',
      scope: 'support.type.property-name',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'Supporttype',
      scope: 'support.constant.property-value',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'Supporttype',
      scope: 'support.constant.font-name',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Metatag',
      scope: 'meta.tag',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'Strings,InheritedClass',
      scope: 'string,entity.other.inherited-class',
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'Constantothersymbol',
      scope: 'constant.other.symbol',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'Integers',
      scope: 'constant.numeric',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Floats',
      scope: 'none',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Boolean',
      scope: 'none',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Constants',
      scope: 'constant',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Constants',
      scope: 'punctuation.definition.constant',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Tags',
      scope: 'entity.name.tag',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'Attributes',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'AttributeIDs',
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: walColors.colors.color12,
        fontStyle: 'normal',
      },
    },
    {
      name: 'Attributeclass',
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: walColors.colors.color6,
        fontStyle: 'normal',
      },
    },
    {
      name: 'Selector',
      scope: 'meta.selector',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'Values',
      scope: 'none',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Headings',
      scope: 'markup.heading',
      settings: {
        fontStyle: 'bold',
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'Headings',
      scope: 'markup.headingpunctuation.definition.heading,entity.name.section',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'Units',
      scope: 'keyword.other.unit',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'Bold',
      scope: 'markup.bold,todo.bold',
      settings: {
        fontStyle: 'bold',
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'Bold',
      scope: 'punctuation.definition.bold',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Italic',
      scope: 'markup.italic,punctuation.definition.italic,todo.emphasis',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'Italic',
      scope: 'emphasismd',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: '[VSCODE-CUSTOM]Markdownheadings',
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownheadingPunctuationDefinition',
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'punctuation.definition.list.begin.markdown',
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: '[VSCODE-CUSTOM]Markdownheadingsetext',
      scope: 'markup.heading.setext',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownPunctuationDefinitionBold',
      scope: 'punctuation.definition.bold.markdown',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownInlineRaw',
      scope: 'markup.inline.raw.markdown',
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownInlineRaw',
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownListPunctuationDefinition',
      scope: 'punctuation.definition.list.markdown',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownQuote',
      scope: 'markup.quote.markdown',
      settings: {
        foreground: walColors.colors.color7,
        fontStyle: 'italic',
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownPunctuationDefinitionString',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown',
      ],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'beginning.punctuation.definition.list.markdown',
      scope: ['beginning.punctuation.definition.list.markdown'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownPunctuationDefinitionLink',
      scope: 'punctuation.definition.metadata.markdown',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownUnderlineLink/Image',
      scope:
        'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: '[VSCODE-CUSTOM]MarkdownLinkTitle/Description',
      scope:
        'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'markup.italic.markdown',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'markup.bold.markdown',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'RegularExpressions',
      scope: 'string.regexp',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'EscapeCharacters',
      scope: 'constant.character.escape',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'Embedded',
      scope: 'punctuation.section.embedded,variable.interpolation',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'Illegal',
      scope: 'invalid.illegal',
      settings: {
        foreground: walColors.colors.color11,
      },
    },
    {
      name: 'Broken',
      scope: 'invalid.broken',
      settings: {
        foreground: walColors.colors.color11,
      },
    },
    {
      name: 'Deprecated',
      scope: 'invalid.deprecated',
      settings: {
        foreground: walColors.colors.color11,
      },
    },
    {
      name: 'Unimplemented',
      scope: 'invalid.unimplemented',
      settings: {
        foreground: walColors.colors.color11,
      },
    },
    {
      name: 'SourceJsonMetaStructureDictionaryJson>StringQuotedJson',
      scope: 'source.jsonmeta.structure.dictionary.json>string.quoted.json',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name:
        'SourceJsonMetaStructureDictionaryJson>StringQuotedJson>PunctuationString',
      scope:
        'source.jsonmeta.structure.dictionary.json>string.quoted.json>punctuation.string',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name:
        'SourceJsonMetaStructureDictionaryJson>ValueJson>StringQuotedJson,sourceJsonMetaStructureArrayJson>ValueJson>StringQuotedJson,sourceJsonMetaStructureDictionaryJson>ValueJson>StringQuotedJson>Punctuation,sourceJsonMetaStructureArrayJson>ValueJson>StringQuotedJson>Punctuation',
      scope:
        'source.jsonmeta.structure.dictionary.json>value.json>string.quoted.json,source.jsonmeta.structure.array.json>value.json>string.quoted.json,source.jsonmeta.structure.dictionary.json>value.json>string.quoted.json>punctuation,source.jsonmeta.structure.array.json>value.json>string.quoted.json>punctuation',
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name:
        'SourceJsonMetaStructureDictionaryJson>ConstantLanguageJson,sourceJsonMetaStructureArrayJson>ConstantLanguageJson',
      scope:
        'source.jsonmeta.structure.dictionary.json>constant.language.json,source.jsonmeta.structure.array.json>constant.language.json',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: '[VSCODE-CUSTOM]JSONPropertyName',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: '[VSCODE-CUSTOM]JSONPunctuationforPropertyName',
      scope: 'support.type.property-name.jsonpunctuation',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'laravelbladetag',
      scope:
        'text.html.laravel-bladesource.php.embedded.line.htmlentity.name.tag.laravel-blade',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'laravelblade@',
      scope:
        'text.html.laravel-bladesource.php.embedded.line.htmlsupport.constant.laravel-blade',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'usestatementforotherclasses',
      scope:
        'support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'errorsuppression',
      scope: 'keyword.operator.error-control.php',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'phpinstanceof',
      scope: 'keyword.operator.type.php',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'styledoublequotedarrayindexnormalbegin',
      scope: 'punctuation.section.array.begin.php',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'styledoublequotedarrayindexnormalend',
      scope: 'punctuation.section.array.end.php',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'phpillegal.non-null-typehinted',
      scope: 'invalid.illegal.non-null-typehinted.php',
      settings: {
        foreground: walColors.colors.color5,
      },
    },
    {
      name: 'phptypes',
      scope:
        'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'phpcall-function',
      scope:
        'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'phpfunction-resets',
      scope:
        'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'supportphpconstants',
      scope:
        'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'phpgoto',
      scope: 'entity.name.goto-label.php,support.other.php',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'phplogical/bitwiseoperator',
      scope:
        'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'phpregexpoperator',
      scope: 'keyword.operator.regexp.php',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'phpcomparison',
      scope: 'keyword.operator.comparison.php',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'phpheredoc/nowdoc',
      scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'pythonfunctiondecorator@',
      scope: 'meta.function.decorator.python',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'pythonfunctionsupport',
      scope:
        'support.token.decorator.python,meta.function.decorator.identifier.python',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'parameterfunction',
      scope: 'function.parameter',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'parameterfunctionjs/ts',
      scope: 'function.parameter',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'bracefunction',
      scope: 'function.brace',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'parameterfunctionrubycs',
      scope: 'function.parameter.ruby,function.parameter.cs',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'constant.language.symbol.ruby',
      scope: 'constant.language.symbol.ruby',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'rgb-value',
      scope: 'rgb-value',
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'rgbvalue',
      scope: 'inline-color-decorationrgb-value',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'rgbvalueless',
      scope: 'lessrgb-value',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'sassselector',
      scope: 'selector.sass',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'tsprimitive/builtintypes',
      scope:
        'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'blockscope',
      scope: 'block.scope.end,block.scope.begin',
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'csstoragetype',
      scope: 'storage.type.cs',
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'cslocalvariable',
      scope: 'entity.name.variable.local.cs',
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: walColors.colors.color5,
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'Stringinterpolation',
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'ResetJavaScriptstringinterpolationexpression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: walColors.colors.color3,
      },
    },
    {
      name: 'ImportmoduleJS',
      scope: ['keyword.operator.module'],
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'jsFlowtype',
      scope: ['support.type.type.flowtype'],
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'jsFlow',
      scope: ['support.type.primitive'],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'jsclassprop',
      scope: ['meta.property.object'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'jsfuncparameter',
      scope: ['variable.parameter.function.js'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'jstemplateliteralsbegin',
      scope: ['keyword.other.template.begin'],
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'jstemplateliteralsend',
      scope: ['keyword.other.template.end'],
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'jstemplateliteralsvariablebracesbegin',
      scope: ['keyword.other.substitution.begin'],
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'jstemplateliteralsvariablebracesend',
      scope: ['keyword.other.substitution.end'],
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'jsoperator.assignment',
      scope: ['keyword.operator.assignment'],
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'gooperator',
      scope: ['keyword.operator.assignment.go', 'keyword.operator.address.go'],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Gopackagename',
      scope: ['entity.name.package.go'],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'elmprelude',
      scope: ['support.type.prelude.elm'],
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'elmconstant',
      scope: ['support.constant.elm'],
      settings: {
        foreground: walColors.colors.color6,
      },
    },
    {
      name: 'templateliteral',
      scope: ['punctuation.quasi.element'],
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'html/pug(jade)escapedcharactersandentities',
      scope: ['constant.character.entity'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name:
        'stylingcsspseudo-elements/classestobeabletodifferentiatefromclasseswhicharethesamecolour',
      scope: [
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.pseudo-class',
      ],
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'Clojureglobals',
      scope: ['entity.global.clojure'],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Clojuresymbols',
      scope: ['meta.symbol.clojure'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'Clojureconstants',
      scope: ['constant.keyword.clojure'],
      settings: {
        foreground: walColors.colors.color4,
      },
    },
    {
      name: 'CoffeeScriptFunctionArgument',
      scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'IniDefaultText',
      scope: ['source.ini'],
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'Makefileprerequisities',
      scope: ['meta.scope.prerequisites.makefile'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'Makefiletextcolour',
      scope: ['source.makefile'],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'Groovyimportnames',
      scope: ['storage.modifier.import.groovy'],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'GroovyMethods',
      scope: ['meta.method.groovy'],
      settings: {
        foreground: walColors.colors.color12,
      },
    },
    {
      name: 'GroovyVariables',
      scope: ['meta.definition.variable.name.groovy'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'GroovyInheritance',
      scope: ['meta.definition.class.inherited.classes.groovy'],
      settings: {
        foreground: walColors.colors.color2,
      },
    },
    {
      name: 'HLSLSemantic',
      scope: ['support.variable.semantic.hlsl'],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
    {
      name: 'HLSLTypes',
      scope: [
        'support.type.texture.hlsl',
        'support.type.sampler.hlsl',
        'support.type.object.hlsl',
        'support.type.object.rw.hlsl',
        'support.type.fx.hlsl',
        'support.type.object.hlsl',
      ],
      settings: {
        foreground: walColors.colors.color10,
      },
    },
    {
      name: 'SQLVariables',
      scope: ['text.variable', 'text.bracketed'],
      settings: {
        foreground: walColors.colors.color8,
      },
    },
    {
      name: 'types',
      scope: ['support.type.swift', 'support.type.vb.asp'],
      settings: {
        foreground: walColors.colors.color9,
      },
    },
  ];
};
