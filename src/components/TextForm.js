
import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    function handleClick(e) {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" convert to uppar is success", "success");
        e.preventDefault();
    }

    function handleClick2(e) {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" convert to lower is success", "success");
        e.preventDefault();
    }

    function handleClear(e) {
        let newText = "";
        setText(newText);
        props.showAlert(" clear text success", "success");

        e.preventDefault();
    }

    function handleChange(e) {
        setText(e.target.value);
    }


    function removeSpace(e) {
        if (text != null) {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
        }
        props.showAlert(" Extra spaces removal success", "success");

        e.preventDefault();
    }
    const handleCopy = (e) => {
        var text = document.getElementById("mytextbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(" Text Copied", "success");

        e.preventDefault();
    }


    // const words = text.trim().split(/\s+/);
    const words = text.split(" ").filter((element)=>{return element.length!==0});
    const wordCount = words.length;
    const charCount = text.length;

    let summaryStyle ={
        fontSize: '10px'
    }



    return (
        <>
            <div className="container my-1" style={{ color: props.Mode === "dark" ? "white" : "black" }} >
                <h1>{props.h1}</h1>
                <form className=" my-2 ">
                    <div className="form-group ">
                        <textarea className="form-control" placeholder="Enter Text Here" value={text} onChange={handleChange} id="mytextbox" rows="5" style={{
                            backgroundColor: props.Mode === "dark" ? "#212426" : "white",
                            color: props.Mode === "dark" ? "white" : "black"
                        }}></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert Upper</button>
                    <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClick2}>Convert Lower</button>
                    <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
                    <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={removeSpace}>RemveExtraSpaces</button>
                    <button disabled={text.length===0}className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy</button>
                </form>
                <div className="summary" style={summaryStyle}>
                    <h2>Summary of text</h2>
                    <p>The Words in text is {wordCount}</p>
                    <p>The characters in text is {charCount} </p>
                    <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length*0.008)} Minuts to read</p>

                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Preview of text will be appear hare."}</p>
                </div>
            </div>



        </>
    )
}
