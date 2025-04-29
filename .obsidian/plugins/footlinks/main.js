'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var FootlinksSettingTab = /** @class */ (function (_super) {
    __extends(FootlinksSettingTab, _super);
    function FootlinksSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    FootlinksSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Footlinks seperator")
            .setDesc("Seperates the footlinks area from main body")
            .addText(function (text) {
            return text
                .setPlaceholder("None")
                .setValue(_this.plugin.setting.footSeperator)
                .onChange(function (value) {
                _this.plugin.setting.footSeperator = value;
                _this.plugin.saveData(_this.plugin.setting);
                text.setValue(value);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show icon in left side menu")
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.setting.showIcon).onChange(function (value) {
                _this.plugin.setting.showIcon = value;
                _this.plugin.saveData(_this.plugin.setting);
                new obsidian.Notice("Reload the app to see icon " + (value ? "added" : "removed") + ".");
            });
        });
        // new Setting(containerEl)
        // 	.setName("Choose a footlinks style")
        // 	.addDropdown((dropdown) => {
        // 		dropdown.addOption("Single brackets", "test display");
        // 	});
    };
    return FootlinksSettingTab;
}(obsidian.PluginSettingTab));

var FootLinksSetting = /** @class */ (function () {
    function FootLinksSetting() {
        this.footSeperator = "";
        this.showIcon = true;
        this.needGlobalRefactor = false;
        this.refactorInterval = null;
    }
    return FootLinksSetting;
}());

