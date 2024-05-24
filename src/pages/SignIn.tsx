import { SignInButton } from "@clerk/clerk-react";

const SignIn = () => {

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Superhero Dashboard</h1>
          <p className="mb-5">Manage and view all the superheroes in the known universe with this simple app, whith some basic analytics. </p>
          <p className="mb-5">Sign up and use for free right now!</p>
          <p className="mb-5 font-bold">This project is backed by a free version of Azure SQL, however, it has reached it's monthly bandwidth until the next month.  Sorry for the inconvenience!</p>
          <SignInButton>
            <button className="btn btn-primary">Sign In</button>
          </SignInButton>
        </div>
      </div>
    </div>

  );
};

export default SignIn;