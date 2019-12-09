import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(){
        super();

        this.state={
            name:'',
            email:'',
            message:'',
            touched:{
                name:false,
                email:false,
                message:false
            }
        }
    }

    onChange=(e)=>{
        var value=(e.target.type=='checkbox') ? e.target.checked : e.target.value;
        console.log(value);
        this.setState({
            [e.target.name]:value
        })
    }

    onBlur=(e)=>{
        var touched=Object.assign({},this.state.touched);
        touched[e.target.name]=true;
        this.setState({
            touched
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        //send this information to server
        
    }

    isValidEmail=(email)=>{
        return email.indexOf("@")!=-1;
    }

    validate=()=>{
        var errors={}
        var isValid=false;

        if(this.state.name==""){
            errors.name="Name is required";
        }

        if(this.state.email==""){
            errors.email="Email is required";
        }
        else {
            if (!this.isValidEmail(this.state.email)){
                errors.email="Invalid email"
            }
        }

        if(this.state.message==""){
            errors.message="Message is required";
        }

        return {
            errors,
            isValid:Object.keys(errors).length==0
        }
    }

    render() {
        var {errors, isValid}=this.validate();
        var {touched}=this.state;
        return (
            <section className="contacts-3 bg-clouds">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3>Contact Us</h3>
                            <p>Vanes is just few finger taps away. Feel free to reach us any time during normal business
                        hours from Monday to Saturday.</p>
                            <div className="links">
                                <a href="#"><span className="fui-phone"></span>+91 80963 80962</a><br />
                                <a href="#"><span className="fui-mail"></span>hr@vanes.in</a>
                            </div>
                            <h6>Corporate Head Quaters</h6>
                            <p>Vanes is located near to heart of technology in Hyderabad.</p>
                            <p>Vanes Industries</p>
                            <p> Door No: 2-91/5&6/MPTP/3F/B-2<br />
                                Kondapur, Serilingampally,<br />
                                Hyderabad, Telangana-500084.
                    </p>
                        </div>
                        <div className="col-sm-6 col-sm-offset-1">
                            <h3>Email us</h3>
                            <p>Want to reach us by email, Send us a quick message by filling form below.</p>
                            <form>
                                <label className="h6">Name / Last Name</label>
                                <input type="text" value={this.state.name} onChange={this.onChange} onBlur={this.onBlur} className="form-control" name="name" />
                                <div>{errors.name && touched.name && <span className="error">{errors.name}</span>}</div>
                                <label className="h6">E-mail</label>
                                <input type="text" value={this.state.email} onChange={this.onChange} onBlur={this.onBlur} className="form-control" name="email" />
                                <div>{errors.email && touched.email && <span className="error">{errors.email}</span>}</div>
                                <label className="h6">Message</label>
                                <textarea rows="7" value={this.state.message} onChange={this.onChange} onBlur={this.onBlur} name="message" className="form-control"></textarea>
                                <div>{errors.message && touched.message && <span className="error">{errors.message}</span>}</div>
                                <button type="button" onClick={this.onSubmit} className="btn btn-primary" disabled={!isValid}><span className="fui-mail"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;