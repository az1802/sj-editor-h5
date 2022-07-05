
// import RenderVnode from '@/components/RenderVnode';
// import LText from '@/components/LText.vue';
// import LShape from '@/components/LShape.vue';
// import LImage from '@/components/LImage.vue';
import ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
export default {
  install(app: App) {
    // app.component(LText.name, LText);
    // app.component(LShape.name, LShape);
    // app.component(LImage.name, LImage);
    // app.component('RenderVnode', RenderVnode);
    app.use(ant);
  },
};
