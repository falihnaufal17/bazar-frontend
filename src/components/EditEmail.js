import React from 'react';

const EditEmail = props => {
    return(
        <div>
            <div className="form-group">
                <label className="subtitle font-weight-normal">Enter your email address to proceed with your order</label>
                <input type="email" className="form-control" name="email" onChange={(e) => props.setData({email: e.target.value})} value={props.data.email} placeholder="valentinorossi46@gmail.com" />
            </div>
            {
                props.profile.length > 0 ?
                (
                    <div/>
                ):
                (
                    <div className="text-right">
                        <a href="#" className="btn-primary" onClick={()=>props.onSubmit(props.data)}>ADD AS YOUR EMAIL</a>
                    </div>
                )
            }
        </div>
    )
}

export default EditEmail;