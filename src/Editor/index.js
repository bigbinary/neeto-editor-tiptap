import React, { forwardRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import SlashCommands from "./CustomExtensions/SlashCommands/ExtensionConfig";
import BubbleMenu from "./CustomExtensions/BubbleMenu";
import "./EditorStyles.css";

const Tiptap = (
	{ hideBlockSelector = false, hideBubbleMenu = false, ...otherProps },
	ref
) => {
	let extensions;
	if (otherProps.extensions) {
		extensions = otherProps.extensions;
	} else {
		extensions = [StarterKit, Typography, Highlight, Placeholder];
	}

	if (!hideBlockSelector) {
		extensions = [...extensions, SlashCommands];
	}

	const editor = useEditor({
		extensions,
		content: "Select me man!",
		injectCSS: false,
		editorProps: {
			attributes: {
				class: "prose focus:outline-none whitespace-pre",
			},
		},
	});

	/* Make editor object available to the parent */
	React.useImperativeHandle(ref, () => ({
		editor: editor,
	}));

	return (
		<>
			{!hideBubbleMenu && <BubbleMenu editor={editor} />}
			<EditorContent editor={editor} />
		</>
	);
};

export default React.forwardRef(Tiptap);
