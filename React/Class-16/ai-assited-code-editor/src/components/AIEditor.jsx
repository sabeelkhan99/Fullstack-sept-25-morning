import React, { useRef, useState } from 'react';
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
    dangerouslyAllowBrowser: true
});

const AIEditor = () => {

    const textAreaRef = useRef();
    const selectedTextRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [correctedText, setCorrectedText] = useState(null);
    const [incorrectText, setIncorrectText] = useState(null);

    const sendReqToAIModel = async () => {
        console.log(selectedTextRef.current);
        if (selectedTextRef.current?.trim().length === 0) {
            return;
        }
        try {
            setIsLoading(true);
            setIncorrectText(selectedTextRef.current);
            const response = await client.responses.create({
                model: "gpt-5-nano",
                instructions: 'Fix the grammar for the input english text, return the fixed text only, without any other information.',
                input: selectedTextRef.current
            });
            // console.log(response.output_text);
            setIsLoading(false);
            setCorrectedText(response.output_text);
        }
        catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    const textSelectHandler = () => {
        const textAreaElement = textAreaRef.current;
        if (!textAreaElement) {
            return;
        }
        const startIdx = textAreaElement.selectionStart;
        const endIdx = textAreaElement.selectionEnd;

        if (startIdx === endIdx) {
            // console.log('Nothing is selected');
            return;
        }

        const selectedText = textAreaElement.value.substring(startIdx, endIdx);

        selectedTextRef.current = selectedText;
    }

    const applyCorrectedTextHandler = () => {
        textAreaRef.current.value = textAreaRef.current.value.replace(incorrectText, correctedText);
    }

    return (
        <div>
            <textarea ref={textAreaRef} onSelect={textSelectHandler} name="" id="" rows={10} cols={50} placeholder='Write your text..'></textarea>
            <br />
            {isLoading && <p>Fixing grammar...</p>}
            {incorrectText && <p>Incorrect: { incorrectText }</p>}
            {correctedText && <p>Correct: { correctedText }</p>}
            <button onClick={sendReqToAIModel}>Fix Grammar</button>
            <button onClick={applyCorrectedTextHandler}>Apply</button>
        </div>
    )
}

export default AIEditor
