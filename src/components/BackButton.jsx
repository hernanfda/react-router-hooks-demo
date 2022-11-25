import { useHistory } from "react-router-dom";

export const BackBtn = () => {
    let history = useHistory();
    return (
        <>
            <button onClick={() => history.goBack()}>Back</button>
        </>
    );
};
