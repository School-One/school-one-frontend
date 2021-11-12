import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Editor as EditorText } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Editor.css';
import { useHistory } from 'react-router-dom';
import ConfettiGenerator from 'confetti-js';
import { ANSWER_HOMEWORK } from '../../../graphql/mutation';

export const Editor = (props) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const history = useHistory();
  const popup = document.querySelector('.popup');
  const confe = document.querySelector('#my-canvas');
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const [asnwerHomework] = useMutation(ANSWER_HOMEWORK, {
    update() {
      setEditorState('');
      popup.classList.add('active');
      confe.classList.add('active');
      const confettiSettings = { target: 'my-canvas' };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      setTimeout(function () {
        confetti.clear();
        history.push('/student');
      }, 4000);
    },
    variables: {
      homeworkId: props.id,
      studentAnswer: convertedContent,
    },
  });

  return (
    <div className="col-md-10">
      <EditorText
        editorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={handleEditorChange}
      />
      <button
        onClick={() => asnwerHomework()}
        className="my-3 col-md-12 btn btn-outline-dark"
      >
        Enviar
      </button>

      <div className="popup">
        <h2>Su tarea se entrego correctamente :D</h2>
      </div>

      <canvas id="my-canvas" />
    </div>
  );
};
