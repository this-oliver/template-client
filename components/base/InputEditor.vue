<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import { Document } from '@tiptap/extension-document';
import { StarterKit } from '@tiptap/starter-kit';
import { Placeholder } from '@tiptap/extension-placeholder';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  label: { type: String },
  placeHolder: {
    type: String,
    default: 'What\'s on your mind?'
  },
  modelValue: {
    type: String,
    default: undefined
  },
  forceHeader: {
    type: Boolean,
    default: true
  }
});

const form = ref<string>(props.modelValue || '');

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    // force header
    props.forceHeader === true ? Document.extend({ content: 'heading block*' }) : Document,
    // configure starter kit
    StarterKit.configure({ document: props.forceHeader === true ? false : undefined }),
    // configure placeholder
    Placeholder.configure({
      // Use different placeholders depending on the node type:
      placeholder: ({ node }) => {
        // set placeholder for title
        if (node.type.name === 'heading') {
          return props.placeHolder
        }

        return '    ...';
      }
    })
  ],
  // watch for changes to editor content and update the form value
  onUpdate: () => {
    // HTML
    form.value = editor.value!.getHTML();

    // JSON
    // this.$emit('update:modelValue', this.editor.getJSON())
  }
});

/**
 * returns true if editor is empty. This is useful so that the title
 * can be forced
 */
const emptyContent = computed<boolean>(() => {
  return (
    form.value.length === 0 ||
    editor.value?.isEmpty ||
    editor.value?.view.state.doc.childCount === 0
  );
});

interface EditOption {
  // name
  name: string;
  // function to run when the button is clicked
  action: () => void;
  // whether the button is disabled or not
  disabled: boolean;
  // whether the button is active or not
  active: boolean;
}

// edit options (i.e. bold, italic, etc.)
const editOptions = computed<EditOption[]>(() => {
  return [
    {
      name: 'bold',
      action: () => editor.value!.chain().focus().toggleBold().run(),
      disabled: !editor.value!.can().chain().focus().toggleBold().run(),
      active: editor.value!.isActive('bold')
    },
    {
      name: 'italic',
      action: () => editor.value!.chain().focus().toggleItalic().run(),
      disabled: !editor.value!.can().chain().focus().toggleItalic().run(),
      active: editor.value!.isActive('italic')
    },
    {
      name: 'underline',
      action: () =>
        editor.value!.chain().focus().toggleHeading({ level: 2 }).run(),
      disabled: emptyContent.value || false,
      active: editor.value!.isActive('heading', { level: 2 })
    },
    {
      name: 'subheader',
      action: () =>
        editor.value!.chain().focus().toggleHeading({ level: 3 }).run(),
      disabled: emptyContent.value || false,
      active: editor.value!.isActive('heading', { level: 3 })
    },
    {
      name: 'paragraph',
      action: () => editor.value!.chain().focus().setParagraph().run(),
      disabled: emptyContent.value || false,
      active: editor.value!.isActive('paragraph')
    },
    {
      name: 'bullet list',
      action: () => editor.value!.chain().focus().toggleBulletList().run(),
      disabled: emptyContent.value || false,
      active: editor.value!.isActive('bulletList')
    },
    {
      name: 'ordered list',
      action: () => editor.value!.chain().focus().toggleOrderedList().run(),
      disabled: emptyContent.value || false,
      active: editor.value!.isActive('orderedList')
    },
    {
      name: 'quote',
      action: () => editor.value!.chain().focus().toggleBlockquote().run(),
      disabled: emptyContent.value || false,
      active: editor.value!.isActive('blockquote')
    },
    {
			name: 'code block',
			action: () => editor.value!.chain().focus().toggleCodeBlock().run(),
			disabled: false,
			active: editor.value!.isActive('codeBlock')
		},
    {
      name: 'horizontal line',
      action: () => editor.value!.chain().focus().setHorizontalRule().run(),
      disabled: emptyContent.value || false,
      active: false
    }
  ];
});

// watch for changes to the prop value and update the editor
watch(
  () => props.modelValue,
  (value) => {
    if (!value) {
      return;
    }

    // HTML
    const isSame = editor.value!.getHTML() === value;

    // JSON
    // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

    if (isSame) {
      return;
    }

    editor.value!.commands.setContent(value, false);
  }
);

// watch for changes to the form value and emit an update event
watch(
  () => form.value,
  (value) => {
    emit('update:modelValue', value);
  }
);
</script>

<template>
  <div v-if="editor">
    <base-btn v-for="option in editOptions" :key="option.name" :class="{ 'is-active': option.active, 'ma-1': true }" small
      outlined :disabled="option.disabled" @click="option.action">
      {{ option.name }}
    </base-btn>
  </div>
  <v-sheet class="mt-2 pa-2" color="white darken-2" rounded="lg">
    <editor-content id="input-editor" class="ma-2" :editor="editor" />
  </v-sheet>
</template>

<style>
#input-editor {
  min-height: 200px;
}

.tiptap p.is-empty::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

/* remove blue outline on editor when focused */
.ProseMirror-focused {
  outline: none;
}
</style>

<style lang="scss">
/* Basic editor styles */
.tiptap {
  >*+* {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}

.tiptap .is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #ced4da;
  pointer-events: none;
  height: 0;
}
</style>
