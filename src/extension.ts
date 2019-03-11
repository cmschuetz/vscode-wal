'use strict';

import * as vscode from 'vscode';
import { onStartup, walColorsPath } from './Handlers';
import * as chokidar from 'chokidar';

let walColorWatcher: chokidar.FSWatcher;

export async function activate(ctx: vscode.ExtensionContext) {
  const { onTokenColorsChanged, onWalColorsChanged } = await onStartup(ctx);
  walColorWatcher = chokidar
    .watch(walColorsPath, { persistent: true })
    .on('change', (_: any) => onWalColorsChanged());

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
