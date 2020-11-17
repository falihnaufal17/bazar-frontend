import React, {useState, lazy, Suspense} from 'react';
import Arrow from '../assets/icons/ARROW MODIFY.svg';
import IconEmail from '../assets/icons/ICON EMAIL.svg';
const EditEmail = lazy(() => import('./EditEmail'));

const PaymentEmailGuest = props => {
    const [isModify, setIsModify] = useState(false);
    const [data, setData] = useState({
        email: ''
    })
    const [profile, setProfile] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = (param) => {
        profile.push(param);
        setProfile(profile);
    }

    const onUpdate = (data) => {
        setIsModify(false);
        profile.pop()
        profile.push(data);
        setProfile(profile)
    }

    console.log(profile.length)

    return(
        <Suspense fallback={<div/>}>
            <div className="card">
                <div className="row align-items-center justify-content-between mb-3">
                    {
                        isOpen ?
                        (
                            <>
                                <div className="col">
                                    <div className="title mb-0">EMAIL</div>
                                </div>
                                {
                                    profile.length > 0 ?
                                    (
                                        <>
                                            {
                                                isModify ? 
                                                (
                                                    <>
                                                        <div className="col-auto">
                                                            <div className="subtitle pointer-event" onClick={()=>onUpdate(data)}><img className="rotate-90" src={Arrow} alt="arrow" /> Save & return</div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="subtitle pointer-event" onClick={()=>setIsModify(false)}>Cancel</div>
                                                        </div>
                                                    </>
                                                ) :
                                                (
                                                    <div className="col-auto">
                                                        <div className="subtitle pointer-event" onClick={()=>setIsModify(!isModify)}>modify <img src={Arrow} alt="arrow" /></div>
                                                    </div>
                                                )
                                            }
                                        </>
                                    )
                                    :
                                    <div/>
                                }
                            </>
                        )
                        :
                        <div />
                    }
                </div>
                {
                    isOpen ?
                    (
                        <>
                            {
                                profile.length > 0 ?
                                (
                                    isModify ?
                                    (
                                        <EditEmail data={data} onSubmit={onUpdate} setData={setData} profile={profile} />
                                    ):
                                    (
                                        <div className="title">{profile[0].email}</div>
                                    )
                                )
                                :
                                (
                                    <EditEmail data={data} onSubmit={onSubmit} setData={setData} profile={profile} />
                                )
                            }
                        </>
                    ):
                    (
                        <div className="text-info pointer-event" onClick={()=>setIsOpen(!isOpen)}><img src={IconEmail} alt="icon-email" /> EMAIL</div>
                    )
                }
            </div>
        </Suspense>
    )
}

export default PaymentEmailGuest;