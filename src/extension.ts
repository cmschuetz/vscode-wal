'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';
import { onStartup, walColorsPath } from './Handlers';

let walColorWatcher: fs.FSWatcher;

export async function activate(ctx: vscode.ExtensionContext) {
  const {
    onTokenColorsChanged,
    onWalColorsChanged,
    onSelectTokenColorTheme,
  } = await onStartup(ctx);

  walColorWatcher = fs.watch(walColorsPath, onWalColorsChanged);

  ctx.subscriptions.push(
    vscode.commands.registerCommand(
      'wal.selectTokenColorTheme',
      onSelectTokenColorTheme
    )
  );

  ctx.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(event => {
      if (event.affectsConfiguration('wal.tokenColorTheme')) {
        onTokenColorsChanged();
      }
    })
  );
}

export async function deactivate(ctx: vscode.ExtensionContext) {
  walColorWatcher.close();
}
