// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(1334, 750);
        Laya.stage.scaleMode = "exactFit";
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
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map