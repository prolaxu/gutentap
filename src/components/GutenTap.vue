<template>
  <div class="gutentap">
    <bubble-menu
      v-if="editor && tableRowTools"
      :editor="editor"
      pluginKey="tableRowMenu"
      :should-show="tableIsActive"
      :tippy-options="{
        placement: 'left',
        getReferenceClientRect: getTableRowMenuCoords,
      }"
    >
      <menu-item
        :dropDownActive="getDilogState('row_tools')"
      >
        <menu-button
           @click.prevent="()=> toggleDilaogState('row_tools')"
          title="Row tools"
          class="tw-rounded-full tw-text-slate-400 hover:tw-text-slate-800"
          :content="moreIconRound"
        />

        <template #dropdown>
          <menu-dropdown-button
            v-for="tool in tableRowTools"
            v-html="tool.icon + ' ' + tool.title"
            :key="tool.title"
            :label="tool.title"
            @click.prevent="tool.command(editor)"
          />
        </template>
      </menu-item>
    </bubble-menu>

    <bubble-menu
      v-if="editor && tableColumnTools"
      :editor="editor"
      pluginKey="tableColumnMenu"
      :should-show="tableIsActive"
      :tippy-options="{
        placement: 'bottom',
        getReferenceClientRect: getTableColumnMenuCoords,
      }"
    >
      <menu-item
        :dropDownActive="getDilogState('column_tools')"
      >
        <menu-button
          title="Column tools"
          :content="moreIconRound"
          class="tw-rounded-full tw-text-slate-400 hover:tw-text-slate-800"
           @click.prevent="()=> toggleDilaogState('column_tools')"
        />
        <template #dropdown>
          <menu-dropdown-button
            v-for="tool in tableColumnTools"
            :content="tool.icon + ' ' + tool.title"
            :key="tool.title"
            :label="tool.title"
            @click.prevent="tool.command(editor)"
          />
        </template>
      </menu-item>
    </bubble-menu>

    <bubble-menu
      pluginKey="mainMenu"
      @dragend="endDragging($event)"
      :draggable="dragging"
      :should-show="shouldShowMainToolbar"
      v-if="editor"
      class="tw-text-sm tw-bg-white tw-max-w-screen tw-flex tw-divide-x tw-max-w-full tw-divide-slate-400 tw-flex-row tw-border-slate-400 md:tw-rounded tw-border-t md:tw-border"
      :editor="editor"
      :class="{
        'mouse:tw-pointer-events-none mouse:tw-opacity-0': isTyping,
      }"
      :tippy-options="{
        maxWidth: 'none',
        placement: 'top-start',
        getReferenceClientRect: getMenuCoords,
        onCreate: (instance) =>
          instance.popper.classList.add(
            'max-md:!tw-sticky',
            'max-md:!tw-bottom-0',
            'max-md:!tw-top-auto',
            'max-md:!tw-transform-none'
          ),
      }"
    >
      <div class="tw-flex tw-flex-row">
        <button
          @click.prevent
          @mousedown="startDragging($event)"
          @mouseup="
            draggedNodePosition = false;
            dragging = false;
          "
          class="hidden md:tw-block tw-ml-1 tw-my-2 hover:tw-bg-slate-100 tw-rounded"
          :class="{
            'tw-cursor-grab': !dragging,
            'tw-cursor-grabbing mr-1': dragging,
          }"
          aria-label="Drag"
          data-tooltip="Drag"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6"
          >
            <path
              d="M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z"
            ></path>
          </svg>
        </button>

        <div
          class="tw-py-1 md:tw-py-2 tw-group tw-relative"
          v-if="!dragging && currentBlockTool"
        >
          <menu-item
            :dropDownActive="getDilogState('current_block_tool')"
          >
            <menu-button
               @click.prevent="()=> toggleDilaogState('current_block_tool')"
              :title="currentBlockTool?.name"
              :content="currentBlockTool?.icon"
              :class="
                currentBlockTool?.canBeConverted &&
                'tw-group-focus-within:bg-slate-600 !tw-cursor-pointer tw-group-focus-within:text-white hover:tw-bg-slate-50'
              "
            />
            <template v-if="currentBlockTool?.canBeConverted" #dropdown>
              <div
                class="tw-p-3 tw-uppercase tw-text-gray-600 tw-text-xs tw-pb-1 tw-tracking-wide"
              >
                Transform to
              </div>
              <menu-dropdown-button
                v-for="tool in allBlockTools.filter(
                  (tool) => tool.convertCommand
                )"
                :content="tool.icon + ' ' + tool.title"
                :key="tool.title"
                :label="tool.title"
                @click.prevent="tool.convertCommand(editor)"
                activeClass="hidden"
                :active="tool.isActiveTest(editor)"
              />
            </template>
          </menu-item>
        </div>

        <div class="tw-pr-2 tw-flex tw-flex-col" v-if="!dragging">
          <button
            @click.prevent="moveNode('UP')"
            :disabled="!canMoveNodeUp()"
            data-tooltip="Move up"
            class="tw-mt-1 tw-md:tw-mt-2"
          >
            <svg
              width="24"
              height="24"
              class="tw-pointer-events-none tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
              ></path>
            </svg>
          </button>
          <button
            @click.prevent="moveNode('DOWN')"
            :disabled="!canMoveNodeDown()"
            data-tooltip="Move down"
            class="-tw-mt-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 24 24"
              class="tw-pointer-events-none -tw-mt-2 tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6"
            >
              <path d="M17.5 11.6 12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        class="tw-flex tw-gap-1 tw-items-center tw-hide-empty tw-flex-row tw-p-1 md:tw-p-2"
        v-if="!dragging"
      >
        <menu-item
          v-for="(alignmentToolGroup, key) in activeAlignmentTools"
          :key="key"
          :dropDownActive="getDilogState('tool_group_'+key)"
        >
          <menu-button
            @click.prevent="()=> toggleDilaogState('tool_group_'+key)"
            :title="
              alignmentToolGroup.find((tool) =>
                tool.isActiveTest(editor, topLevelNodeType)
              )?.title
            "
            :content="
              alignmentToolGroup.find((tool) =>
                tool.isActiveTest(editor, topLevelNodeType)
              )?.icon
            "
          />

          <template #dropdown>
            <menu-dropdown-button
              v-for="tool in alignmentToolGroup"
              :key="tool.title"
              :content="tool.icon + ' ' + tool.title"
              :label="tool.title"
              @click.prevent="tool.command(editor)"
              :active="tool.isActiveTest(editor, topLevelNodeType)"
            />
          </template>
        </menu-item>
      </div>

      <div
        v-if="!dragging && currentBlockTool?.tools?.length"
        class="tw-gap-1 tw-flex tw-flex-row tw-items-center tw-p-1 md:tw-p-2"
      >
        <menu-button
          v-for="tool in currentBlockTool?.tools"
          :key="tool.name"
          :content="tool.icon"
          :label="tool.title"
          :activeClass="tool.isActiveClass"
          @click.prevent="tool.command.call(0, editor)"
          :disabled="tool.isDisabledTest?.call(0, editor)"
          :active="tool.isActiveTest?.call(0, editor)"
        ></menu-button>
      </div>

      <div
        v-if="currentBlockTool?.hasInlineTools && !dragging"
        class="tw-p-1 tw-gap-0.5 md:tw-p-2 md:tw-gap-1 tw-flex tw-relative tw-flex-row tw-items-center"
      >
        <menu-item
          align="right"
          :key="tool.title"
          v-for="(tool,index) in allInlineTools"
           :dropDownActive="getDilogState('all_inline_tools_'+index)"
        >
          <menu-button
            :content="tool.icon"
            :label="tool.title"
            :activeClass="tool.isActiveClass"
            @click.prevent="()=>{
              toggleDilaogState('all_inline_tools_'+index);
              tool.command(editor)
            }"
            :active="tool.isActiveTest(editor)"
          ></menu-button>
          <template #dropdown>
            <menu-dropdown-button
              v-for="tool in tool.tools"
              :key="tool.name"
              :content="tool.icon + ' ' + tool.title"
              @click.prevent="tool.command(editor)"
              :active="tool.isActiveTest(editor)"
            />
          </template>
        </menu-item>
      </div>

      <div
        v-if="editor && editor.can().deleteNode(topLevelNodeType) && !dragging"
        class="tw-p-1 tw-gap-0.5 md:tw-p-2 md:tw-gap-1 tw-flex tw-tw-group tw-flex-row tw-items-center tw-relative"
      >
        <menu-item
          align="right"
          :dropDownActive="getDilogState('more_option')"
        >
          <menu-button
            @click.prevent="()=> toggleDilaogState('more_option')"
            :content="moreIcon"
            label="More options"
          ></menu-button>
          <template #dropdown>
            <menu-dropdown-button
              ref="deleteButton"
              :content="deleteIcon + ' Delete'"
              label="Delete block"
              @click.prevent="deleteNode(topLevelNodeType)"
            />
          </template>
        </menu-item>
      </div>
    </bubble-menu>

    <editor-content
      :class="editorClass ?? 'prose'"
      @keydown="isTyping = true"
      @keyup.esc="isTyping = false"
      ref="editor"
      :editor="editor"
    />
  </div>
