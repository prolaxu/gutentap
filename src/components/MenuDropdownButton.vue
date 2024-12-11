<template>
  <button
    class="tw-w-full tw-flex tw-py-1 tw-pl-2 tw-pr-6 tw-flex-row tw-items-center tw-text-slate-600 tw-gap-2 hover:tw-bg-slate-100"
    :aria-label="label"
    :title="label"
    :class="active ? activeClass : ''"
    v-html="content"
  ></button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: false,
    },
    clickHandler: {
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
