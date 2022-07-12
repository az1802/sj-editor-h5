
// import RenderVnode from '@/components/RenderVnode';

import InputEdit from '@/components/InputEdit.vue';
import ComponentList from '@/components/ComponentList.vue';
import EditWrapper from '@/components/EditWrapper.vue';
import LayerList from '@/components/LayerList.vue';
import EditGroup from '@/components/EditGroup.vue';
import PropsTable from '@/components/PropsTable.vue';
import TemplateList from '@/components/TemplateList.vue';
import UserProfile from '@/components/UserProfile.vue';
import WorksList from '@/components/WorksList.vue';
console.log('ComponentList: ', EditGroup);
import ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
export default {
  install(app: App) {
    app.component(InputEdit.__name, InputEdit);
    app.component(ComponentList.__name, ComponentList);
    app.component(EditWrapper.__name, EditWrapper);
    app.component(LayerList.__name, LayerList);
    app.component(PropsTable.__name, PropsTable);
    app.component(TemplateList.__name, TemplateList);
    app.component(UserProfile.__name, UserProfile);
    app.component(WorksList.__name, WorksList);
    app.component("EditGroup", EditGroup);

    app.use(ant);
  },
};
