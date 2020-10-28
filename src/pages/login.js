import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"

import Button from "../components/controls/button"
import EmailGroup from "../components/form-groups/email"
import TextGroup from "../components/form-groups/text"
import Summary from "../components/typography/summary"

const Login = () => {
  return (
    <Layout>
      <main className="w-full sm:w-4/5 lg:w-1/2 xxl:w-1/3 mx-auto px-6 sm:px-10 pt-32 sm:pt-40 pb-16">
        <h1 className="text-theme text-4xl xxl:text-5xl font-medium leading-tight tracking-tightest">
          Login
        </h1>
        <Summary>Get justice for your family by reporting a crime.</Summary>

        <div className="flex flex-wrap flex-col sm:flex-row -mx-6 sm:-mx-10">
          <div className="w-full px-6 sm:px-10 py-4">
            <EmailGroup
              id="email"
              name="E-mail Address"
              placeholder="you@email.com"
            />
          </div>

          <div className="w-full px-6 sm:px-10 py-4">
            <TextGroup id="name" name="Password" placeholder="**********" />
          </div>

          <div className="w-full md:w-3/5 px-6 sm:px-10 py-6">
            <Button>Login</Button>
          </div>

          <div className="w-full">
            <div className="text-center text-secondary">
              Don't Have an Account?{" "}
              <Link className="text-theme" to="/get-started">
                Sign Up Here
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default Login
