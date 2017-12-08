var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var Gamescene;
    (function (Gamescene) {
        var gameLayerUI = /** @class */ (function (_super) {
            __extends(gameLayerUI, _super);
            function gameLayerUI() {
                return _super.call(this) || this;
            }
            gameLayerUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Gamescene.gameLayerUI.uiView);
                this.bg.on(laya.events.Event.CLICK, this, this.onBtnClick);
            };
            gameLayerUI.prototype.onBtnClick = function () {
                //手动控制组件属性
                var txt = new Laya.Text();
                //设置文本内容
                txt.text = "Hello Layabox";
                //设置文本颜色
                txt.color = "#FF0000";
                //设置文本字体大小，单位是像素
                txt.fontSize = 66;
                //设置字体描边
                txt.stroke = 5; //描边为5像素
                txt.strokeColor = "#FFFFFF";
                //设置为粗体
                txt.bold = true;
                //设置文本的显示起点位置X,Y
                txt.pos(60, 100);
                //设置舞台背景色
                Laya.stage.bgColor = '#23238E';
                //将文本内容添加到舞台 
                Laya.stage.addChild(txt);
            };
            gameLayerUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "var": "bg", "skin": "common/bg/room_bg.jpg" } }] };
            return gameLayerUI;
        }(View));
        Gamescene.gameLayerUI = gameLayerUI;
    })(Gamescene = ui.Gamescene || (ui.Gamescene = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map