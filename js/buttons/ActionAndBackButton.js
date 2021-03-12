import React from 'react';
import { useHistory } from 'react-router';

const ActionAndBack = ({ buttonActionType, onActionClick, isEnabled }) => {
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    }

    const disabledButtonClass = isEnabled ? "" : "disabled";

    return (
        <div className="row mt-3">
            <div className="col text-left">
                <button
                    className={`btn btn-primary col-6 form-control ${disabledButtonClass}`}
                    disabled={!isEnabled}
                    onClick={onActionClick}
                >{buttonActionType.toUpperCase()}</button>
            </div>
            <div className="col text-right">
                <button className="btn btn-primary col-6 form-control" onClick={handleBackClick}>BACK</button>
            </div>
        </div>
    );
}

export default ActionAndBack;