obsidian.addIcon("footlinks-icon", '<path d="M22.3680891,66 C24.5772281,66 26.3680891,67.790861 26.3680891,70 L26.3680891,80 C26.3680891,82.209139 24.5772281,84 22.3680891,84 L13,84 C10.790861,84 9,82.209139 9,80 L9,70 C9,67.790861 10.790861,66 13,66 L22.3680891,66 Z M32.2112675,76.6666667 C33.4325168,76.6666667 34.422535,77.6501662 34.422535,78.8633744 C34.422535,80.0765826 33.4325168,81.0600821 32.2112675,81.0600821 C30.9900182,81.0600821 30,80.0765826 30,78.8633744 C30,77.6501662 30.9900182,76.6666667 32.2112675,76.6666667 Z M89,71 C89.5522847,71 90,71.4477153 90,72 L90,77 C90,77.5522847 89.5522847,78 89,78 L41,78 C40.4477153,78 40,77.5522847 40,77 L40,72 C40,71.4477153 40.4477153,71 41,71 L89,71 Z M32.2112675,68 C33.4325168,68 34.422535,68.9834995 34.422535,70.1967077 C34.422535,71.4099159 33.4325168,72.3934154 32.2112675,72.3934154 C30.9900182,72.3934154 30,71.4099159 30,70.1967077 C30,68.9834995 30.9900182,68 32.2112675,68 Z M22.3680891,41 C24.5772281,41 26.3680891,42.790861 26.3680891,45 L26.3680891,55 C26.3680891,57.209139 24.5772281,59 22.3680891,59 L13,59 C10.790861,59 9,57.209139 9,55 L9,45 C9,42.790861 10.790861,41 13,41 L22.3680891,41 Z M32.2112675,51.6666667 C33.4325168,51.6666667 34.422535,52.6501662 34.422535,53.8633744 C34.422535,55.0765826 33.4325168,56.0600821 32.2112675,56.0600821 C30.9900182,56.0600821 30,55.0765826 30,53.8633744 C30,52.6501662 30.9900182,51.6666667 32.2112675,51.6666667 Z M89,46 C89.5522847,46 90,46.4477153 90,47 L90,52 C90,52.5522847 89.5522847,53 89,53 L41,53 C40.4477153,53 40,52.5522847 40,52 L40,47 C40,46.4477153 40.4477153,46 41,46 L89,46 Z M32.2112675,43 C33.4325168,43 34.422535,43.9834995 34.422535,45.1967077 C34.422535,46.4099159 33.4325168,47.3934154 32.2112675,47.3934154 C30.9900182,47.3934154 30,46.4099159 30,45.1967077 C30,43.9834995 30.9900182,43 32.2112675,43 Z M22.3680891,16 C24.5772281,16 26.3680891,17.790861 26.3680891,20 L26.3680891,30 C26.3680891,32.209139 24.5772281,34 22.3680891,34 L13,34 C10.790861,34 9,32.209139 9,30 L9,20 C9,17.790861 10.790861,16 13,16 L22.3680891,16 Z M32.2112675,26.6666667 C33.4325168,26.6666667 34.422535,27.6501662 34.422535,28.8633744 C34.422535,30.0765826 33.4325168,31.0600821 32.2112675,31.0600821 C30.9900182,31.0600821 30,30.0765826 30,28.8633744 C30,27.6501662 30.9900182,26.6666667 32.2112675,26.6666667 Z M89,21 C89.5522847,21 90,21.4477153 90,22 L90,27 C90,27.5522847 89.5522847,28 89,28 L41,28 C40.4477153,28 40,27.5522847 40,27 L40,22 C40,21.4477153 40.4477153,21 41,21 L89,21 Z M32.2112675,18 C33.4325168,18 34.422535,18.9834995 34.422535,20.1967077 C34.422535,21.4099159 33.4325168,22.3934154 32.2112675,22.3934154 C30.9900182,22.3934154 30,21.4099159 30,20.1967077 C30,18.9834995 30.9900182,18 32.2112675,18 Z" fill="currentColor"></path>');
var FootlinksPlugin = /** @class */ (function (_super) {
    __extends(FootlinksPlugin, _super);
    function FootlinksPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.extractedLinks = [];
        return _this;
    }
    FootlinksPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setting = new FootLinksSetting();
                        return [4 /*yield*/, this.loadSetting()];
                    case 1:
                        _a.sent();
                        if (this.setting.showIcon) {
                            this.addRibbonIcon("footlinks-icon", "Footlinks", function () {
                                _this.generateFootlinks();
                            });
                        }
                        this.addCommand({
                            id: "footlinks-current-shortcut",
                            name: "Refactor current page",
                            callback: function () { return _this.generateFootlinks(); },
                        });
                        // this.addCommand({
                        // 	id: "footlinks-global-shortcut",
                        // 	name: "Refactor all pages",
                        // 	callback: () => this.generateFootlinks(),
                        // });
                        this.addSettingTab(new FootlinksSettingTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    FootlinksPlugin.prototype.loadSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadedSetting;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        loadedSetting = _a.sent();
                        if (loadedSetting) {
                            this.setting.footSeperator = loadedSetting.footSeperator;
                            this.setting.needGlobalRefactor = loadedSetting.needGlobalRefactor;
                            this.setting.refactorInterval = loadedSetting.refactorInterval;
                            this.setting.showIcon = loadedSetting.showIcon;
                        }
                        else {
                            this.saveData(this.setting);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FootlinksPlugin.prototype.generateFootlinks = function () {
        var _a, _b;
        this.re = /\[([^\[\]]+?)\]\((https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%\._\+~#=]{1,256}\.[a-zA-Z0-9\(\)]{1,6}?(?:\/(.*?(\(.*?\))*.*?)*?(\.\w{1,6})?)*?)\)/gi;
        var activeLeaf = (_a = this.app.workspace.activeLeaf) !== null && _a !== void 0 ? _a : null;
        var source = activeLeaf.view.sourceMode;
        var sourceContent = source.get();
        this.seperator = this.makeSeperator(sourceContent);
        var extractedLinks = (_b = this.extractLinks(sourceContent)) !== null && _b !== void 0 ? _b : null;
        if (extractedLinks) {
            var newContent = this.refactorContent(sourceContent, extractedLinks);
            source.set(newContent, false);
        }
    };
    FootlinksPlugin.prototype.extractLinks = function (text) {
        var extractedLinks = [];
        if (text) {
            var match = this.re.exec(text);
            if (!match) {
                new obsidian.Notice("No legal links found on this page.");
                return;
            }
            do {
                extractedLinks.push({ text: match[1], url: match[2] });
            } while ((match = this.re.exec(text)) !== null);
            return extractedLinks;
        }
        else {
            new obsidian.Notice("This page is still empty.");
        }
    };
    FootlinksPlugin.prototype.refactorContent = function (content, links) {
        var footlinks = this.formatLinks(links);
        var newContent = content
            .replace(this.re, "[$1]") // Remove urls in main text
            .trimEnd()
            .replace(/\] ?\[/g, "]  ["); // Obsidian parses [x][y] as a footnote, so we add two spaces in between to fix in the case of adjacent link texts.
        newContent += footlinks;
        return newContent;
    };
    FootlinksPlugin.prototype.formatLinks = function (links) {
        var footlinks = "";
        var linkTexts = links.map(function (link) { return "[" + link.text + "]: " + link.url + "\n"; });
        linkTexts = linkTexts.filter(function (text, pos) {
            return linkTexts.indexOf(text) == pos;
        });
        footlinks = linkTexts.reduce(function (prev, current) { return prev + current; }, this.seperator);
        return footlinks;
    };
    FootlinksPlugin.prototype.makeSeperator = function (content) {
        var footlinkRegx = /\[.*?\]: /g;
        return !!content.match(footlinkRegx)
            ? "\n"
            : "\n\n" + this.setting.footSeperator + "\n\n";
    };
    return FootlinksPlugin;
}(obsidian.Plugin));

module.exports = FootlinksPlugin;


/* nosourcemap */