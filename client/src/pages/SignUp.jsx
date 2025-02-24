
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { signUpSchema } from "@/schema"
import { useAuthRedirect, useCustomForm } from "@/hooks"
import { APP_NAME } from "@/constant.js"
import { Link } from "react-router-dom";
import { useContext, useState } from "react"
import AppContext from "@/context/AppContext"

function SignUp() {

    useAuthRedirect();
    const { signUpUser } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);

    const form = useCustomForm(signUpSchema, {
        name: "Jatan",
        email: "kenil@gmail.com",
        password: "!@M@lone1",
        confirmPassword: "!@M@lone1",
    })

    async function onSubmit(values) {
        if (values.password !== values.confirmPassword) {
            form.setError("confirmPassword", { message: "Passwords do not match" })
            return
        }
        setIsLoading(true);
        await signUpUser(values.email, values.password, values.name)
        setIsLoading(false);
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="hidden w-1/2 bg-black p-12 text-white lg:flex lg:flex-col lg:justify-between">
                <div>
                    <Link to="/" className="mt-4 text-3xl font-semibold">{APP_NAME}</Link>
                </div>
            </div>
            <div className="flex w-full items-center justify-center p-12 lg:w-1/2">
                <div className="w-full max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Sign Up</h2>
                            <p className="mt-2 text-sm text-gray-6000">Enter your email and password below to sign up</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700">Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Name..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700">Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700">Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Password..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700">Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Confirm Password..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    disabled={isLoading}
                                    className="w-full bg-[#bd1e59] text-white"
                                >
                                    {isLoading ? "Loading..." : "Sign Up"}
                                </Button>
                                <div className="mt-4 text-sm text-gray-500 hover:text-gray-700 text-center">
                                    <Link to="/sign-in">Already have an account? Sign In</Link>
                                </div>
                            </form>
                            <p className="mt-6 text-xs text-gray-500">
                                By clicking continue, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
