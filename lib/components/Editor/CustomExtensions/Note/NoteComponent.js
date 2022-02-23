import React from "react";
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";

export default () => {
  return (
    <NodeViewWrapper
      data-cy="neeto-editor-note"
      style={{ backgroundColor: "#e0e0e0", padding: "12px" }}
    >
      <NodeViewContent data-cy="neeto-editor-note-content" />
    </NodeViewWrapper>
  );
};
