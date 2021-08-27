"use strict";
exports.__esModule = true;
exports.client = void 0;
var discord_js_1 = require("discord.js");
exports.client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
