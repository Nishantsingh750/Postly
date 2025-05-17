import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

function MyEditor({ onChange, initialValue }) {
  const editorRef = useRef(null);

  return (
    <Editor
      apiKey="no-api-key"  // Use your API key here if available
      onInit={(evt, editor) => editorRef.current = editor}
      initialValue={initialValue}
      init={{
        height: 300,
        menubar: false,
        plugins: 'link image code',
        toolbar: 'undo redo | formatselect | bold italic | link image | code',
      }}
      onEditorChange={(newText) => onChange(newText)}
    />
  );
}
