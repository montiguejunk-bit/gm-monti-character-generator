Hooks.once("ready", () => {
  console.log("GM Monti Character Generator loaded!");

  class GMMontiGenerator extends FormApplication {
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        title: "GM Monti Character Generator",
        id: "gm-monti-character-generator",
        width: 500,
        height: 300
      });
    }

    async _renderInner() {
      return $(`
        <div style="padding:20px;">
          <h2>GM Monti Character Generator</h2>
          <button id="generate">Generate Character</button>
        </div>
      `);
    }
  }

  game.settings.register(
    "gm-monti-character-generator",
    "dummy",
    {
      scope: "world",
      config: false,
      type: Boolean,
      default: true
    }
  );

  game.settings.registerMenu(
    "gm-monti-character-generator",
    "mainMenu",
    {
      name: "GM Monti Character Generator",
      label: "Open",
      hint: "Open the Character Generator.",
      icon: "fas fa-user-plus",
      type: GMMontiGenerator,
      restricted: true
    }
  );
});