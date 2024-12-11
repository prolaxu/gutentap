<template>
  <div
    v-if="editor"
    class="text-base tw-px-8 tw-fixed tw-bottom-0 tw-bg-gray-100 tw-py-1 tw-border-t tw-left-0 tw-right-0 tw-flex tw-flex-row tw-gap-2"
  >
    <div v-for="(node, key) in nodeTree" :key="node">
      {{ node }} <span v-if="key < nodeTree.length - 1">&gt;</span>
    </div>
  </div>
</template>

<script>
import { GetNodeTree } from "../utils/pm-utils.js";

export default {
  props: {
    editor: {
      required: true,
    },
    value: {
      required: true,
    },
  },

  data() {
    return {
      nodeTree: [],
    };
  },

  watch: {
    value: {
      handler() {
        this.nodeTree = GetNodeTree(this.editor.view);
      },
      deep: true,
    },
  },
};
</script>
