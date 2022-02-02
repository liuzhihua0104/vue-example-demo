<template>
  <div class="vuedraggable">

    <div class="drag-one">
      <draggable :group='{name: "menu", put: false,pull:"clone"}' :clone="cloneItem" :sort="false" :list="collections">
        <div class="drag" v-for='item in collections' :key='item.id'>
          {{item.fieldName}}
        </div>
      </draggable>

    </div>

    <div class="drag-two">
      <draggable group='menu' :list="collectionsB" @change="changeDrg">
        <div class="drag" v-for='(item,index ) in collectionsB' :key='index'>
          {{item.fieldName}}
        </div>
      </draggable>

    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'vuedraggable',
  data() {
    return {
      collections: [
        { id: 1, formId: 1, fieldName: '单选', fieldType: '3', fieldLable: '单选', placeholder: '', defaultValue: '', optionsValue: '', optionSettings: [], fieldLocked: 0, required: '0', bequeried: '0', showInlist: '0' },
        { id: 2, formId: 1, fieldName: '多选', fieldType: '4', fieldLable: '多选', placeholder: '', defaultValue: '', optionsValue: '', optionSettings: [], fieldLocked: 0, required: '0', bequeried: '0', showInlist: '0' },
        { id: 3, formId: 1, fieldName: '单行文本', fieldType: '0', fieldLable: '单行文本', placeholder: '', defaultValue: '', optionsValue: '', optionSettings: [], fieldLocked: 0, required: '0', bequeried: '0', showInlist: '0' },
        { id: 4, formId: 1, fieldName: '多行文本', fieldType: '1', fieldLable: '多行文本', placeholder: '', defaultValue: '', optionsValue: '', optionSettings: [], fieldLocked: 0, required: '0', bequeried: '0', showInlist: '0' },
        { id: 5, formId: 1, fieldName: '下拉框', fieldType: '2', fieldLable: '下拉框', placeholder: '', defaultValue: '', optionsValue: '', optionSettings: [], fieldLocked: 0, required: '0', bequeried: '0', showInlist: '0' }
      ],
      collectionsB: []

    }
  },
  components: { draggable },
  props: {
    msg: String
  },
  methods: {
    // 需要clone的数据，如果不return item,另一个同名拖拽组件无法接收拖拽的数据，无法触发change事件
    cloneItem(item) {
      return JSON.parse(JSON.stringify(item))
    },
    // 不可以移除
    changeDrg(e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vuedraggable {
  display: flex;
  width: 100%;
  height: 100%;
}
.drag-one,
.drag-two {
  flex: 1;
  min-height: 300px;
  background: yellow;
  border: 1px solid dotted;
}

.drag-two {
  background: green;
}
.drag {
  background: red;
  padding-bottom: 20px;
  border: 1px solid yellow;
}
</style>

