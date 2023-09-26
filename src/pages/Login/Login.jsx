import { Link } from "react-router-dom";

const Login = () => {
    // const logo  = "https://i.ibb.co/qp85vGN/Frame-5-1.png"
    const heroLogo = "https://i.ibb.co/N2HFxj9/Frame-5-2.png"


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <img className="w-full lg:w-[469px]" src={heroLogo} alt="" />
                <h1 className=" text-5xl font-semibold mt-3">Connect and Discover with Expression</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className="text-2xl font-semibold text-center">Please Log in</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F53518] text-white hover:bg-[#F53518]">Login</button>
                        </div>
                        <p>New to Expression? <span className="font-bold text-[#F53518]"><Link to="/signup">Sign Up</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;