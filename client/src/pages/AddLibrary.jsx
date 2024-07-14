import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useCustomForm } from "@/hooks";
import librarySchema from "@/schema/librarySchema";
import { useState } from "react";
import lib from "@/api/lib";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export default function AddLibrary() {
    const toast = useToast();
    const navigate = useNavigate();
	const form = useCustomForm(librarySchema, {
		libName: "",
		address: "",
		name: "",
		email: "",
		password: "",
	});

	const [isLoading, setIsLoading] = useState(false);
	async function onSubmit(values) {
		setIsLoading(true);

		const res = await lib(
			values.libName,
			values.address,
			values.name,
			values.email,
			values.password,
		);
		if (res && res.data) {
			toast({
				title: "Library updated successfully",
				duration: 3000,
			});
			navigate("/admin");
		} else {
			toast({
				title:
					res?.message ||
					"Something went wrong while adding the library",
				duration: 2000,
			});
		}
		setIsLoading(false);
	}

	return (
		<div className="flex items-center justify-center min-h-[90vh]">
			<Card className="w-full max-w-xl">
				<CardHeader>
					<CardTitle>Add new Library</CardTitle>
					<CardDescription>
						Enter the details for the library.
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<FormField
								control={form.control}
								name="libName"
                                
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">
											Library Name
										</FormLabel>
										<FormControl>
											<Input
                                                required
												placeholder="library name..."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">
											Name
										</FormLabel>
										<FormControl>
											<Input
                                            required
												placeholder="name..."
												{...field}
											/>
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
										<FormLabel className="text-gray-700">
											Email
										</FormLabel>
										<FormControl>
											<Input
                                            required
												type="email"
												placeholder="Email..."
												{...field}
											/>
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
										<FormLabel className="text-gray-700">
											Password
										</FormLabel>
										<FormControl>
											<Input
                                            required
												type="password"
												placeholder="Password..."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">
											address
										</FormLabel>
										<FormControl>
											<Input
                                            required
												placeholder="address..."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								disabled={isLoading}
								className="w-full bg-[#bd1e59] text-white"
							>
								{isLoading ? "Loading..." : "Add library"}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
