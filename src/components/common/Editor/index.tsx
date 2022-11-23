import 'quill/dist/quill.snow.css';
import styles from './index.module.scss';
import { useCallback, useEffect, useState } from 'react';
const Quill = typeof window === 'object' ? require('quill') : () => false;

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
];

interface EditorProps {
  onChange?: (value: string) => void;
  value?: string;
}

const Editor = (props: EditorProps) => {
  const { onChange, value } = props;
  const [quill, setQuill] = useState<any>();

  useEffect(() => {
    if (quill == null) return;

    const handler = (delta: any, oldDelta: any, source: any) => {
      console.log('delta', delta, oldDelta, source);
      
      if (source !== 'user') return;
      
      onChange?.(quill.root.innerHTML);
    };

    quill.on('text-change', handler);

    return () => {
      quill.off('text-change', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quill]);

  const wrapperRef = useCallback((wrapper: any) => {
    if (wrapper == null) return;

    wrapper.innerHTML = '';
    const editor = document?.createElement('div');
    wrapper.append(editor);

    const q = new Quill(editor, {
      theme: 'snow',
      modules: { toolbar: TOOLBAR_OPTIONS },
      placeholder: 'Start writing...',
    });
    setQuill(q);
  }, []);

  useEffect(() => {
    if (quill == null) return;
    if (value !== quill.root.innerHTML) {
      quill.root.innerHTML = value || '';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quill, value]);

  return (
    <div className={styles.editorMainContainer}>
      <div className={styles.editorContainer} ref={wrapperRef}></div>
    </div>
  );
};

export default Editor;