</template>

<script>
import MenuButton from "@/components/MenuButton.vue";
import MenuItem from "@/components/MenuItem.vue";
import MenuDropdownButton from "@/components/MenuDropdownButton.vue";

import { BubbleMenu, Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";
import Blockquote from "@tiptap/extension-blockquote";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from "@tiptap/extension-highlight";

import {
  DragNode,
  MoveNode,
  GetTopLevelBlockCoords,
  GetTableColumnCoords,
  GetTableRowCoords,
  GetTopLevelNode,
} from "../utils/pm-utils.js";

import { mergeArrays } from "../utils/utils";

import BlockWidth from "../extensions/block-width";
import { Youtube } from "../extensions/youtube";
import { TrailingNode } from "../extensions/trailing-node";
import { InsertBetween } from "../extensions/insert-between";
import Variants from "../extensions/variants";

import Commands from "./commands";
import suggestion from "./suggestion";

import defaultBlockTools from "../tools/block-tools";
import defaultInlineTools from "../tools/inline-tools";
import defaultAlignmentTools from "../tools/alignment-tools";
import { tableRowTools, tableColumnTools } from "../tools/table-tools";

export default {
  props: {
    modelValue: {},
    editable: {
      default: true,
    },
    placeholder: {
      type: String,
      default: "Type / to choose a block",
    },
    editorClass: {
      type: String,
    },
    mode: {
      type: String,
      default: "html",
    },
    extensions: {
      type: Array,
      default: () => [],
    },
    blockTools: {
      type: Array,
      default: () => [],
    },
    inlineTools: {
      type: Array,
      default: () => [],
    },
    alignmentTools: {
      type: Array,
      default: () => [],
    },
    blockWidthTypes: {
      type: Array,
      default: () => ["horizontalRule", "blockquote", "youtube"],
    },
    variantsTypes: {
      type: Array,
      default: () => [
        "paragraph",
        "heading",
        "horizontalRule",
        "blockquote",
        "list",
        "youtube",
      ],
    },
  },

  components: {
    BubbleMenu,
    EditorContent,
    MenuButton,
    MenuItem,
    MenuDropdownButton,
  },

  data() {
    return {
      activeInlineDilog:{},
      dragging: false,
      draggedNodePosition: null,
      editor: null,
      allBlockTools: mergeArrays(defaultBlockTools(), this.blockTools),
      allInlineTools: mergeArrays(defaultInlineTools(), this.inlineTools),
      allAlignmentTools: this.alignmentTools.length
        ? this.alignmentTools
        : defaultAlignmentTools(),
      tableRowTools: tableRowTools(),
      tableColumnTools: tableColumnTools(),
      topLevelNodeType: null,
      currentBlockTool: null,
      isTyping: false,
      showMainToolbar: false,
      moreIcon:
        '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/></svg>',
      deleteIcon:
        '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>',
      moreIconRound:
        '<svg class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    };
  },

  created: function () {
    window.addEventListener("mousemove", () => this.cancelTyping());
    this.closeAllDilogState();
  },

  unmounted: function () {
    window.removeEventListener("mousemove", () => this.cancelTyping());
    this.closeAllDilogState();
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit.configure({
          blockquote: false,
        }),
        Blockquote.extend({
          content: "paragraph",
        }),
        TrailingNode,
        InsertBetween,
        Subscript,
        Superscript,
        Highlight,
        Commands.configure({
          suggestion: suggestion(this.allBlockTools),
        }),
        Link.configure({
          openOnClick: false,
        }),
        Placeholder.configure({
          placeholder: this.placeholder,
        }),
        BlockWidth.configure({
          types: this.blockWidthTypes,
        }),
        Variants.configure({
          types: this.variantsTypes,
        }),
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
        Table.configure({
          resizable: true,
        }),
        TableRow.extend({
          allowGapCursor: false,
        }),
        TableHeader.extend({
          content: "(inline|hardBreak?)*",
          isolating: false,
        }),
        TableCell.extend({
          content: "(inline|hardBreak?)*",
          isolating: false,
        }),
        Youtube.configure({
          inline: false,
          HTMLAttributes: {
            class: "tw-aspect-video tw-h-auto tw-w-full",
          },
        }),
        ...this.extensions,
      ],

      onUpdate: () => {
        this.updateToolbar();
        this.$emit(
          "update:modelValue",
          this.mode == "json"
            ? this.editor.getJSON().content
            : this.editor.getHTML()
        );
      },

      onSelectionUpdate: () => {
        this.updateToolbar();
        // this.nodeTree = GetNodeTree(this.editor.view);
      },
    });

    this.editor.commands.setContent(
      this.mode == "json"
        ? {
            type: "doc",
            content: this.modelValue,
          }
        : this.modelValue
    );

    this.editor.setEditable(this.editable);
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  watch: {
    topLevelNodeType() {
      this.currentBlockTool = this.getCurrentBlockTool();
    },
    editable() {
      this.editor.setEditable(this.editable);
    },
  },

  computed: {
    activeAlignmentTools() {
      if (this.topLevelNodeType) {
        return this.allAlignmentTools.filter((alignmentToolGroup) =>
          alignmentToolGroup.find((tool) =>
            tool.isActiveTest(this.editor, this.topLevelNodeType)
          )
        );
      } else {
        return null;
      }
    },
  },

  methods: {
    getDilogState(key){
      return this.activeInlineDilog[key];
    },
    closeAllDilogState(){
      const keys = Object.keys(this.activeInlineDilog);
      keys.forEach(objKey=>{
          this.activeInlineDilog[objKey]=0;
      })
    },
    toggleDilaogState(key){
      const keys = Object.keys(this.activeInlineDilog);
      keys.forEach(objKey=>{
        if(objKey !== key){
          this.activeInlineDilog[objKey]=0;
        }
      })
      if(this.activeInlineDilog[key]===undefined){
          this.activeInlineDilog[key]=1
      }else{
          this.activeInlineDilog[key]= ! this.activeInlineDilog[key];
      }
    },
    cancelTyping() {
      this.$nextTick(() => (this.isTyping = false));
    },

    shouldShowMainToolbar() {
      return this.editable && this.editor.isActive() && this.modelValue;
    },

    updateToolbar() {
      this.topLevelNodeType = this.getTopLevelNodeType();
    },

    getCurrentBlockTool() {
      return this.allBlockTools.find(
        (tool) =>
          tool.name == this.topLevelNodeType ||
          tool.tools?.find((tool) => tool.name == this.topLevelNodeType)
      );
    },

    deleteNode(node) {
      this.editor.commands.deleteNode(node);
      this.$refs.deleteButton.$el.blur();
    },

    getMenuCoords() {
      return GetTopLevelBlockCoords(this.editor.view);
    },

    getTableRowMenuCoords() {
      return GetTableRowCoords(this.editor.view);
    },

    getTableColumnMenuCoords() {
      return GetTableColumnCoords(this.editor.view);
    },

    startDragging(event) {
      let coords = { left: event.clientX, top: event.clientY + 48 };
      this.draggedNodePosition = this.editor.view.posAtCoords(coords).pos;
      this.dragging = true;
    },

    endDragging(event) {
      let targetNodeFromCoords = this.editor.view.posAtCoords({
        left: event.clientX,
        top: event.clientY + 20,
      });

      if (targetNodeFromCoords) {
        DragNode({
          view: this.editor.view,
          state: this.editor.state,
          draggedNodePosition: this.draggedNodePosition,
          targetNodePosition: targetNodeFromCoords.pos,
        });
      }

      this.dragging = false;
      this.draggedNode = null;
    },

    tableIsActive() {
      this.closeAllDilogState();
      return this.editable && this.getTopLevelNodeType() == "table";
    },

    moveNode(dir = "UP") {
      MoveNode({
        view: this.editor.view,
        dir: dir,
        currentResolved: this.editor.view.state.selection.$from,
      });
    },

    getTopLevelNodeType() {
      return GetTopLevelNode(this.editor.view)?.type.name;
    },

    canMoveNodeDown() {
      const selectionStart = this.editor.view.state.selection.$from;
      return selectionStart.index(0) < selectionStart.node(0).childCount - 1;
    },

    canMoveNodeUp() {
      const selectionStart = this.editor.view.state.selection.$from;
      return selectionStart.index(0) > 0;
    },
  },
};
</script>

<style>
@import "@/style.css";
</style>
