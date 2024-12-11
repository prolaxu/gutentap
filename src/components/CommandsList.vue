<template>
   <div class="tw-bg-white tw-border tw-border-slate-400 tw-rounded tw-overflow-hidden tw-shadow">
    <template v-if="items.length">
      <button
        class="tw-flex tw-flex-row tw-gap-2 tw-items-center tw-w-full tw-p-2 tw-pr-12 text-slate-600 hover:tw-bg-slate-50 tw-text-sm"
        :class="{ 'tw-bg-slate-100': index === selectedIndex }"
        v-for="(item, index) in itemsWithInsertCommand"
        :key="index"
        @click.prevent="selectItem(index)"
      >
        <span v-html="item.icon"></span>
        {{ item.title }}
      </button>
    </template>
    <div class="tw-p-2 tw-text-slate-600 tw-text-sm tw-w-full" v-else>No result</div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },

    command: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      selectedIndex: 0,
    };
  },

  watch: {
    items() {
      this.selectedIndex = 0;
    },
  },

  computed: {
    itemsWithInsertCommand() {
      return this.items.filter((item) => item.insertCommand);
    },
  },

  methods: {
    onKeyDown({ event }) {
      if (event.key === "ArrowUp") {
        this.upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        this.downHandler();
        return true;
      }

      if (event.key === "Enter") {
        this.enterHandler();
        return true;
      }

      return false;
    },

    upHandler() {
      this.selectedIndex =
        (this.selectedIndex + this.items.length - 1) % this.items.length;
    },

    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },

    enterHandler() {
      this.selectItem(this.selectedIndex);
    },

    selectItem(index) {
      const item = this.itemsWithInsertCommand[index];

      if (item) {
        this.command(item);
      }
    },
  },
};
</script>
