import {DarkModeToggle} from "react-dark-mode-toggle-2";
import AppContext, {DarkModeReturn} from "../AppContext.ts";


type ThemeToggleProps = {
    onClick: () => void | null
};

const ThemeToggle = (props: ThemeToggleProps) => {
    const {onClick} = props;
    const handleOnChange = (darkMode: DarkModeReturn) => {
        darkMode.toggle();
        onClick();
    }

    return (
        <>
            <AppContext.Consumer>
                {(values) => (
                    <div style={{marginTop: 8}}>
                        <DarkModeToggle
                            onChange={() => handleOnChange(values)}
                            isDarkMode={values.isDarkMode}
                            size={50} />
                    </div>
                )}
            </AppContext.Consumer>
        </>
    )
}

export default ThemeToggle;