import * as vscode from 'vscode';

export function startReplica(terminal: vscode.Terminal) {
    terminal.show();
    const command = `dfx start --background`;
    terminal.show();
    terminal.sendText(command);
    return true;
}

export function stopReplica(terminal: vscode.Terminal) {
    terminal.show();
    const command = `dfx stop`;
    terminal.show();
    terminal.sendText(command);
    return true;
}
