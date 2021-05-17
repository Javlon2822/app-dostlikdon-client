import React from 'react';
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {signIn} from "../redux/actions/loginAction";

const Login = (props) => {

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 my-5">
                        <div className="card">
                            <div className="card-body">
                                <AvForm onValidSubmit={props.signIn}>
                                    <AvField
                                        type="text"
                                        name="phoneNumber"
                                        label="Phone number"
                                        required
                                        errorMessage="Telefon raqam majburiy"
                                    />

                                    <AvField
                                        type="password"
                                        name="password"
                                        label="Password"
                                        required
                                        errorMessage="Parol majburiy"
                                    />

                                    <button type="submit" className="btn btn-success btn-block">Login</button>
                                </AvForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {signIn})(Login);