<template>
  <button
    class="w-full tw-flex tw-p-1 tw-flex-row tw-items-center tw-text-slate-600 tw-rounded tw-gap-2 hover:tw-bg-slate-100"
    :aria-label="label"
    :data-tooltip="label"
    :title="label"
    :class="active ? activeClass : ''"
    v-html="content"
  ></button>
</template>

<script>
export default {
  props: {
    clickHandler: {
      type: String,
      required: false,
    },

    content: {
      type: String,
      required: false,
    },

    label: {
      type: String,
      required: false,
    },
    activeClass: {
      type: String,
      required: false,
      default: "!tw-bg-slate-600 hover:!tw-bg-slate-700 !tw-text-white",
    },
    active: {
      type: Boolean,
    },
  },
};
</script>
