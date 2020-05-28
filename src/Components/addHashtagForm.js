import React from 'react';

function addHashtagForm (props) {
      return (
        <form className="hashtag-form" onSubmit={(e)=>props.submitForm(e)}>
          <input
            value={props.inputValue}
            onChange={props.changeInputValue}
            type="text"
            placeholder="Ajouter un # à votre list"
          />
          <input
            type="submit"
            value="Ajouter"
          />
        </form>
    );
}

export default addHashtagForm;
