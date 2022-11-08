import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import style from './Textarea.module.css'
function Textarea({ mode, showalert }) {

    let [text, settext] = useState('');
    const handleOnChange = (e) => {
        settext(e.target.value)
    }
    const handleOnClick = () => {
        let newText = text.toLocaleUpperCase()
        settext(newText)
        showalert("Converted to UpperCase", "Success")
    }
    const handleonclick1 = () => {
        let newText1 = text.toLocaleLowerCase()
        settext(newText1)
        showalert("Converted to LowerCase", "Success")
    }
    const handelcopytext = () => {
        let text = document.getElementById("textareabox")
        showalert("Copied To Clipboard", "Success")
        text.select();
        //to deselect all content after copying itt//
        document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text.value)
    }
    const handelExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        showalert("Extra Spaces Removed", "Success")
    }


    return (
        <div className={style.container}>
            <h1 >Enter text Below</h1>
            <Form.Control as="textarea" placeholder="Enter Text" cols="80" rows="10" PlaceHolder="Enter Text Here" onChange={handleOnChange} value={text} id="textareabox" class="col-xs-12" style={{ backgroundColor: mode === "light" ? "white" : "#a4b0be", color: mode === "light" ? "black" : "white" }} />
            <br />
            <Button variant="success" onClick={handleOnClick} className="mx-3 my-3" disabled={text.length === 0}>Convert To UpperCase</Button>
            <Button variant="success" onClick={handleonclick1} className="mx-3 my-3" disabled={text.length === 0}>Convert To LowerCase</Button>
            <Button variant="success" onClick={handelcopytext} className="mx-3 my-3" disabled={text.length === 0}>Copy Text</Button>
            <Button variant="success" onClick={handelExtraSpaces} className="mx-3 my-3" disabled={text.length === 0}>Remove Extra Spaces</Button>
            <Button onClick={() => { settext("") }} className="mx-3 my-3">Reset</Button>
            <h1 className="my-3">Data from input</h1>
            <p> {text.split(/\s+/).filter((event) => { return event.length !== 0 }).length}  words and {text.length} charachters</p>
            <p>{0.008 * text.split(' ').filter((event) => { return event.length !== 0 }).length} Minuts required to read</p>
            <h2>Preview of entered text</h2>
            <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
        </div>
    )
}
export default Textarea;