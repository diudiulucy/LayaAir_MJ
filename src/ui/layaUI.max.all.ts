
import View = laya.ui.View;
import Dialog = laya.ui.Dialog;
module ui.Gamescene {
    export class gameLayerUI extends View {
        public bg: Laya.Image;

        public static uiView: any = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "var": "bg", "skin": "common/bg/room_bg.jpg" } }] };
        constructor() { super() }
        createChildren(): void {

            super.createChildren();
            this.createView(ui.Gamescene.gameLayerUI.uiView);
            this.bg.on(laya.events.Event.CLICK, this, this.onBtnClick);
        }
        private onBtnClick(): void {
            //手动控制组件属性

            var txt = new Laya.Text();
            //设置文本内容
            txt.text = "Hello Layabox";
            //设置文本颜色
            txt.color = "#FF0000";
            //设置文本字体大小，单位是像素
            txt.fontSize = 66;
            //设置字体描边
            txt.stroke = 5;//描边为5像素
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
    }
}
