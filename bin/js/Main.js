var GameLayer = ui.Gamescene.gameLayerUI;
function initConfig() {
    Laya.init(1334, 750);
    Laya.stage.screenMode = "horizontal";
    Laya.stage.scaleMode = "exactFit";
    // Laya.DebugPanel.init(true);
    // Laya.DebugTool.init();
    Laya.Stat.show(0, 0);
}
// 程序入口
var Main = /** @class */ (function () {
    function Main() {
        //游戏初始化的配置
        initConfig();
        var gameLayer = new GameLayer();
        Laya.stage.addChild(gameLayer);
    }
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map