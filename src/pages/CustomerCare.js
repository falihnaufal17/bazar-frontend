import React from 'react';
import '../assets/styles/CustomerCare.scss';

const CustomerCare = (props) => {
    return (
        <div id="customer-care">
            <div className="container formbox">
                <div className="box">
                    <h2>Submit a request</h2>
                    <div className="row">
                        <div className="col-md-6 col-md-auto">
                            <form>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email <span class="required_notification">*</span></label>
                                    <input type="email" name="" class="form-control" placeholder="example@gmail.com" />
                                </div>
                                <div class="form-group second">
                                    <label for="exampleFormControlInput2">Topic <span class="required_notification">*</span></label>
                                    <input type="text" name="" class="form-control" placeholder="Refund" />
                                </div>
                                <div class="form-group second">
                                    <label for="exampleFormControlInput3">Subject <span class="required_notification">*</span></label>
                                    <input type="text" name="" class="form-control" placeholder="Refund" />
                                </div>
                                <div class="form-group second">
                                    <label for="exampleFormControlTextarea1">What is regarding <span class="required_notification">*</span></label>
                                    <textarea type="text" name="" class="form-control" placeholder=""></textarea>
                                    <p>Please enter the details of your request. A member of our support staff will respond on soon as possible.</p>
                                </div>

                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile" />
                                    <label class="custom-file-label" for="customFile">Add File</label>
                                </div>

                                <button type="submit" class="btn">SUBMIT</button>
                            </form>
                        </div>

                        <div className="col-md-6 col-md-auto">
                            <div className="content-right">
                                <h2>A LITTLE BIT ABOUT US</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada quis facilisis a fames. Aliquet est id gravida vel nibh nisl sem adipiscing. Lorem venenatis lectus porttitor egestas justo, eros. Viverra faucibus eget et pulvinar pretium augue neque. Elementum in quis vel urna arcu, amet, placerat mauris sagittis. Est donec vestibulum, laoreet sed odio lorem diam nunc pretium. Nec, ut urna proin elit in cras urna. Mattis bibendum vitae elementum pretium feugiat tortor. Ac dolor et non nec. Sapien tellus lobortis quis tellus consectetur vitae. In leo suspendisse consectetur arcu porta leo. Viverra risus tellus et, mauris.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CustomerCare;