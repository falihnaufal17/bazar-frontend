import React from 'react';

const EditEmail = props => {
    return(
        <div>
            <div className="form-group">
                <label className="subtitle font-weight-normal">Enter your email address to proceed with your order</label>
                <input type="email" className="form-control" name="email" placeholder="valentinorossi46@gmail.com" />
            </div>
        </div>
    )
}

export default EditEmail;