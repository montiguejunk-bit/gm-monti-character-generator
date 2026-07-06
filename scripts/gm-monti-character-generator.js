Hooks.once("ready", () => {
  console.log("GM Monti Character Generator v0.3.0 loaded");

  game.gmMontiCharacterGenerator = {
    open() {
      new Dialog({
        title: "GM Monti Character Generator",
        content: `
          <div class="gm-monti-character-generator">
            <h2>GM Monti Character Generator</h2>
            <p>The generator window is working.</p>
            <button type="button" id="gm-monti-generate">Generate Character</button>
          </div>
        `,
        buttons: {
          close: {
            label: "Close"
          }
        },
        render: (html) => {
          html.find("#gm-monti-generate").click(() => {
            ui.notifications.info("Generate Character clicked.");
          });
        }
      }).render(true);
    }
  };

  ui.notifications.info("GM Monti Character Generator loaded.");
});

Hooks.on("getSceneControlButtons", (controls) => {
  controls.push({
    name: "gm-monti-character-generator",
    title: "GM Monti Character Generator",
    icon: "fas fa-user-plus",
    button: true,
    tools: [
      {
        name: "open-generator",
        title: "Open Character Generator",
        icon: "fas fa-user-plus",
        button: true,
        onClick: () => game.gmMontiCharacterGenerator.open()
      }
    ],
    activeTool: "open-generator"
  });
});