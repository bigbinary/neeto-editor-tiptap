import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import NoteComponent from "./NoteComponent";

export default Node.create({
  name: "note",

  group: "block",

  content: "inline*",

  parseHTML() {
    return [
      {
        tag: "note",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["note", mergeAttributes(HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setNote:
        (attributes) =>
        ({ commands }) => {
          return commands.setNode(this.name, attributes);
        },
      toggleNote:
        (attributes) =>
        ({ commands }) => {
          return commands.toggleNode(this.name, "paragraph", attributes);
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(NoteComponent);
  },
});
