<template>
  <div class="tw-group tw-text-sm tw-relative">
    <slot></slot>
    <transition name="dropdown">
      <div
        v-if="hasDropdown && dropDownActive"
        class="tw-z-10 tw-bg-white tw-shadow tw-py-2 tw-group-focus-within:block tw-overflow-hidden tw-whitespace-nowrap tw-absolute tw-bottom-full sm:tw-bottom-auto sm:tw-top-full tw-mt-4 tw-rounded tw-border tw-border-slate-400"
        :class="align === 'left' ? 'tw-left-0' : 'tw-right-0'"
      >
        <slot name="dropdown"> </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    hasDropdown() {
      return !!this.$slots.dropdown;
    },
  },

  props: {
    align: {
      type: String,
      default: "left",
    },
    iconName: {
      type: String,
      required: false,
    },
    iconSvg: {
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
      default: "!bg-slate-600 hover:!tw-bg-slate-700 !tw-text-white tw-rounded",
    },
    active: {
      type: Boolean,
    },
    dropDownActive: {
      type: Boolean,
    },
  },
};
</script>

<style>
/* Add smooth transition styles */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
