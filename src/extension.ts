import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('git-mastery.helloWorld', () => {
		// vscode.window.showInformationMessage('Hello World from Git Mastery!');
		const panel = vscode.window.createWebviewPanel(
			'exampleWebview', // Identificador interno del Webview
			'Mi Webview', // Título mostrado en la pestaña del Webview
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{} // Webview options.
		);

		// Configurar el contenido HTML del Webview
		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mi Webview</title>
      <style>
        /* Añade tu CSS aquí */
        body { font-family: Arial, sans-serif; padding: 20px; }
      </style>
    </head>
    <body>
      <h1>¡Hola desde el Webview!</h1>
      <p>Esta es una interfaz HTML en una extensión de VSCode.</p>
    </body>
    </html>`;
}

export function deactivate() {}
