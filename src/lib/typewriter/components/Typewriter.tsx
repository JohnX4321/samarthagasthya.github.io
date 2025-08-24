import {TypewriterProps, useTypewriter} from "../hooks/useTypewriter.tsx";
import {Cursor,CursorProps} from "./Cursor.tsx";
import {JSX} from "react";


type ComponentProps = {
    cursor?: boolean
} & TypewriterProps & CursorProps;

export const Typewriter = ({
    words = ["Hello world!", "Welcome","to Portfolio"],
    loop = 1,
    typeSpeed = 80,
    deleteSpeed = 50,
    delaySpeed = 1500,
    cursor = false,
    cursorStyle = "|",
    cursorBlinking = true,
    cursorColor = "inherit",
    onLoopDone,
    onType,
    onDelay,
    onDelete
}: ComponentProps): JSX.Element => {
    const [text] = useTypewriter({
        words, loop,typeSpeed,
        deleteSpeed, delaySpeed, onLoopDone,
        onType, onDelay, onDelete
    });

    return (
        <>
            <span style={{fontSize: "2em"}}>{text}</span>
            {cursor && (
                <Cursor
                    cursorStyle={cursorStyle}
                    cursorColor={cursorColor}
                    cursorBlinking={cursorBlinking} />
            )}
        </>
    );
}